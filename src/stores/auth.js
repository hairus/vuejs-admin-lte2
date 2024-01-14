import {defineStore} from "pinia";

export const useAuthUser = defineStore('auth', {
    state : () => ({
        isLogin : false,
        user:"",
        token:""
    }),
    getters:{
        isAuth(state){
           return state.isLogin
        }
    },
    persist: true,
})
