import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/users.vue'
Vue.use(VueRouter)

const routes = [
  // 路由重定向，访问斜线时就到login组件
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/home',
    component:Home,
    redirect:'/welcome',
    children:[
      {path:'/welcome',component:Welcome,},
      {path:'/users',component:Users}
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})
// 挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  // to将要访问的路径
  // from代表从哪个路径来
  // next()放行 next(路径)强制跳转

  if(to.path === '/login') return next()
  const tokenStr = sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()

})

export default router
