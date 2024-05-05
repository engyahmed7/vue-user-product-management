<template>
    <div class="container">
      <add-product @send="handleSend"></add-product>
      <div class="btns mt-5 mb-4">
        <button class="btn btn-outline-primary btn-lg w-50 rounded-pill mr-3" @click="toggleAdmin(true)">
          <i class="fas fa-user-shield mr-2"></i>Admin
        </button>
        <button class="btn btn-outline-primary btn-lg w-50 rounded-pill" @click="toggleAdmin(false)">
          <i class="fas fa-users mr-2"></i>Users
        </button>
      </div>
      <admin-user-component :filteredData="filteredData" @delete-user="deleteUser"></admin-user-component>
    </div>
  </template>
  
  <script>
  import AddProduct from './AddProduct.vue';
  import AdminUserComponent from './AdminUserComponent.vue';
  
  export default {
    name: 'HomeComponent',
    components: {
      AddProduct,
      AdminUserComponent,
    },
    data() {
      return {
        isAdmin: false,
        childData: [],
      };
    },
    computed: {
      filteredData() {
        return this.isAdmin
          ? this.childData.filter(item => item.role === 'admin')
          : this.childData.filter(item => item.role === 'user');
      },
    },
    methods: {
      handleSend(data) {
        console.log('Child Data from parent:', data);
        this.childData = data;
        console.log('Child Data:', this.childData);
      },
      toggleAdmin(status) {
        this.isAdmin = status;
        console.log('isAdmin:', this.isAdmin);
      },
      deleteUser(index) {
        this.childData.splice(index, 1);
      }
    },
  };
  </script>
  