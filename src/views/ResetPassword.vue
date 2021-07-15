<template>
  <div class="container mt-5">
        <Model v-if="showModel" :modelContent="modelContent" @hideModel="showModel=!showModel"></Model>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card" style="height:19rem">
                    <div v-if="error">
                      {{error}}
                    </div>
                    <div class="card-body">
                        <div class="mb-5">
                              <h1 class="text-center">Reset Password</h1>
                               <p class="text-center">Forgot your passowrd? Enter your email to reset it</p>
                               <p class="text-center">Back To <router-link :to="{name:'LoginAndRegister'}" class="text-center">login</router-link> </p>
                               
                        </div>
                         
                          <form @submit.prevent="resetPassword">
                            <div class="from-group">
                              <input type="text" class="form-control" placeholder="email" v-model="email">
                            </div>
                            <div class="mt-3 reset-btn">
                                <button class="btn btn-dark btn-lg" type="submit">Reset</button>
                            </div>
                          </form>
                    </div>  
                </div>  
             </div>  
        </div>     

  </div>
</template>

<script>
import Model from '../components/Model'
import { ref } from '@vue/reactivity'
import { auth } from '../firebase/config';
import {useRouter} from 'vue-router'
export default {
  components: { Model },
  setup(){
    let router=useRouter();
    let email=ref("");
    let modelContent=ref("");
    let showModel=ref(false);
    let resetPassword=async()=>{
      try{
          await auth.sendPasswordResetEmail(email.value);
          showModel.value=true;
          modelContent.value="If your account exist,you will recieve a email";
          email.value=""
      }catch(err){
        modelContent.value=err.message;
         showModel.value=true;
      }
     
    }
    return{email,resetPassword,showModel,modelContent}
  }
}
</script>

<style>
.reset-btn{
  width: 80px;
  margin: 0px auto;

}
.reset-btn .btn{
      border-radius: 50px;

}
</style>