import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '/@/views/temp-home.vue';
import About from '/@/views/temp-about.vue';


const routes = [
  //错误路由重定向
  { path: '/:path(.*)', redirect: '/' },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/1-1',
      name: 'abc',
      component: About,
    }],
  },
];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router;
