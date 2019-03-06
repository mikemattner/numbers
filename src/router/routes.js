import Home from '@/views/Home.vue';
import Generate from '@/views/Generate.vue';
import About from '@/views/About.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/generate',
      name: 'generate',
      component: Generate
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
];

export default routes;