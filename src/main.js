window._ = require('lodash');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue'
import App from './App.vue'
import AppMain from './AppMain.vue'

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(AppMain)
})
