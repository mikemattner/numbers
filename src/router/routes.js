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
        title: 'Numbers', 
        layout: 'navigation',
      },
    },
    {
      path: '/generate',
      name: 'generate',
      component: Generate,
      meta: { 
        title: 'Generate', 
        layout: 'navigation',
      },
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites,
      meta: { 
        title: 'Favorites', 
        layout: 'navigation',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { 
        title: 'About', 
        layout: 'navigation',
      },
    }
];

export default routes;