<template>
  <div class="previewBlog">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-4 offset-md-2">
                <div class="card">
                    <span class="material-icons close" @click="hidePreviewBlog">
                        close
                    </span>
                     <img :src="url" alt=""  style="" class="p-3">
                    <div class="card-body preview-blog-content">
                      <h4 class="mb-3">{{title}}</h4>
                      <div v-html="content">
                      </div>
                    </div>
                </div>
          </div>  
        </div> 
         
  </div>
 
 
</template>

<script>

export default {
  props:["title","content","url"],
    setup(props,context){

        let hidePreviewBlog=()=>{
          context.emit("hidePreview");
        }
        return{hidePreviewBlog}
    }
}
</script>

<style scoped>


.blog{
    width: 500px;
    min-height: 400px;
    overflow-y: scroll;
    margin: 100px auto;
    background-color: #ecf0f1;
}
.close{
   position: absolute;
  top:15px;
  right: 15px;
  color:#000;
  background-color: #dcdde1;
  border-radius: 50px;
  padding: 5px 7px;
}
.preview-blog-content{
  overflow-y:scroll ;
}
</style>