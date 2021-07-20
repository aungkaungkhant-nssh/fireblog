<template>
 <div class="container welcomeblog" v-if="blogs">
                <div class="first" v-for="blog in blogs" :key="blog.id">
                    <div class="row g-0 d-flex " :class="{in:blog.title==='Laravel middleware'}">
                             <div class="col-md-12 col-lg-5">
                                <img :src="blog.image" alt="" style="width:100%">
                             </div> 
                            <div class=" col-md-12 intro col-lg-7">
                                    <div class="mb-3">
                                        <h1>{{blog.title}}</h1>
                                        <div v-html="blog.content"></div>
                                    </div>
                            </div> 
                    </div>
                   
                </div>
            
                
  </div>
 
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core';
import userCollection from '../composable/userCollection'
import { storage } from '../firebase/config';
export default {
setup(){
    let {error,data,load}=userCollection();
    let blogs=ref([]);
    onMounted(async()=>{
    //    await load('blogs');
    //    console.log(data.value)
    //    blogs.value.push(...data.value.slice(1,3));
    })
    return {blogs,data}
}
}
</script>

<style>
.second{
    height: 50vh;
}
.in{
flex-direction: row-reverse;
}
</style>