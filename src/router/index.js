import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/layoutIndex.vue';


export const routes = [
  {
      path: '/user',
      name: 'user',
      component: () => import('@/layout/layoutIndex.vue'),
      meat: { title: '查询用户' }
  },
  {
    path: '/',
    redirect: '/index',
  },
  // {
  //   path: '/user',
  //   name: 'user',
  //   redirect: '/user/userQuery',
  //   children: {
  //     path: 'userQuery',
  //     name: 'userQuery',
  //     component: () => import('/views/user/userIndex.vue'),
  //     meat: { title: '查询用户' }

  //   },
  // },
  {
    path: '/',
    name: 'index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'home',
        component: () => import('@/views/home/homeIndex.vue'),
        meat: { title: '首页' }
      },
      {
        path: 'userQuery',
        name: 'userQuery',
        component: () => import('@/views/user/userIndex.vue'),
        meat: { title: '查询用户' }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router