import { createRouter, createWebHistory } from 'vue-router'
import {useUserStore} from '../stores/user'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import("../views/home.vue"),
      redirect: '/culture',
      children: [
        {
          path: '/chat',
          name: 'chat',
          component: import("../views/chat.vue"),
        },
        {
          path: '/chockIn',
          name: 'chockIn',
          component: import("../views/chockIn.vue"),
        },
        {
          path: '/culture',
          name: 'culture',
          component: import("../views/culture.vue"),
        },
        {
          path: '/mangement',
          name: 'mangement',
          component: import("../views/mangement.vue"),
        },
        {
          path: '/message',
          name: 'message',
          component: import("../views/message.vue"),
        },
        {
          path: '/resource',
          name: 'resource',
          component: import("../views/resource.vue"),
        },
        {
          path: '/recode',
          name: 'recode',
          component: import("../views/recorde.vue"),
        },
        {
          path: '/resource',
          name: 'resource',
          component: import("../views/resource.vue"),
        },
        {
          path: '/tools',
          name: 'tools',
          component: import("../views/tools.vue"),
        },
        {
          path: '/person',
          name: 'person',
          component: import("../views/person.vue"),
        },
        {
          path: '/update',
          name: 'update',
          component: import("../views/updatepassword.vue"),
        },
        {
          path: '/learn',
          name: 'learn',
          component: import("../views/learn.vue"),
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: import("../views/login.vue")
    }


  ]
})
router.beforeEach((to, from, next) => {
  // 获取缓存的数据
  const store = useUserStore()
  const user = store.user
  const haveUser = user && user.id
  const noPermissionPahths = ['/login']
  if (!haveUser && !noPermissionPahths.includes(to.path)) {//用户没有登录
    next('/login')
  } else {
    next()
  }
})
export default router
