<template>
  <footer>
      <div class="container">
          <div class="">
                <div class="d-flex align-items-center flex-md-row flex-column justify-content-between text-center">
                    <div class="">
                        <h1>FireBlogs</h1>
                        <div class="icon-container">
                                <span class="material-icons">
                                    facebook
                                </span> 
                                <span class="material-icons">
                                        turned_in
                                </span>
                                <span class="material-icons">
                                        perm_phone_msg
                                </span>
                                <span class="material-icons">
                                        offline_bolt
                                </span>

                        </div> 
                    
                    </div>
                    <div class="">
                        <ul class="nav d-flex  flex-row flex-md-column  justify-content-center">
                                <li class="nav-item" >
                                     <router-link class="nav-link h5 text-white" :to="{name:'Home'}">Home</router-link>
                                </li>
                                <li class="nav-item">
                                   <router-link class="nav-link h5 text-white" :to="{name:'Blog'}">BLOGS</router-link>
                                </li>
                                <li class="nav-item" v-if="user && user.email==='akk1223@gmail.com'">
                                <router-link class="nav-link h5 text-white" :to="{name:'CreateBlog'}">Create Blogs</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link h5 text-white" :to="{name:'LoginAndRegister'}" >Login/Register</router-link>
                                </li>
                        </ul>
                    </div>   
                    <div class="">
                        <p>All reserved developed</p>    
                    </div> 
                </div>
          </div>
          
      </div>
  </footer>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import getUser from '../composable/getUser'
export default {
    setup(){
         let {user}=getUser();
        onMounted(async()=>{
          window.addEventListener("resize",checkScreen);
          checkScreen()
          await load("users");       
        })
        return{user}
    }
}
</script>

<style>
footer{
    background-color: #303030;
    color:#fff;
    padding: 50px 0px;
    /* margin-top: 1000px; */
}
.icon-container span{
   margin: 20px 20px 0px 0px;
   cursor: pointer;
   font-size: 30px;
}
@media screen and (max-width:700px) {
    footer .nav{
        margin:20px 0px;
    }
}
</style>