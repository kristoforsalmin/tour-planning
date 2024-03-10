import { createApp } from 'vue'

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'

import '@/assets/main.css'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#root')

if (process.env.NODE_ENV === 'production') {
  addEventListener('beforeunload', (event) => {
    event.returnValue = ''
  })
}
