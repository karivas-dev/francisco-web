import {createRouter, createWebHistory} from "vue-router";
import home from "@/views/landing.vue";
import daysoftype from "@/views/daysoftype.vue";
import timi from "@/views/timienlaoscuridad.vue";
import ancestral from "@/views/ancestral.vue";
import preparados from "@/views/preparados.vue";
import altazon from "@/views/altazon.vue";
import mestizo from "@/views/mestizo.vue";
import goeat from "@/views/goeat.vue";

const routes = [
    { path: '/', name: 'home', component: home},
    { path: '/proyectos/36daysoftype', name: '36 Days of Type', component: daysoftype },
    { path: '/proyectos/Timi-en-la-oscuridad', name: 'Timi en la Oscuridad', component: timi },
    { path: '/proyectos/Al-tazon', name: 'Al tazón', component: altazon },
    { path: '/proyectos/Ancestral', name: 'ancestral', component: ancestral },
    { path: '/proyectos/Web-gpb', name: 'ancestsral', component: ancestral },
    { path: '/proyectos/Preparados', name: 'Preparados', component: preparados },
    { path: '/proyectos/Mil-historias', name: 'ancesstral', component: ancestral },
    { path: '/proyectos/Mestizo', name: 'Mestizo', component: mestizo },
    { path: '/proyectos/Goeat', name: 'Go eat', component: goeat },
    { path: '/proyectos/11a-Entrega', name: 'anfcestral', component: ancestral },
    { path: '/proyectos/Tu-lado-b', name: 'ancesvtral', component: ancestral },
]

const router = createRouter( {
    history: createWebHistory(),
    routes: routes
});

export default router