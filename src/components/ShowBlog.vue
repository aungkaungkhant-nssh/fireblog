<template>
 <div class="container-fluid showblog" v-if="blogs">
                <div class="noe row" v-for="blog in blogs" :key="blog.id">
                            <div class="col-md-12 col-lg-5">
                                <img :src="blog.image" alt="" style="width:100%;height:100%">
                             </div> 
                            <div class=" col-md-12 intro col-lg-7">
                                    <div class="mb-3">
                                        <h1>{{blog.title}}</h1>
                                        <div v-html="blog.content"></div>
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
       await load('blogs');
       blogs.value.push(...data.value.slice(1,3));
    })
    return {blogs,data}
}
}
</script>

<style>
.second{
    height: 50vh;
}
.noe{
     display: flex  !important;
    flex-direction: row important;
    margin-top: 10px;
}
.noe:first-child{
    display: flex  !important;
    flex-direction: row-reverse !important;
}

</style>