import {createApp} from 'vue'
import App from './App.vue'
import vare from '@/lib/vare'
import './registerServiceWorker'
import router from './router'

createApp(App)
  .use(router)
  .use(vare)
  .mount('#app')
