import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import VueSession from 'vue-session'

Vue.config.productionTip = false
Vue.use(require('vue-moment'));
Vue.use(VueSession)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
