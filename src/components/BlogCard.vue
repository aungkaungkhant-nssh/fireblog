<template>
  <div class="container-fluid blog-card" v-if="blogs.length>0">
    <div class="container">
        <h3 class="pt-5 pb-4">View More Recent Blogs</h3>
          <div class="row">
                <div class="col-xl-3 col-md-6 col-lg-4" v-for="blog in blogs" :key="blog.id">
              <div class="card mb-3">
                <img :src="blog.image" alt="" style="height:200px">
                <div class="card-body">
                  <h4>{{blog.title}}</h4>
                  <p>Post on : {{blog.post_at.toDate().toDateString()}}</p>
                  <div style="margin-top:100px">
                      <a href="#" class="go">View The Post</a>
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
import { onMounted, ref } from '@vue/runtime-core';
import userCollection from '../composable/userCollection'
export default {
setup(){
    let {error,data,load}=userCollection();
    let blogs=ref([]);
    onMounted(async()=>{
       await load('blogs');
      
       blogs.value.push(...data.value.slice(3,5));
    })
    return {blogs,data}
}
}
</script>

<style>
.card{
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s;
  height: 470px;
}
.blog-card .card:hover{
 transform: skewY(-1deg);
}
.blog-card{
  background-color: #ecf0f1;
}
.blog-card .go{
  color:#636e72;
  font-size: 25px;
}
.blog-card h3{
  color:#7f8c8d;
  font-weight: 100;
  letter-spacing: 2px;
  font-size: 30px;
}
.card-body h4{
  color:#7f8fa6;
}
</style>




 <!-- <div class="col-xl-3 col-md-6 col-lg-4">
                <div class="card mb-3">
                  <img src="../assets/boot.jpeg" alt="" style="height:200px">
                  <div class="card-body">
                    <h4>BootStrap Usage Of Feature</h4>
                    <p>Poste on:Today</p>
                    <div>
                        <a href="#" class="go">View The Post</a>
                        <span class="material-icons arrow">
                            east
                      </span>
                    </div>
                    
                  </div>
                </div>
            </div> -->