<template>
    <section class="container profile" style="padding:100px 10px" v-if="usersData">
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
                          <form action="">
                              <div class="form-group mb-3">
                                  <label for="" class="mb-2">First Name</label>
                                  <input type="text" class="form-control" v-model="firstName">
                              </div>
                              <div class="form-group mb-3">
                                  <label for="" class="mb-2">Last Name</label>
                                  <input type="text" class="form-control" v-model="lastName">
                              </div>
                              <div class="form-group mb-3">
                                  <label for="" class="mb-2">UserName</label>
                                  <input type="text" class="form-control" v-model="name">
                              </div>
                              <div class="form-group mb-4">
                                  <label for="" class="mb-2">Email</label>
                                  <input type="email" class="form-control" v-model="email">
                              </div>
                              <div class="save mt-3">
                                   <input type="submit" value="Save Change" class="btn btn-primary ">
                              </div>
                             
                          </form>
                      </div>
                  </div>
            </div>
        </div>
     
    </section>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core';
import getUser from '../composable/getUser'
import userCollection from "../composable/userCollection"
export default {
    setup(){
        let {user}=getUser();
        let {error,usersData,load}=userCollection();
        let first=ref("");
        let last=ref("");
        let name=ref("");
        let email=ref("");
        let firstName=ref("");
        let lastName=ref("");

         onMounted(async()=>{
            await load();
            usersData.value.forEach((u)=>{
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
      
        return{first,last,name,email,firstName,lastName,usersData}
    }
}
</script>

<style>
.profile .pf h4{
    color:#ffff;
}
.profile .card{
    height: 43rem;
    /* overflow-y: scroll; */
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