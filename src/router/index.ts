import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '/',
    redirect: '/hello-world',
  },
  {
    path: '/hello-world',
    name: 'HelloWorld',
    component: () => import('@/pages/hello-world'),
  },
  {
    path: '/getting-started',
    name: 'GettingStarted',
    component: () => import('@/pages/getting-started'),
  },
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
})

export default router
