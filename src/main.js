import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { createRouter , createWebHistory } from 'vue-router';
// import ProductsPages from './components/Pages/ProductsPages.vue';
import HomeComponent from './components/ProvideInject/HomeComponent.vue';
import AllProducts from './components/Pages/AllProducts.vue';
import ProductDetails from './components/Pages/productDetails.vue';
import EditAndAddProduct from './components/Pages/editAndAddProduct.vue';

const routes =[
    {path: '/', component: HomeComponent},
    {path:'/products',children:[
        {path:'',component:AllProducts},
        {path:':id' ,component:ProductDetails},
        {path:'add' ,component:EditAndAddProduct},
        {path:'edit/:id' ,component:EditAndAddProduct},
        {
            path:'/:NotFound(.*)*',
            component:HomeComponent,
            meta:{hideNavbar:true}
        }
    ]}
]

let router =createRouter({
    history: createWebHistory(),
    routes,
})
createApp(App).use(router).mount('#app')
