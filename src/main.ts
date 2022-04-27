import { createApp }  from 'vue'
import Vue from 'vue';
//import './config/veeValidate/index'; // VeeValidate
import dayjs from './config/dayjs/index'; // DayJS
import { store } from './store/index'; // Store
import router from './router/index'; // Router
import App from './App.vue'

// --- Prototype
// Vue.prototype.$dayjs = dayjs;

createApp(App).use(store).use(router).mount('#app');

