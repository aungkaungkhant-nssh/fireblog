<template>
  <div class="container-fluid blog-card pt-5 pb-5">
    <div class="container">
        <div class="row">
          <ToggleButton @toggle="toggle"></ToggleButton>
          <div class="col-xl-3 col-md-6 col-lg-4">
              <div class="card mb-3 blog-card">
               <transition name="fade">
                 <div v-if="showIcon" >
                    <span class="material-icons trash">
                    delete
                    </span>
                  <span class="material-icons edit">
                    edit
                  </span>
                </div>
               </transition>
                
                
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
              <div class="card mb-3 blog-card">
                <transition name="fade">
                      <div v-if="showIcon" >
                          <span class="material-icons trash">
                            delete
                          </span>
                          <span class="material-icons edit">
                            edit
                          </span>
                    </div>
                </transition>
              
               
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
              <div class="card mb-3 blog-card">
                  <transition name="fade">
                       <div v-if="showIcon">
                          <span class="material-icons trash">
                            delete
                          </span>
                          <span class="material-icons edit">
                            edit
                          </span>
                      </div>
                  </transition>
                 
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
              <div class="card mb-3 blog-card">
                  <transition name="fade">
                         <div v-if="showIcon">
                            <span class="material-icons trash">
                              delete
                            </span>
                            <span class="material-icons edit">
                              edit
                            </span>
                         </div>
                  </transition>
                 
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
   let showIcon=ref(null);
   let toggle=(check)=>{
     showIcon.value=check;
   }
   return{toggle,showIcon}
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