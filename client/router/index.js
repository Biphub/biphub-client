import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Pipeline from '../views/Pipeline.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/pipeline',
      component: Pipeline
    }
  ]
})
