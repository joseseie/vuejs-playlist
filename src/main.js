window._ = require('lodash');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue'
import App from './App.vue'
import AppMain from './AppMain.vue'

export const bus = new Vue();

//Custom directives
Vue.directive('rainbow',{
  bind(el,binding,vnode) {
      el.style.color = "#" + Math.random().toString().slice(2,8);
  }
})

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

new Vue({
  el: '#app',
  render: h => h(AppMain)
})
