import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import LoginAndRegister from '../views/LoginAndRegister.vue'

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
    component:LoginAndRegister
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
