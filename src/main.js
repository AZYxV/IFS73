import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAgile from 'vue-agile'
import VueRecaptcha from "vue3-recaptcha-v2";

createApp(App)
  .use(VueAgile)


createApp(App).use(router).use(VueRecaptcha, {siteKey: "6LdG8bYgAAAAALNe96c6g7wU-H7JhTs47OIa26sL", alterDomain: false}).mount('#app')
