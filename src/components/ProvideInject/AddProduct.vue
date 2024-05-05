<template>
  <div class="container">
    <h1 class="mt-3 mb-5 display-4 text-center">Add User</h1>
    <form class="mt-3" @submit.prevent="HandelCreateData">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group mb-3">
            <label
              for="name"
              class="form-label"
              >Name</label
            >
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter Name"
              v-model.lazy.trim="name" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group mb-3">
            <label
              for="age"
              class="form-label"
              >Age</label
            >
            <input
              type="text"
              class="form-control"
              id="age"
              placeholder="Enter Age"
              v-model.lazy.number="age" />
          </div>
        </div>
      </div>
      <div class="form-group mb-3">
        <label
          for="role"
          class="form-label"
          >Select Role</label
        >
        <select
          class="form-select"
          name="role"
          v-model.lazy.trim="role">
          <option
            selected
            value="">
            Choose Role
          </option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <button
        type="submit"
        class="btn btn-primary">
        Insert 
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data() {
    return {
      name: '',
      age: 0,
      role: '',
      data: [],
    };
  },
  emits: ['send'],
  methods: {
    HandelCreateData() {
      this.data.push({
        name: this.name,
        age: this.age,
        role: this.role,
      });
      this.name = '';
      this.age = 0;
      this.role = '';

      this.$emit('send', this.data)
    //   console.log(this.data);
    },

  },
};
</script>

<style scoped></style>
