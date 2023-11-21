import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import BaseComponents from './globals'

const app = createApp(App)

app.use(BaseComponents)
app.mount('#app')
