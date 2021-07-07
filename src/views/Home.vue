<template>
  <div class="home">
      <WelcomeBlog></WelcomeBlog> 
      <ShowBlog></ShowBlog>  
      <BlogCard></BlogCard> 
  </div>
</template>

<script>


import ShowBlog from '../components/ShowBlog'
import BlogCard from '../components/BlogCard'
import WelcomeBlog from '../components/WelcomeBlog'
// @ is an alias to /src


export default {
  components: {
    ShowBlog,
    BlogCard, WelcomeBlog },
  
  name: 'Home',
  
}
</script>
<style scoped>
/* .home{
  height: 80vh;
} */
</style>
