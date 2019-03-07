import Home from '@/views/Home.vue';
import Generate from '@/views/Generate.vue';
import About from '@/views/About.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { 
        layout: 'default',
      },
    },
    {
      path: '/generate',
      name: 'generate',
      component: Generate,
      meta: { 
        layout: 'default',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { 
        layout: 'default',
      },
    }
];

export default routes;