<template>
    <div class="container">
        <h1 class="display-6 mt-4 mb-4 text-center" v-if="!this.paramsData">Add Product</h1>
        <h1 class="display-6 mt-4 mb-4 text-center" v-else>Edit Product</h1>

        <form @submit.prevent="!this.paramsData?addProduct():updateProduct()">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title"
                v-model.lazy.trim="title">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" id="description" v-model.lazy.trim="description"></textarea>
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input type="number" class="form-control" id="price" v-model.lazy.number="price">
            </div>
            <div class="mb-3">
                <label for="thumbnail" class="form-label">Thumbnail</label>
                <input type="text" class="form-control" id="thumbnail" v-model="thumbnail">
            </div>
            <button type="submit" class="btn btn-primary"  v-if="!this.paramsData">Add</button>
            <button type="submit" class="btn btn-primary" v-else>Update</button>
        </form>
    </div>
</template>

<script>
import createProduct from '../../../public/Mixins/fetchData.js'
import updateProductById from '../../../public/Mixins/fetchData.js'

    export default {
        name: 'editAndAddProduct',  
        data() {
            return {
                title: '',
                description: '',
                price: '',
                thumbnail: '',
                paramsData:''
            }
        },
        mixins: [createProduct,updateProductById],
        methods: {
            addProduct(){
                const product = {
                    title: this.title,
                    description: this.description,
                    price: this.price,
                    thumbnail: this.thumbnail
                }
                console.log(product);
                this.createProduct(product);
                this.$router.push('/products');
            },
            updateProduct(){
                const product = {
                    title: this.title,
                    description: this.description,
                    price: this.price,
                    thumbnail: this.thumbnail
                }
                console.log(product);
                this.updateProductById(this.paramsData, product);
                this.$router.push('/products');
            }
        },

        created() {
            this.paramsData = this.$route.params.id;
            if (this.paramsData) {
                this.getProductById(this.paramsData)
                    .then(() => {
                        this.title = this.ProductDetails.title;
                        this.description = this.ProductDetails.description;
                        this.price = this.ProductDetails.price;
                        this.thumbnail = this.ProductDetails.thumbnail;
                    })
                    .catch(error => {
                        console.error("product details:", error);
                    });
            }
        }

        
    }

</script>

<style scoped>

</style>