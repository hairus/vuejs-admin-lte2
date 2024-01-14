<template>
 <div class="container">
   <div class="row">
     <div class="col-md-12">
       <div class="box">
         <div class="box-body">
           <form @submit.prevent="login">
             <div class="form-group">
               <label for="">email</label>
               <input type="text" class="form-control" v-model="email">
             </div>
             <div class="form-group">
               <label for="">password</label>
               <input type="password" class="form-control" v-model="password">
             </div>
             <button class="btn btn-primary">login</button>
           </form>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>
<script setup>
import {ref} from "vue";
import api from "../api/index.js"

import {useAuthUser} from "../stores/auth.js";
import router from "../route/index.js";

const store = useAuthUser()
const email = ref('zhomenep@gmail.com');
const password = ref('10032010')
const login = async () => {
  await api.post('auth/login', {
    "email":email.value,
    "password" : password.value
  })
      .then(res => {
        store.isLogin = true
        store.user = res.data.data
        store.token = res.data.token
        router.replace({path:'/'})
            .then(() => { router.go(0) })


      })

}
</script>