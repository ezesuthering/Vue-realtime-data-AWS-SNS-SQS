import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Poller from './utils/Poller';
import AWS_CREDENTIALS from './credentials';

Vue.config.productionTip = false

try {
  const SQSPoller = new Poller(AWS_CREDENTIALS);
  SQSPoller.create();
  SQSPoller.start();
} catch (e) {
  console.log(e)
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
