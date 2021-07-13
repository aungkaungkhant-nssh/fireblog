<template>
  <div class="pf" @click="profileModelShow">
      <h4>{{first}}{{last}}</h4>
  </div>
  <div class="alert" v-if="showProfile">
      <ProfileModel :first="first" :last="last" :user="user"></ProfileModel>
  </div>
</template>

<script>
import ProfileModel from './ProfileModel'
import { computed, onMounted, ref } from '@vue/runtime-core'


import { db } from '../firebase/config';
export default {
  components: { ProfileModel },
    props:["user"],
    setup(props){ 
        let name=ref("");
        let first=ref("");
        let last=ref("");
        let showProfile=ref(false);
        let profileModelShow=()=>{
            showProfile.value=!showProfile.value
        }
        onMounted(()=>{
           name.value=props.user.displayName;
           first.value=name.value.substring(0,1).toUpperCase()
           last.value=name.value.substring(name.value.length-1).toUpperCase()
        })
        return{first,last,showProfile,profileModelShow}
    }
}
</script>

<style>
.pf{
    width: 55px;
    height: 50px;
    border-radius:50%;
    background-color: #3498db;
    text-align: center;
    cursor: pointer;
    user-select: none; 
    padding-top: 12px;
  
}
.pf h4{
      font-size: 20px;
    color:#fff;
}
.alert{
    position: absolute;
    top:80px;
    right: 50px;
    background-color: #95a5a6;
    width: 350px;
    height: 190px;
}

</style>