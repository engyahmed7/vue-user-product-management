<template>
  <div class="container mt-4">
    <div class="row">
      <h3 class="display-6 text-center mt-4 mb-4">All Products</h3>
      <div
        class="col-md-4"
        v-for="product in products"
        :key="product.id">
        <div class="card">
          <div class="image-container">
            <img
              :src="product.thumbnail"
              :alt="product.title"
              class="card-img-top" />
          </div>
          <div class="card-body">
            <router-link :to="'/products/' + product.id">
              <h5 class="card-title">{{ product.title }}</h5>
            </router-link>
            <p class="card-text lead">{{ product.description }}</p>
            <p class="card-text">${{ product.price }}</p>
          </div>
          <div class="card-footer">
            <div class="btns">
              <router-link
                :to="'/products/edit/' + product.id"
                class="btn btn-primary me-3"
                >Edit</router-link
              >
              <button
                class="btn btn-danger"
                @click="deleteProduct(product.id)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getAllProducts from '../../../public/Mixins/fetchData.js';
import deleteProductById from '../../../public/Mixins/fetchData.js';
export default {
  name: 'AllProducts',
  mixins: [getAllProducts, deleteProductById],
  mounted() {
    this.getAllProducts();
  },
  methods: {
    deleteProduct(id) {
      console.log(id);
      this.deleteProductById(id);
    },
  },
};
</script>

<style scoped>
.image-container {
  height: 200px;
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card {
  margin-bottom: 20px;
  height: 400px;
}
</style>
