import { createWebHistory, createRouter } from "vue-router";
import { createApp } from 'vue'
import App from './App.vue'

import FormPage from './pages/FormPage.vue'
import WeatherPage from './pages/WeatherPage.vue'

const routes = [
    { path: '/', component: FormPage },
    { path: '/weather', component: WeatherPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
