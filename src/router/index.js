import {createRouter, createWebHistory} from "vue-router";
import home from "@/views/landing.vue";
import daysoftype from "@/views/daysoftype.vue";
import timi from "@/views/timienlaoscuridad.vue";
import ancestral from "@/views/ancestral.vue";

const routes = [
    { path: '/', name: 'home', component: home},
    { path: '/projects/36daysoftype', name: '36daysoftype', component: daysoftype },
    { path: '/projects/Timi-en-la-oscuridad', name: 'timienlaoscuridad', component: timi },
    { path: '/projects/Al-tazon', name: 'ancestral', component: ancestral },
    { path: '/projects/Ancestral', name: 'ancestral', component: ancestral },
    { path: '/projects/Web-gpb', name: 'ancestral', component: ancestral },
    { path: '/projects/Preparados', name: 'ancestral', component: ancestral },
    { path: '/projects/Mil-historias', name: 'ancestral', component: ancestral },
    { path: '/projects/Mestizo', name: 'ancestral', component: ancestral },
    { path: '/projects/Goeat', name: 'ancestral', component: ancestral },
    { path: '/projects/11a-Entrega', name: 'ancestral', component: ancestral },
    { path: '/projects/Tu-lado-b', name: 'ancestral', component: ancestral },
]

const router = createRouter( {
    history: createWebHistory(),
    routes: routes
});

export default router