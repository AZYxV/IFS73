import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAgile from 'vue-agile'

createApp(App)
  .use(VueAgile)

createApp(App).use(router).mount('#app')
