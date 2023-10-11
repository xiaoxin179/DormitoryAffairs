import { createRouter, createWebHistory } from 'vue-router'

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
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: import("../views/login.vue")
    }


  ]
})
export default router
