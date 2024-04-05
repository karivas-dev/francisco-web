import './assets/main.css'

import App from './App.vue'
import { createApp } from 'vue'
import router from '@/router'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import {createPinia} from "pinia";
// register Swiper custom elements
register();

createApp(App)
    .use(router)
    .use(createPinia())
    .provide('presentationTime', '2024-01-12T10:30:00')
    .mount('#app')

