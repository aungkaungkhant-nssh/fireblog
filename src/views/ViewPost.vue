<template>
   <div class="container my-5">
     <div class="row">
       <div class="col-md-3"></div>
        <div class="col-md-5" v-for="blog in computedBlog" :key="blog.id">
            <div class="card ">
                <div class="card-header">
                    <h3 class="viewtitle text-center">{{blog.title}}</h3>
                    <p class="text-center">Post on : {{blog.post_at.toDate().toDateString()}}</p>
                </div>
                <div class="card-body">
                    <div style="">
                         <img :src="blog.image" alt="" style="width:100%;height:200px">  
                    </div>
                     <div v-html="blog.content" class="mt-5 viewpost"></div>
                </div>
            </div>  
        </div> 
     </div>
   </div>
   
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core';
import userCollection from '../composable/userCollection'
export default {
  props:["id"],
  setup(props){
     let {error,data,load}=userCollection();
     let blogs=ref([]);
     onMounted(async()=>{
        await load('blogs'); 
        blogs.value.push(...data.value);
    })
    let computedBlog=computed(()=>{
        return blogs.value.filter((b)=>{
           return b.id===props.id;
        })
    })
    return{computedBlog}
  }

}
</script>

<style scoped>
.viewtitle{
  color:#b2bec3;
}
.card{
  min-height: 300px;
  overflow-y:scroll;
  overflow-x:hidden ;
  padding:5px 20px;
}
.viewpost{
  color:#636e72;
  font-size: 15px;
  letter-spacing: 0.5;
}
</style>