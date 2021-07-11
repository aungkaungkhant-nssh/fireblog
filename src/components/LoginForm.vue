<template>
     <h1 class="mb-4">Login To FireBlog</h1>
   <form  @submit.prevent="login">
        <div class="form-group mb-4">
          <input type="email" class="form-control" placeholder="Email">
        </div>
        <div class="form-group mb-4">
          <input type="password" class="form-control" placeholder="password">
        </div>
         <h5 class="mb-2">
          Don't have an account? 
          <span @click="registerShow">Register</span>
        </h5>
         <router-link to="#" id="signup" style="color:#34495e;font-size:18px;" >Forgot Password</router-link>
         <div class="mt-3">
            <input type="submit" class="btn btn-dark" value="Login">
          </div>
   </form>
     
       
  
</template>

<script>
export default {
  setup(props,context){
    let registerShow=()=>{
        context.emit("showForm");
    }
    let login=()=>{
      console.log("he")
    }
    return{registerShow,login}
  }
}
</script>

<style>

</style>