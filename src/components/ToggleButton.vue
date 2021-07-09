<template>
   <div class="d-flex">
              <div class="fake"></div>
              <div class="form-check form-switch toggle mb-3">
                  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="check">
                <label class="form-check-label" for="flexSwitchCheckDefault">Toggle</label>
              </div>
             
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { onUpdated } from '@vue/runtime-core';
export default {
    setup(props,context){
        let check=ref(false);
        onUpdated(()=>{
             context.emit("toggle",check.value)
        })
       
        return {check}
    }
}
</script>

<style>

</style>