<template>
  <div class="model-container">
      <div class="model d-flex">
          {{modelContent}}
          <span class="material-icons" @click="hideModel">
                close
          </span>
      </div>
  </div>
</template>

<script>
export default {
    props:["modelContent"],
    setup(props,context){
        let hideModel=()=>{
            context.emit("hideModel");
        }
        return{hideModel}
    }
}
</script>

<style>
.model-container{
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    opacity: 0.9;
}
.model-container span{
    cursor: pointer;
}
.model{
    background-color: #000;
    width: 400px;
    margin: 250px auto;
    color:#fff;
    padding: 40px;
    position: relative;
    z-index: 1000;
    border-radius: 30px;
}
</style>