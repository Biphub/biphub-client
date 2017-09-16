import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'

sync(store, router)

/* ELEMENT-UI STARTS */
Vue.use(Element)
/* ELEMENT-UI ENDS */

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
