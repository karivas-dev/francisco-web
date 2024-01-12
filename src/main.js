import './assets/main.css'

import App from './App.vue'
import { createApp } from 'vue'
import router from '@/router'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

createApp(App)
    .use(router)
    .provide('presentationTime', '2024-01-12T15:30:00')
    .mount('#app')

