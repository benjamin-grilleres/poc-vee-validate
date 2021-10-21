import { createApp } from 'vue'
import App from './App.vue'
import routes from 'virtual:generated-pages'
import { createRouter, createWebHistory } from 'vue-router'
import { configure } from 'vee-validate';
import { localize, setLocale } from '@vee-validate/i18n';
import './assets/css/index.css'
import fr from '@vee-validate/i18n/dist/locale/fr.json';

configure({
  generateMessage: localize({
    fr: {
      ...fr,
      names: {
        city: 'Ville'
      }
    }
  }),
});

setLocale('fr')

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.config.devtools = true
app.use(router)
app.mount('#app')
