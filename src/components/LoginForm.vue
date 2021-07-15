<template>
     <h1 class="mb-4">Login To FireBlog</h1>
    
   <form  @submit.prevent="login">
        <div class="form-group mb-4">
          <input type="email" class="form-control" placeholder="Email" v-model="email">
        </div>
        <div class="form-group mb-4">
          <input type="password" class="form-control" placeholder="password" v-model="password">
        </div>

        <div v-if="error" class="mb-3">
              <p class="text-danger">{{error}}</p>
        </div>

         <h5 class="mb-2">
          Don't have an account? 
          <span @click="registerShow">Register</span>
        </h5>
         <router-link :to="{name:'ResetPassword'}" id="signup" style="color:#34495e;font-size:18px;" >Forgot Password</router-link>
         <div class="mt-3">
            <input type="submit" class="btn btn-dark" value="Login">
          </div>
   </form>
   
       
  
</template>

<script>
import { ref } from '@vue/reactivity';
import signIn from '../composable/signIn'
import {useRouter} from "vue-router"
export default {
  setup(props,context){
    let router=useRouter();
    let  {error,checkEmailandPassword}=signIn();
    let email=ref("");
    let password=ref("");
    let registerShow=()=>{
        context.emit("showForm");
    }
    let login=async()=>{
        let res=await checkEmailandPassword(email.value,password.value);
        if(res){
          router.push("/");
        }
    }
    return{registerShow,login,email,password,error,checkEmailandPassword}
  }
}
</script>

<style>

</style>