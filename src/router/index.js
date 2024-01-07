import {createRouter, createWebHistory} from "vue-router";
import home from "@/views/landing.vue";
import daysoftype from "@/views/daysoftype.vue";
import timi from "@/views/timienlaoscuridad.vue";
import ancestral from "@/views/ancestral.vue";
import preparados from "@/views/preparados.vue";

const routes = [
    { path: '/', name: 'home', component: home},
    { path: '/proyectos/36daysoftype', name: '36 Days of Type', component: daysoftype },
    { path: '/proyectos/Timi-en-la-oscuridad', name: 'Timi en la Oscuridad', component: timi },
    { path: '/proyectos/Al-tazon', name: 'Al tazón', component: ancestral },
    { path: '/proyectos/Ancestral', name: 'ancestral', component: ancestral },
    { path: '/proyectos/Web-gpb', name: 'ancestsral', component: ancestral },
    { path: '/proyectos/Preparados', name: 'Preparados', component: preparados },
    { path: '/proyectos/Mil-historias', name: 'ancesstral', component: ancestral },
    { path: '/proyectos/Mestizo', name: 'ancestwral', component: ancestral },
    { path: '/proyectos/Goeat', name: 'ancedstral', component: ancestral },
    { path: '/proyectos/11a-Entrega', name: 'anfcestral', component: ancestral },
    { path: '/proyectos/Tu-lado-b', name: 'ancesvtral', component: ancestral },
]

const router = createRouter( {
    history: createWebHistory(),
    routes: routes
});

export default router