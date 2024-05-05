<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-6 col-md-8 col-sm-10 mx-auto">
          <div class="card shadow">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <div class="image-container">
                    <img :src="ProductDetails.thumbnail" :alt="ProductDetails.title" class="img-fluid rounded" />
                  </div>
                </div>
                <div class="col-lg-6 mt-4 mt-lg-0">
                  <h2 class="card-title">{{ ProductDetails.title }}</h2>
                  <p class="lead">{{ ProductDetails.description }}</p>
                  <p class="lead">Price: ${{ ProductDetails.price }}</p>
                  <div class="d-flex justify-content-between align-items-center mt-4">
                    <router-link :to="'/products/edit/' + ProductDetails.id" class="btn btn-primary">Edit</router-link>
                    <button class="btn btn-danger" @click="deleteProduct(ProductDetails.id)">Delete</button>
                  </div>
                </div>
              </div>
            </div>
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

<style scoped>
.card {
  border: none;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.image-container {
  height: 250px;
  overflow: hidden;
  border-radius: 12px;
}

.img-fluid {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.lead {
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.btn {
  font-size: 1.2rem;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
  color: #fff;
}

.btn:hover {
  opacity: 0.8;
}
</style>
