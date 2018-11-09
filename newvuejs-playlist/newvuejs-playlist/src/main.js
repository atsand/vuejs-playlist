import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

export const bus = new Vue();
Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  render: h => h(App)
})