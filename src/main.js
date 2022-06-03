import Vue from 'vue'
import 'normalize.css/normalize.css'
import App from './App.vue'
import store from './store'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/permission'

Vue.config.productionTip = false

Vue.use(Antd);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
