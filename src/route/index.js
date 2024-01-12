import {createWebHistory, createRouter} from "vue-router";

import Dashboard from "../Views/dashboard.vue"
import About from "../Views/About.vue"

const routes = [
    {
        path:"/",
        name:"dashboard",
        component : Dashboard,
        meta: { transition: 'slide-left' },
    },
    {
        path:"/about",
        name:"about",
        component : About
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router
