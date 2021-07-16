<template>
  <div class="container createblog">
        <div >
           <form class="row ">
                <div class="col-md-12 col-lg-12 col-xl-3">
                    <input type="text" class="title-input" placeholder="Enter Blog Title">
                </div>
               
                <div class="col-md-12 mb-3 col-lg-12 col-xl-2">
                    <label for="actual-btn">Upload Photo</label>
                    <input type="file"  id="actual-btn" hidden @change="uploadImage" >
                </div>
                 <div class="col-md-12 mb-3 col-lg-12 col-xl-12">
                      <img :src="url" alt="" v-if="url" style="width:120px;height:150px">
                     
                </div>
                <editor
                api-key="o19r3xqspo0dhqb8uz2ffu3sjflvfb9czudtseu72qdjfh1o"
                placeholder='write blog here...'/>
            </form>
        </div>
    
  
  </div>
  
</template>

<script>



import Editor from '@tinymce/tinymce-vue'
import { ref } from '@vue/reactivity'
export default {
     components: {
    'editor': Editor
  },
  setup(){
      let text=ref("akk");
      let url=ref(null);
      let buttonPlay=ref(true);
        let preview=ref(false);
      let uploadImage=(e)=>{
          const file = e.target.files[0];
          url.value=URL.createObjectURL(file);

      }
      
      return{text,uploadImage,url,buttonPlay,preview}
  }
}
</script>

<style>
.createblog{
    padding: 100px 10px;
}
.title-input{
    border:none;
    border-bottom: 2px solid #000;
    padding: 12px;
    width: 250px;
}
.title-input:focus{
    outline: none;
}
.file{
    background-color: black;
}
label{
      background-color: #3498db;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem
}
.preview{
         background-color: #3498db;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
}
</style>