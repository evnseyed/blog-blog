import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { makeStore } from './store'
import { prepareServices } from './ui/plugins'

const store = makeStore()

prepareServices(store)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
