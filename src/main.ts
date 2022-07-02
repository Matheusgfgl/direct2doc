import { createApp }  from 'vue'
import '@/config/veeValidate/index'; // VeeValidate
import dayjs from './config/dayjs/index'; // DayJS
import { store } from './store/index'; // Store
import router from './router/index'; // Router
import App from './App.vue'

// Vee Validade
import { Field, Form } from 'vee-validate';

const app = createApp(App).use(store).use(router);
app.component("SvgElement", () => import('@/components/common/svg/SvgElement.vue'));
app.component('Field', Field);
app.component('Form', Form);

app.mount("#app");

