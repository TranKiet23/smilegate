import './assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import _ from 'lodash'
import qs from 'qs'

window._ = _;
window.qs = qs;
createApp(App).mount('#app')
