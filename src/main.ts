import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { loadFonts } from './plugins/webfontloader'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(Quasar)
  .mount('#app')

