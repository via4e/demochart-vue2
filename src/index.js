import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

// Styles
import 'vuetify/dist/vuetify.min.css'
import './assets/scss/style.scss'

Vue.use(Vuetify)

const vuetify = new Vuetify({})
/* eslint-disable-next-line no-new */
new Vue({
  vuetify,
  el: '#app',
  render: h => h(App)
})
