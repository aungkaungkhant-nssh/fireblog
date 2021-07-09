<template>
   <h1 class="mb-4">Register To FireBlog</h1>
   <form action="">
     <div class="form-group mb-4">
        <input type="text" class="form-control" placeholder="First Name">
      </div>
      <div class="form-group mb-4">
        <input type="text" class="form-control" placeholder="Last Name">
      </div>
      <div class="form-group mb-4">
        <input type="text" class="form-control" placeholder="UserName">
      </div>
      <div class="form-group mb-4">
        <input type="email" class="form-control" placeholder="Email">
      </div>
       <div class="form-group mb-4">
        <input type="password" class="form-control" placeholder="password">
      </div>
    </form>
    <h5 class="mb-2">
          You have an account? Please
        <span @click="loginShow">Login</span>
    </h5>
    <div class="mt-3">
        <input type="submit" class="btn btn-dark" value="Login">
    </div>
     
</template>

<script>
export default {
  setup(props,context){
    let loginShow=()=>{
      context.emit("showForm");
    }
    return{loginShow}
  }
}
</script>

<style>

</style>