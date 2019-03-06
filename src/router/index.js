import Vue from 'vue';
import Router from 'vue-router';
import defaultRoutes from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: defaultRoutes
});

// router.afterEach(function (to, from) {
//   window.scrollTo(0, 0);
// });

export default router;