import Vue from 'vue'
import App from './App.vue'
import AppMain from './AppMain.vue'

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(AppMain)
})
