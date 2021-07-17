<template>
  <div class="container createblog">
        <div v-if="create">
           <form class="row ">
                <div class="col-md-12 col-lg-12 col-xl-3">
                    <input type="text" class="title-input" placeholder="Enter Blog Title" v-model="title">
                </div>
               
                <div class="col-md-12 mb-3 col-lg-12 col-xl-2">
                    <label for="actual-btn">Upload Photo</label>
                    <input type="file"  id="actual-btn" hidden @change="uploadImage" >
                </div>
                 <div class="col-md-12 mb-3 col-lg-12 col-xl-12">
                      <img :src="url" alt="" v-if="url" style="width:100px;height:150px">
                </div>
               
            <editor
                    initialValue="<p>Initial editor content</p>"
                    :init="{
                    height: 300,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap',
                        'searchreplace visualblocks code fullscreen',
                        'print preview anchor insertdatetime media',
                        'paste code help wordcount table'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic | \
                        alignleft aligncenter alignright | \
                        bullist numlist outdent indent | help'
                    }"
                    v-model="content" >
                </editor>
                <input type="submit" class="btn btn-primary mt-4" value="Upload Blog">
            </form>
            <button @click="showPreviewBlog" class="btn btn-dark mt-4" :disabled="buttonPlay">
                PreviewBlog
                </button>
                
        </div>
        <PreviewBlog v-if="!create" :title="title" :content="content" :url="url" @hidePreview="hidePreviewBlog"></PreviewBlog>
  </div>
  
</template>

<script>


import PreviewBlog from '../components/PreviewBlog'
import RegisterForm from '../components/RegisterForm'
 import Editor from '@tinymce/tinymce-vue'
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
export default {
     components: {
    PreviewBlog,
    RegisterForm,
    editor: Editor
  },
  setup(){
      let title=ref("");
      let content=ref("");
      let url=ref(null);
      let create=ref(true);
      let uploadImage=(e)=>{
          const file = e.target.files[0];
          url.value=URL.createObjectURL(file);
      }
      let showPreviewBlog=()=>{
          create.value=false;
      }
      let buttonPlay=computed(()=>{
          if(url.value && content.value && title.value){
              return false
          }else{
              return true
          }
      })
      let hidePreviewBlog=()=>{
            create.value=true;
      }
      return{uploadImage,url,buttonPlay,showPreviewBlog,title,content,url,buttonPlay,create,hidePreviewBlog}
  }
}
</script>

<style>
.createblog{
    padding: 100px 10px;
    position: relative;
    z-index: 1;
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

</style>