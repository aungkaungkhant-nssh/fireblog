<template>
  <div class="home">
      <WelcomeBlog v-if="!user"></WelcomeBlog> 
      <ShowBlog></ShowBlog>  
      <BlogCard></BlogCard> 
  </div>
</template>

<script>


import ShowBlog from '../components/ShowBlog'
import BlogCard from '../components/BlogCard'
import WelcomeBlog from '../components/WelcomeBlog'
// @ is an alias to /src
import getUser from '../composable/getUser'

export default {
  components: {
    ShowBlog,
    BlogCard, WelcomeBlog },
  
  name: 'Home',
  setup(){
    let {user}=getUser();
    return {user};
  }
  
}
</script>
<style scoped>
/* .home{
  height: 80vh;
} */
</style>
