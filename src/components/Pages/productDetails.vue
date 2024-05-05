<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-6 col-12">
        <div class="image-container">
          <img
            :alt="ProductDetails.title"
            :src="ProductDetails.thumbnail" />
        </div>
      </div>
      <div class="col-lg-6 col-12">
        <h3 class="display-6">{{ ProductDetails.title }}</h3>
        <p class="lead">{{ ProductDetails.description }}</p>
        <p>Price: $ {{ ProductDetails.price }}</p>
        <div class="btns">
          <router-link
            :to="'/products/edit/' + ProductDetails.id"
            class="btn btn-primary me-3"
            >Edit</router-link
          >
          <button
            class="btn btn-danger"
            @click="deleteProduct(ProductDetails.id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getProductById from '../../../public/Mixins/fetchData.js';
import deleteProductById from '../../../public/Mixins/fetchData.js';

export default {
  name: 'ProductDetails',
  data() {
    return {
      id: '',
    };
  },
  mixins: [getProductById, deleteProductById],
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    this.getProductById(this.id);
  },
  methods: {
    deleteProduct(id) {
      console.log(id);
      this.deleteProductById(id);
      this.$router.push('/products');
    },
  },
};
</script>

<style scoped></style>
