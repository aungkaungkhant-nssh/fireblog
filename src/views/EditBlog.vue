<template>
  <div class="container createblog">
       <div v-if="storeError">{{storeError}}</div>
        <div v-if="create">
           <form class="row" @submit.prevent="editBlog">
                <div class="col-md-12 col-lg-12 col-xl-3">
                    <input type="text" class="title-input" placeholder="Enter Blog Title" v-model="title">
                </div>
               
                <div class="col-md-12 mb-3 col-lg-12 col-xl-2">
                    <label for="actual-btn">Upload Photo</label>
                    <input type="file"  id="actual-btn" hidden @change="uploadImage" >
                </div>
                 <div class="col-md-12 mb-3 col-lg-12 col-xl-12">
                      <img :src="url" alt="" v-if="url" style="width:160px;height:150px">
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
                <input type="submit" class="btn btn-primary mt-4" value="Edit Blog">
            </form>  
             <button @click="showPreviewBlog" class="btn btn-dark mt-4" :disabled="buttonPlay" >
                PreviewBlog
             </button>
        </div>
        <PreviewBlog v-if="!create" :title="title" :content="content" :url="url" @hidePreview="hidePreviewBlog"></PreviewBlog>
  </div>
</template>

<script>

import PreviewBlog from '../components/PreviewBlog'
import { computed, onMounted, ref } from '@vue/runtime-core'
import { db, storage, timestamp } from '../firebase/config'
import filedelete from '../composable/filedelete'
import Editor from '@tinymce/tinymce-vue'
import updateDoc from '../composable/updateDoc'
import {useRouter} from 'vue-router'
export default {
  components: {
    PreviewBlog, editor: Editor},
    props:["id"],
    setup(props){
        let {imageFileDelete}=filedelete();
        let router=useRouter();
        let {error,update}=updateDoc();
        let blog=ref({});
        let title=ref("");
        let content=ref("");
        let url=ref(null);
        let create=ref(true);
        let fileName=ref("");
        let imagename=ref("");
        let file=ref("");
        let downloadURL=ref("");
        let uploadImage=(e)=>{
            file.value = e.target.files[0];
            fileName.value=file.value.name;
            url.value=URL.createObjectURL(file.value);
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
        onMounted(async()=>{
            let res=await db.collection("blogs").doc(props.id).get();
            title.value=res.data().title
            content.value=res.data().content
            url.value=res.data().image
            imagename.value=res.data().imagename
        })
        let editBlog=()=>{
            let storageRef=storage.ref();
            const docRef=storageRef.child(`blogs/${fileName.value}`)
             docRef.put(file.value).on(
                 "state_changed",(snapshot)=>{
                    //  console.log(snapshot)
                 },
                 (err)=>{
                     console.log(err);
                 },async()=>{
                     downloadURL.value=await docRef.getDownloadURL();
                     let data={
                        title:title.value,
                        content:content.value,
                        image:downloadURL.value,
                        imagename:fileName.value,
                        post_at:timestamp()
                    }
                        await update("blogs",props.id,data);
                        await imageFileDelete(imagename.value);
                        router.push("/blog");
                 }
             );
        }
        return {title,content,url,uploadImage,showPreviewBlog,create,buttonPlay,hidePreviewBlog,editBlog}
    }
}
</script>

<style>

</style>