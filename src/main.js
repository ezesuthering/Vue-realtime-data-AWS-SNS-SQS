import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { Consumer } from 'sqs-consumer'
import AWS from 'aws-sdk';
import AWS_CREDENTIALS from './credentials';

Vue.config.productionTip = false

        AWS.config.update({
            region: AWS_CREDENTIALS.REGION,
            accessKeyId: AWS_CREDENTIALS.ACCESS_KEY_ID,
            secretAccessKey: AWS_CREDENTIALS.SECRET_ACCESS_KEY
        });

        console.log('SQS Poller Ready..')

        const app = Consumer.create({
          queueUrl: AWS_CREDENTIALS.QUEUE_URL,
          handleMessage: async (message) => {
            if(message.Body) {
              if(JSON.parse(message.Body).type == 1) {
                store.commit('setNotification', JSON.parse(message.Body))
                store.commit('setNotificationActiveStatus', true)
                setTimeout(() => {
                  store.commit('setNotificationActiveStatus', false)
                }, 2000)
              }

              if(JSON.parse(message.Body).type == 2) {
                store.commit('setNew', JSON.parse(message.Body))
              }
          }
         },
          sqs: new AWS.SQS()
        });

        app.on('error', (err) => {
          console.log(err)
        });

        app.on('processing_error', (err) => {
          console.log(err)
        });

        app.on('timeout_error', (err) => {
          console.log(err)
        });

        app.start();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
