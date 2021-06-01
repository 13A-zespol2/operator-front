import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import Vuelidate from "vuelidate/src";
Vue.config.productionTip = false
Vue.use(Vuelidate);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
