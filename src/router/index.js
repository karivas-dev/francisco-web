import {createRouter, createWebHistory} from "vue-router";
import home from "@/views/home.vue";
import daysoftype from "@/views/daysoftype.vue";

const routes = [
    { path: '/', name: 'home', component: home},
    { path: '/projects/36daysoftype', name: '36daysoftype', component: daysoftype}
]
const router = createRouter( {
    history: createWebHistory(),
    routes: routes
});

export default router