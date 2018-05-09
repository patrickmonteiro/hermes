import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: routes,
  mode: "history"
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
