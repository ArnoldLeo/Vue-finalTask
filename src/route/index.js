import { createRouter,createWebHistory} from "vue-router";
import Home from '../components/home/Home.vue'

const routes=[
    { path: '/:pathMatch(.*)*', name: 'Home', component: Home },
    {
        path:'/home',
        name:'home',
        component:Home
    },
    {
        path:'/details/:id',
        name:'details',
        component:()=>import(/*webpackChunkName="Details"*/"@/components/view/Details.vue")
    },
    {
        path:'/login',
        name:'login',
        component:()=>import(/*webpackChunkName="Login"*/"@/components/login/Login.vue")
    },
    
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

// router.beforeEach((to, from, next) => {
//     if (to.name == 'login' && localStorage.getItem('userData')) next({ name: 'home' })
//     else next()
// })
  export default router;