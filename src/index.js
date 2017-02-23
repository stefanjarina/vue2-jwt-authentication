import Vue from 'vue';
import App from './components/App.vue';
import Home from './components/Home.vue';
import SecretQuote from './components/SecretQuote.vue';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
import VueRouter from 'vue-router';
import auth from './auth'

import axios from 'axios';

// if you want to use the standard this.$http as you used to do with VueResource
// I don't like this approach so code uses axion directly though
// Uncomment below and then replace in code "axios" with this.$http
// Vue.prototype.$http = axios;

// Check the users auth status when the app starts
auth.checkAuth()

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/secretquote', component: SecretQuote },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '*', redirect: '/home' }
]

export const router = new VueRouter({
  routes
})

const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
