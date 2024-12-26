import { createApp } from 'vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import App from './App.vue'
import router from './router'
import "./assets/tailwind.css";
import "preline/preline";
createApp(App).use(router).use(pinia).mount('#app')
