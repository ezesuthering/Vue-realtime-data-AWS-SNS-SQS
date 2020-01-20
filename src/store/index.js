import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notifications: [],
    news: [],
    notificationActiveStatus: false
  },
  mutations: {
    setNew(state, new_) {
      state.news.push(new_)
    },
    setNotification(state, notification) {
      state.notifications.push(notification)
    },
    setNotificationActiveStatus(state, notificationActiveStatus) {
      state.notificationActiveStatus = notificationActiveStatus;
    }
  },
  getters: {
    getNotifications(state) {
      return state.notifications;
    },
    getNews(state) {
      return state.news;
    },
    getNotificationActiveStatus(state) {
      return state.notificationActiveStatus;
    }
  },
  actions: {
  },
  modules: {
  }
})
