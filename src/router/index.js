import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import Cookies from 'js-cookie'; // Importa la librería de cookies
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */
function isAuthenticated() {
  return !!Cookies.get('authToken'); // Verifica si la cookie 'authToken' existe
}
export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })
  Router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // Si la ruta requiere autenticación y el usuario no tiene la cookie
      if (!isAuthenticated()) {
        next({ name: 'inicio' }); // Redirige a la página de inicio
      } else {
        next(); // Permite el acceso
      }
    } else {
      next(); // Si la ruta no requiere autenticación, permite el acceso
    }
  });
  
  return Router;
})

