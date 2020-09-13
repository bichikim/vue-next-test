import {createApp, Component} from 'vue'
import App from './App.vue'
import {createVare} from '@/lib/vare'
import './registerServiceWorker'
import router from './router'

const vare = createVare()

// vue file has type error for now
createApp(App as any)
  .use(router)
  .use(vare)
  .mount('#app')
