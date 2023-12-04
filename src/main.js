import './style/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import { VueGeolocation } from 'vue-browser-geolocation'

import App from './App.vue'
import router from './router'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueGeolocation)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
