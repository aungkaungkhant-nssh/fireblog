<template>
  <nav class="container-fluid desktop">
      <div class="container py-4">
            <div class="d-flex justify-content-between align-items-center">
                <div class="">
                    <h1 class="text-secondary" style="cursor:pointer">FireBlogs</h1>
                </div>
                <div v-if="!mobile" class="d-flex align-items-center justify-content-between">
                    <ul class="nav">
                            <li class="nav-item">
                               <router-link class="nav-link h5 text-dark" :to="{name:'Home'}">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link h5 text-dark" :to="{name:'Blog'}">BLOGS</router-link>
                            </li>
                            <li class="nav-item" v-if="user && user.email==='akk1223@gmail.com'">
                                <router-link class="nav-link h5 text-dark" :to="{name:'CreateBlog'}">Create Blogs</router-link>
                            </li>
                            <li class="nav-item" v-if="!user">
                                 <router-link class="nav-link h5 text-dark" :to="{name:'LoginAndRegister'}" >Login/Register</router-link>
                             </li>
                                <!-- <h5 class="nav-link" @click="logout">Logout</h5> -->
                             
                    </ul>
                     <Pflog :user="user"  v-if="user" class="profile"></Pflog>
                </div>
                <span class="material-icons  md-24 menu " v-if="open" @click="toggleMenu">
                    menu
                </span>
                <span class="material-icons" v-if="close" @click="closeMenu">
                    close
                </span>
            </div>
               
      </div>
  </nav>
  <transition name="fade" class="mobile-nav">
      <nav  v-if="mobileNav">
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link h5 text-white" :to="{name:'Home'}">Home</router-link>
            </li>
            <li class="nav-item">
                 <router-link class="nav-link h5 text-white" :to="{name:'Blog'}">Blog</router-link>
            </li>
            <li class="nav-item" v-if="user && user.email==='akk1223@gmail.com'">
                    <router-link class="nav-link h5 text-white" :to="{name:'Home'}">Create Blogs</router-link>
            </li>
            <li class="nav-item" v-if="!user">
                 <router-link class="nav-link h5 text-white" :to="{name:'LoginAndRegister'}"  >Login Register</router-link>
            </li>
            <li class="nav-item" v-if="user">
                <h5 class="nav-link" @click="logout">Logout</h5>
             </li>
         
        </ul>
        </nav>
  </transition>
  
</template>

<script>
import Pflog from './Pflog'
import { onMounted, ref } from '@vue/runtime-core'
import { auth } from '../firebase/config'
import getUser from '../composable/getUser'
import userCollection from "../composable/userCollection"
export default {
  components: { Pflog },
    setup(props,context){
         let {error,usersData,load}=userCollection();
        let mobileWidth=ref(null)
        let mobileNav=ref(null);
        let mobile=ref(null);
        let close=ref(null);
        let open=ref(null);
        // let error=ref(null);
        let {user}=getUser();
        onMounted(async()=>{
          window.addEventListener("resize",checkScreen);
          checkScreen()
          await load();       
        })
        let checkScreen=()=>{
            mobileWidth.value=window.innerWidth;
            if(mobileWidth.value<=768){
               mobile.value=true;
                 open.value=true;
                 
               return 
            }
            mobile.value=false;
            mobileNav.value=false;
            open.value=false;
            close.value=false
        }
        let toggleMenu=()=>{
            mobileNav.value=!mobileNav.value
            open.value=false;
            close.value=true;
        }
        let closeMenu=()=>{
            mobileNav.value=!mobileNav.value
            open.value=true;
            close.value=false;
        }
        let logout=async()=>{
           try{
               await auth.signOut();
                console.log("user signout")
           }catch(err){
               error.value=err.message;
               console.log(err.value)
           }
        }
        
        
        return{mobile,mobileNav,toggleMenu,close,open,closeMenu,logout,user,usersData}
    }
}
</script>

<style>
.desktop{
    box-shadow: 0 0 10px 1px rgba(0,0,0,0.1);
}
.desktop h5{
    color:#000;
    cursor: pointer;
    transition: all 0.5s;
}
.desktop h5:hover{
      transform: translateY(-3px);
      color:#000;
}
.mobile-nav h5{
    color:#fff;
}
nav h1{
    font-weight: 500;
    letter-spacing: 1px;
}
nav .menu{
    cursor: pointer;
    font-size: 30px;
}
.nav li a{
    transition: all 0.5s;
}
.nav li a:hover{
  transform: translateY(-3px);
}
.mobile-nav ul{
    display: flex;
    flex-direction: column;
    position: fixed;
    top:0;
    left:0;
    background-color: #2d3436;
    height: 100vh;
    width: 250px;
    z-index: 1000;
    padding: 30px 20px;
    
}
.mobile-nav li{
    margin-top: 20px;
  
}
/* .fade-enter-active,
.fade-leave-active {
  transition:all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
} */
.profile{
    position: relative;
}
</style>