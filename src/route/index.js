import {createWebHistory, createRouter} from "vue-router";

import Dashboard from "../components/dashboard.vue"
import About from "../Views/About.vue"
import Home from "../Views/home.vue"
import Login from "../components/login.vue"

import { useAuthUser } from '../stores/auth.js'


const routes = [
    {
        path:"/login",
        name: "login",
        component: Login
    },
    {
        path:"/",
        name:"dashboard",
        component : Dashboard,
        children :[
            {
                path:"",
                name:"home",
                component:Home
            },
            {
                path:"about",
                name:"about",
                component:About
            }
        ]
    }

]

const router = createRouter({
    history : createWebHistory(),
    routes
})

// router.beforeEach(async (to, from, next) => {
//
//     const store = useAuthUser()
//     if (to.name !== 'login' && store.isAuth === false) {
//         next({ name: 'login' })
//     }else {
//         next()
//     }
// })

export default router
