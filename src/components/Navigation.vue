<template>
  <nav class="container-fluid desktop">
      <div class="container py-4">
            <div class="d-flex justify-content-between align-items-center">
                <div class="">
                    <h1 class="text-secondary" style="cursor:pointer">FireBlogs</h1>
                </div>
                <div v-if="!mobile">
                    <ul class="nav">
                            <li class="nav-item">
                               <router-link class="nav-link h5 text-dark" :to="{name:'Home'}">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link h5 text-dark" :to="{name:'Blog'}">BLOGS</router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link h5 text-dark" href="#">CREATE BLOGS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link h5 text-dark" href="#">LOGIN/REGISTER</a>
                            </li>
                    </ul>
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
            <li class="nav-item">
                <a class="nav-link h5 text-white" href="#">CREATE BLOG</a>
            </li>
            <li class="nav-item">
                <a class="nav-link h5 text-white" href="#">LOING/REGISTER</a>
            </li>
        </ul>
        </nav>
  </transition>
  
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
export default {
    setup(){
        let mobileWidth=ref(null)
        let mobileNav=ref(null);
        let mobile=ref(null);
        let close=ref(null);
        let open=ref(null);
        onMounted(()=>{
          window.addEventListener("resize",checkScreen);
          checkScreen()
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
        return{mobile,mobileNav,toggleMenu,close,open,closeMenu}
    }
}
</script>

<style>
.desktop{
    box-shadow: 0 0 10px 1px rgba(0,0,0,0.1);
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
.fade-enter-active,
.fade-leave-active {
  transition:all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>