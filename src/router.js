import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Open from './views/open'
import Opennakopit from './views/opennakopit'
import Opengood from './views/opengood'
import All from './views/all'
import Profile from './views/profile'
import Openyan from './views/openyan'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'open',
      path: '/open',
      component: Open,
    },
    {
      name: 'opennakopit',
      path: '/opennakopit',
      component: Opennakopit,
    },
    {
      name: 'opengood',
      path: '/opengood',
      component: Opengood,
    },
    {
      name: 'All',
      path: '/',
      component: All,
    },
    {
      name: 'Profile',
      path: '/profile',
      component: Profile,
    },
    {
      name: 'openyan',
      path: '/openyan',
      component: Openyan,
    },
  ],
})
