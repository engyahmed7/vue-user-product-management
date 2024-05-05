<template>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredData" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.role }}</td>
            <td>
              <button class="btn btn-danger" @click="deleteUser(index)"
              >Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminUserComponent',
    props:['filteredData'],
    methods:{
        deleteUser(index) {
            console.log(`deleted index: ${index}`);
            this.$emit('delete-user', index);
    }
    }
  };
  </script>
  