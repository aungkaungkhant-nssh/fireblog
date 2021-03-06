import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import LoginAndRegister from '../views/LoginAndRegister.vue'
import Profile from '../views/Profile.vue'
import ResetPassword from '../views/ResetPassword'
import CreateBlog from '../views/CreateBlog'
import ViewPost from '../views/ViewPost'
import EditBlog from '../views/EditBlog'
import {auth} from '../firebase/config'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/blog',
    name:'Blog',
    component:Blog
  },
  {
    path:"/loginAndregister",
    name:'LoginAndRegister',
    component:LoginAndRegister,
    beforeEnter(to,from,next){
      let user=auth.currentUser;
      if(user){
        next("/")
      }else{
        next()
      }
    }
  },
  {
    path:"/profile",
    name:'Profile',
    component:Profile,
    beforeEnter(to,from,next){
      let user=auth.currentUser;
      if(user){
        next()
      }else{
        next({name:"Blog"});
      }
    }
  },
  {
    path:'/resetpassword',
    name:"ResetPassword",
    component:ResetPassword
  },
  {
    path:'/createblog',
    name:"CreateBlog",
    component:CreateBlog
  },
  {
    path:'/viewpost/:id',
    name:"ViewPost",
    component:ViewPost,
    props:true
  },
  {
    path:'/editBlog/:id',
    name:"EditBlog",
    component:EditBlog,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
