<template>
    <section class="container profile" style="padding:100px 10px">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                  <div class="card">
                      <div class="card-header">
                          <h1 class="text-center">ACCOUNT SETTING</h1>
                      </div>
                      <div class="card-body">
                          <div class="pf mb-4">
                                <h4>{{first}}{{last}}</h4>
                          </div>
                          <form >
                              <div class="form-group mb-3">
                                  <label for="" class="mb-2">First Name</label>
                                  <input type="text" class="form-control" v-model="firstName" disabled>
                              </div>
                              <div class="form-group mb-3">
                                  <label for="" class="mb-2">Last Name</label>
                                  <input type="text" class="form-control" v-model="lastName" disabled>
                              </div>
                              <div class="form-group mb-3">
                                  <label for="" class="mb-2">UserName</label>
                                  <input type="text" class="form-control" v-model="name"  disabled>
                              </div>
                              <div class="form-group mb-4">
                                  <label for="" class="mb-2">Email</label>
                                  <input type="email" class="form-control" v-model="email"  disabled>
                              </div>
                             
                          </form>
                      </div>
                  </div>
            </div>
        </div>
     
    </section>
</template>

<script>
import { computed, onMounted, ref, watch } from '@vue/runtime-core';
import getUser from '../composable/getUser'
import userCollection from "../composable/userCollection"
import {useRouter} from 'vue-router'
export default {
    setup(){
        let router=useRouter();
        let {user}=getUser();
        let {error,data,load}=userCollection();
        let first=ref("");
        let last=ref("");
        let name=ref("");
        let email=ref("");
        let firstName=ref("");
        let lastName=ref("");
        watch(user,()=>{
            if(!user.value){
                router.push("/");
            }
        })
         onMounted(async()=>{
            await load("users");
            data.value.forEach((u)=>{
               if(u.name===user.value.displayName){
                   firstName.value=u.first;
                   lastName.value=u.last;
               }
            })
           name.value=user.value.displayName;
           email.value=user.value.email
           first.value=name.value.substring(0,1).toUpperCase()
           last.value=name.value.substring(name.value.length-1).toUpperCase()
        })
      
        return{first,last,name,email,firstName,lastName}
    }
}
</script>

<style scoped>
.profile .pf h4{
    color:#ffff;
}
.profile .card{
    min-height: 43rem;
    overflow-y: scroll;
}
.profile h1{
    color:#0984e3;
}
.profile .pf{
    width: 85px;
    height: 85px;
    border-radius:50%;
    background-color: #3498db;
    text-align: center;
    cursor: pointer;
    user-select: none; 
    padding-top: 30px;
    margin: 10px auto;
}
.save{
    width:90px;
    margin: 0px auto;

}
.form-control{
    background-color:#dfe6e9;
    padding:15px;
}
</style>