import type { RouteRecordNormalized, RouterScrollBehavior} from 'vue-router';
import {createRouter, createWebHashHistory} from 'vue-router';

const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };


export const constantRoutes = [
  // {
  //   path: '/',
  //   component: () => import('@/layout/index'),
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () => import('@/views/dashboard/index'),
  //       name: 'Dashboard',
  //       meta: { title: 'Dashboard', icon: 'dashboard', affix: true },
  //     },
  //   ],
  // },
  {path:'/',component:Home},
  {path:'/about',component:About},
];





const createCustomRouter = () => createRouter({
  // mode: 'history', // require service support
  history: createWebHashHistory(),
  scrollBehavior: ( () => ({ y: 0 })) as RouterScrollBehavior ,
  routes: constantRoutes,
});

const router = createCustomRouter();
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// export function resetRouter() {
//   const newRouter = createCustomRouter();
//   router.matcher = newRouter.matcher; // reset router
// }

export default router;
