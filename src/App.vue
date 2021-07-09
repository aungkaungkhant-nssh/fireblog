<template>
  <Navigation  v-if="nav"></Navigation>
  <router-view/>
    
  <Footer v-if="nav"></Footer>
</template>

<script>
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import {useRoute} from 'vue-router'
import { computed, onMounted, onUpdated, ref, watch } from '@vue/runtime-core'
export default {
  components: {
    Navigation,Footer },
    setup(){
      let route=useRoute();
      let nav=computed(()=>{
        if(route.path==="/login"){
          return false;
        }else{
          return true;
        }
      })     
      return{nav};  
    }
 
 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
    url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
    url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
#app{
  font-family: 'Poppins', sans-serif;
}
a{
  text-decoration: none;
}

</style>
