import Home from '@/views/Home.vue';
import Generate from '@/views/Generate.vue';
import Favorites from '@/views/Favorites.vue';
import About from '@/views/About.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home', 
        layout: 'default',
      },
    },
    {
      path: '/generate',
      name: 'generate',
      component: Generate,
      meta: { 
        title: 'Generate', 
        layout: 'default',
      },
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites,
      meta: { 
        title: 'Favorites', 
        layout: 'default',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { 
        title: 'About', 
        layout: 'default',
      },
    }
];

export default routes;