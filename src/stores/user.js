import {defineStore} from "pinia";

export const useUserStores = defineStore('user', {
    state: () => ({
        user: [],
        token:"",
        users: [],
    }),
    getters: {
        myToken(state){
            return state.token
        }
    },
})