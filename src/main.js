import './assets/main.css'
import router from './router.js'
import { createApp } from './node-modules/vue'
import { autoAnimatePlugin } from './node-modules/@formkit/auto-animate/vue'
import App from './App.vue'

const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(router)
app.mount('#app')