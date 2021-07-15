<template>
  <div class="container createblog">
        <div >
           <form class="row d-flex align-items-cener">
                <div class="col-md-4">
                    <input type="text" class="title-input" placeholder="Enter Blog Title">
                </div>
                <div class="col-md-2 mb-3">
                    <label for="actual-btn">Upload Photo</label>
                    <input type="file"  id="actual-btn" hidden>
                </div>
                <div class="col-md-2 mt-3 mb-3">
                    <button class="btn preview">Preview Photo</button>
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
      let text=ref("akk")
      return{text}
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