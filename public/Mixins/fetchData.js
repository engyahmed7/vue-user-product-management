import axios from "axios"

export default{
    data(){
        return{
            products:[],
            ProductDetails:[],
            addedProduct:[]
        }
    },
    methods:{
        getAllProducts(){
            axios.get('http://localhost:3000/products')
            .then((response)=>{
            this.products = response.data
            })
            .catch((error)=>{
                console.log(error)
            })
       },
       getProductById(id) {
        return axios.get(`http://localhost:3000/products/${id}`)
            .then((response) => {
                this.ProductDetails = response.data;
            })
            .catch((error) => {
                console.log("Error fetching product details:", error);
                throw error; 
            });
    },
       deleteProductById(id){
        axios.delete(`http://localhost:3000/products/${id}`)
        .then(()=>{
            this.getAllProducts()
        })
          .catch((error)=>{
              console.log(error)
          })
       },
       createProduct(data){
        axios.post('http://localhost:3000/products',data)
        .then(()=>{
            this.getAllProducts()
        })
          .catch((error)=>{
              console.log(error)
          })
       },
       updateProductById(id,data){
        axios.put(`http://localhost:3000/products/${id}`,data)
        .then(()=>{
            this.getAllProducts()
        })
          .catch((error)=>{
              console.log(error)
          })
       }

    }
}