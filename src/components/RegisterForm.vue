<template>
   <h1 class="mb-4">Register To FireBlog</h1>
   <div v-if="error">
     {{error}}
   </div>
   <div v-if="storeError">
     {{storeError}}
   </div>
   <form @submit.prevent="register">
     <div class="form-group mb-4">
        <input type="text" class="form-control" placeholder="First Name" v-model="first">
      </div>
      <div class="form-group mb-4">
        <input type="text" class="form-control" placeholder="Last Name" v-model="last">
      </div>
      <div class="form-group mb-4">
        <input type="text" class="form-control" placeholder="UserName" v-model="name">
      </div>
      <div class="form-group mb-4">
        <input type="email" class="form-control" placeholder="Email" v-model="email">
      </div>
       <div class="form-group mb-4">
        <input type="password" class="form-control" placeholder="password" v-model="password">
       </div>
        <h5 class="mb-2">
            You have an account? Please
          <span @click="loginShow">Login</span>
         </h5>
        <div class="mt-3">
            <button class="btn btn-dark">Register</button>
        </div>
    </form>
   
     
</template>

<script>
import { ref } from '@vue/reactivity';
import store from '../composable/store'
import signUp from '../composable/signUp'
export default {
  setup(props,context){
    let {error,createAccount}=signUp();
    let {storeError,storeData}=store();
    let first=ref("");
    let last=ref("");
    let name=ref("")
    let email=ref("");
    let password=ref("");
     let register=async()=>{
       let userData={
         first:first.value,
         last:last.value,
         name:name.value,
         email:email.value
       }
      let res=await createAccount(name.value,email.value,password.value)  
      if(res){
        await storeData("users",userData);
        first.value="";
        last.value="";
        email.value="";
        password.value="";
      }
    }
    let loginShow=()=>{
      context.emit("showForm");
    }
   
    return{loginShow,register,first,last,email,password,name,error,storeError}
  }
}
</script>

<style>

</style>