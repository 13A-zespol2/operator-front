import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import Vuelidate from "vuelidate/src";
import VueSession from 'vue-session'
Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.use(VueSession)
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
