<template>
  <div class="up">
       <div class="pf">
            <h4>{{first}}{{last}}</h4>
        </div>
        <div>
            <h6 class="yourName">{{user.displayName}}</h6>
             <span>{{user.email}}</span>
        </div>
  </div>
  <div class="mt-3 mb-3">
      <div class="d-flex align-items-center justify-content-between mb-2" style="width:80px;cursor:pointer">
        <span class="material-icons">
                person
        </span>
        <h6 class="mt-2">Profile</h6>
        
     </div>
     <div class="d-flex align-items-center justify-content-between" style="width:90px;cursor:pointer">
         <span class="material-icons">
                logout
         </span>
         <h6  class="mt-2" @click="logout">Logout</h6>
     </div>
  </div>
</template>

<script>
import { auth } from '../firebase/config';
export default {
    props:["first","last","user"],
    setup(){
         let logout=async()=>{
           try{
               await auth.signOut();
                console.log("user signout")
           }catch(err){
               error.value=err.message;
               console.log(err.value)
           }
        }
        return{logout}
    }
}
</script>

<style>
.up{
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
    border-bottom: 1px solid #fff;
}
.yourName{
    text-transform: capitalize;
}
</style>