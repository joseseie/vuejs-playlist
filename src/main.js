window._ = require('lodash');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue'
import App from './App.vue'
import AppMain from './AppMain.vue'

export const bus = new Vue();

//Custom directives

Vue.directive('theme',{
  bind(el,binding,vnode) {
    if (binding.value == 'wide')
    {
      el.style.width = "1200px";
    }
    else if (binding.value == 'narrow')
    {
        el.style.width = "560px";
    }
  }
})

//Filters
// Vue.filter('to-uppercase',function (value) {
//     return value.toUpperCase();
// })

Vue.filter('snipped',function (value) {
    return value.slice(0,100) + ' . . .'
})

new Vue({
  el: '#app',
  render: h => h(AppMain)
})
