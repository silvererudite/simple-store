<template>
  <div class="py-6">
    <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <div
        class="w-1/3 bg-cover"
        style="
          background-image: url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80');
        "
      ></div>
      <div class="w-2/3 p-4">
        <h1 class="text-gray-900 font-bold text-2xl">{{ name }}</h1>
        <p class="mt-2 text-gray-600 text-sm">
          {{ desc }}
        </p>
        <div class="font-bold text-indigo-600">Supplier: {{ suppId }}</div>
        <div class="flex flex-col mt-3">
          <h1 class="text-gray-700 font-bold text-xl">{{ curr }}{{ price }}</h1>
          <div class="flex justify-between mt-2">
            <Btn
              v-show="!isSupplier"
              @click.prevent="addToCart(suppId, id)"
              class="w-1/2 p-3 bg-indigo-600 text-white text-xs rounded mb-2"
            >
              Add to cart
            </Btn>
            <input
              class="w-1/5 border-2 border-indigo-600 rounded"
              min="1"
              v-show="!isSupplier"
              type="number"
              placeholder="Quantity"
              v-model="quantity"
            />
          </div>
          <Btn
            v-show="isSupplier"
            class="
              px-3
              py-2
              border-2 border-indigo-600
              text-indigo-600 text-xs
              rounded
            "
            @click.prevent="editProd(id)"
          >
            Edit
          </Btn>
          <Btn
            v-show="isSupplier"
            class="px-3 py-2 bg-indigo-600 text-white text-xs rounded"
            @click.prevent="removeProd(id)"
          >
            Delete
          </Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/Button.vue";
import Swal from "sweetalert2";
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    curr: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    suppId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      quantity: 1,
      cart: {
        title: "Electronic Test",
        supplier_id: "",
        products: [],
      },
    };
  },
  components: {
    Btn,
  },
  computed: {
    isSupplier() {
      return this.$store.state.user.is_supplier;
    },
    showCart() {
      return this.cart;
    },
  },
  methods: {
    addToCart(suppId, id) {
      //console.log(id);
      this.cart.supplier_id = suppId;
      var p = {
        product_id: id,
        quantity: this.quantity,
      };
      this.cart.products.push(p);
      //console.log(this.showCart);
      this.$store.dispatch("updateCart", this.cart);
    },
    editProd(id) {
      Swal.fire({
        title: "Update your product",
        html: `
               <input type="text" id="desc" class="swal2-input" placeholder="a unique description e.g New-t-shirt-32">
              <input type="text" id="unit_price" class="swal2-input" placeholder="25.09">
              <input type="text" id="currency" class="swal2-input" placeholder="GBP">
              `,
        confirmButtonText: "Create",
        focusConfirm: false,
        preConfirm: () => {
          const desc = Swal.getPopup().querySelector("#desc").value;
          const unit_price = Swal.getPopup().querySelector("#unit_price").value;
          const currency = Swal.getPopup().querySelector("#currency").value;
          if (!desc || !unit_price || !currency) {
            Swal.showValidationMessage(`Please enter all the fields`);
          }
          return {
            sku: desc,
            unit_price: unit_price,
            currency: currency,
          };
        },
      }).then((result) => {
        //console.log(result.value);
        this.$service
          .updateProduct(id, result.value)
          .then((res) => {
            this.SuccessAlert(res.message);
            this.$store.dispatch("getProducts", this);
          })
          .catch((res) => {
            this.ErrorAlert(res.message);
          });
      });
    },
    removeProd(id) {
      //console.log(result.value);
      this.$service
        .removeProd(id)
        .then(() => {
          this.SuccessAlert("Product removed");
          this.$store.dispatch("getProducts", this);
        })
        .catch((res) => {
          this.ErrorAlert(res.message);
        });
    },
  },
};
</script>

<style></style>
