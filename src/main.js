import Vue from 'vue'
import App from './App'
import router from './router'
// Importing everything from firebase
import * as firebase from 'firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'
import Alert from './components/Shared/Alert.vue'

// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.filter('date', DateFilter)
Vue.component('app-alert', Alert)

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1,
    accent: colors.red.accent2,
    secondary: colors.grey.lighten1,
    info: colors.blue.lighten1,
    warning: colors.amber.darken2,
    error: colors.red.accent4,
    success: colors.green.lighten2
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyD6uZV-spl-Uvdl1sPqvc22QgPKpTk1ucE',
      authDomain: 'meetupproject-b380c.firebaseapp.com',
      databaseURL: 'https://meetupproject-b380c.firebaseio.com',
      projectId: 'meetupproject-b380c',
      storageBucket: 'meetupproject-b380c.appspot.com'
    })
  }
})
