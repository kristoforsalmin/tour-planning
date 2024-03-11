import { createApp } from 'vue'

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'

import '@/assets/main.scss'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#root')

addEventListener('beforeunload', (event) => {
  event.returnValue = 'You will lose your data after reload'
})
