import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

// Initialiser le thème sombre par défaut
const themeStore = pinia.state.value.theme
if (!themeStore) {
  localStorage.setItem('theme', 'dark')
  document.documentElement.classList.add('dark')
}

app.mount('#app')
