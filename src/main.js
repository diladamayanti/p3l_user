import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import router from './router'
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';

Vue.prototype.$http = Axios;
Vue.prototype.$apiUrl = 'https://kouvee.simbahlucu.com/api/';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  vuetify,
  components: {
    App
  }
}).$mount('#app')