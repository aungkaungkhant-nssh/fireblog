import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Register from '../views/Register.vue'
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
    path:"/register",
    name:'Register',
    component:Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
