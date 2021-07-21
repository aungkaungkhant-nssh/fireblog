<template>
  <div class="container-fluid blog-card pt-5 pb-5">
    <div class="container" v-if="blogs.length>0">
        <div class="row">
          <ToggleButton @toggle="toggle" v-if="user && user.email==='akk1223@gmail.com'"></ToggleButton>
          <div class="col-xl-3 col-md-6 col-lg-4 mt-4" v-for="blog in blogs" :key="blog.id">
              <div class="card mb-3 blog-card">
               <transition name="fade">
                 <div v-if="showIcon" >
                    <span class="material-icons trash" @click="deletePost(blog.id)">
                    delete
                    </span>
                  <span class="material-icons edit">
                    edit
                  </span>
                </div>
               </transition>
                     
                <img :src="blog.image" alt="" style="height:200px">
                <div class="card-body">
                  <h4>{{blog.title}}</h4>
                  <p>Post on : {{blog.post_at.toDate().toDateString()}}</p>
                  <div style="margin-top:100px">
                      <router-link :to="{name:'ViewPost',params:{id:blog.id}}" class="go">View The Post</router-link>
                      <span class="material-icons arrow">
                          east
                    </span>
                  </div>
                </div>
              </div>
          </div>
        </div>
        
    </div>
  </div>
</template>

<script>
import ToggleButton from '../components/ToggleButton'
import { ref } from '@vue/reactivity'
import userCollection from '../composable/userCollection'
import { onMounted } from '@vue/runtime-core'
import getUser from '../composable/getUser'
import { db, storage } from '../firebase/config'
import filedelete from '../composable/filedelete'
import deleteDoc from  '../composable/deleteDoc'
export default {
  components: { ToggleButton },
    name: 'Blog',
 setup(){
    let {error,data,load}=userCollection();
    let {imageFileDelete}=filedelete();
    let {trashDoc}=deleteDoc();
    let {user}=getUser();
   let showIcon=ref(null);
   let image=ref("");
   let toggle=(check)=>{
     showIcon.value=check;
   }
   let blogs=ref([]);
    onMounted(async()=>{
        await load("users"); 
        await load('blogs'); 
       blogs.value.push(...data.value);
    })
    let deletePost=async(id)=>{
        let res=await db.collection("blogs").doc(id).get();
        image.value=res.data().imagename;
        await trashDoc("blogs",id);
        await imageFileDelete(image.value);
    }
   return{toggle,showIcon,blogs,user,deletePost}
 }
}

</script>

<style>
.fake{
  width: 100%;
  /* background-color: red; */
}
.card{
  position: relative;
}
.toggle{
  color:#8395a7;
  font-size: 25px;
  cursor: pointer;
}
.trash{
  position: absolute;
  top:15px;
  left: 15px;
  color:#e84118;
  background-color: #dcdde1;
  border-radius: 50px;
  padding: 5px 7px;
}
.edit{
   position: absolute;
  top:15px;
  right: 15px;
  color:blue;
  background-color: #dcdde1;
  border-radius: 50px;
  padding: 5px 7px;
}
.blog-card span{
  font-size: 35px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>