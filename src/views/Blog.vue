<template>
  <div class="container-fluid blog-card pt-5 pb-5">
    <div class="container">
        <div class="row">
          <ToggleButton></ToggleButton>
          <div class="col-xl-3 col-md-6 col-lg-4">
              <div class="card mb-3">
                <img src="../assets/media.png" alt="" style="height:200px">
                <div class="card-body">
                  <h4>HTML Media Query Feature</h4>
                  <p>Poste on:Today</p>
                  <div style="margin-top:100px">
                      <a href="#" class="go">View The Post</a>
                      <span class="material-icons arrow">
                          east
                    </span>
                  </div>
                  
                </div>
              </div>
          </div>
         <div class="col-xl-3 col-md-6 col-lg-4">
              <div class="card mb-3">
                <img src="../assets/boot.jpeg" alt="" style="height:200px">
                <div class="card-body">
                  <h4>BootStrap Usage Of Feature</h4>
                  <p>Poste on:Today</p>
                  <div style="margin-top:100px">
                      <a href="#" class="go">View The Post</a>
                      <span class="material-icons arrow">
                          east
                    </span>
                  </div>
                  
                </div>
              </div>
          </div>
          <div class="col-xl-3 col-md-6 col-lg-4">
              <div class="card mb-3">
                <img src="../assets/laravel.png" alt="" style="height:200px">
                <div class="card-body">
                  <h4>Laravel middleware Features</h4>
                  <p>Poste on:Today</p>
                  <div style="margin-top:100px">
                      <a href="#" class="go">View The Post</a>
                      <span class="material-icons arrow">
                          east
                    </span>
                  </div>
                  
                </div>
              </div>
          </div>
          <div class="col-xl-3 col-md-6 col-lg-4">
              <div class="card mb-3">
                <img src="../assets/ract.png" alt="" style="height:200px">
                <div class="card-body">
                  <h4>React state usage dicuss</h4>
                  <p>Poste on:Today</p>
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
import ToggleButton from '../components/ToggleButton'
import { ref } from '@vue/reactivity'

export default {
  components: { ToggleButton },
    name: 'Blog',
 setup(){
   let check=ref(false);
   return {check}
 }
}
</script>

<style>
.fake{
  width: 100%;
  /* background-color: red; */
}
.toggle{
  color:#8395a7;
  font-size: 25px;
  cursor: pointer;
}
</style>