import {createRouter, createWebHistory} from "vue-router";
import home from "@/views/landing.vue";
import daysoftype from "@/views/daysoftype.vue";
import timi from "@/views/timienlaoscuridad.vue";
import ancestral from "@/views/ancestral.vue";
import preparados from "@/views/preparados.vue";
import altazon from "@/views/altazon.vue";
import mestizo from "@/views/mestizo.vue";
import goeat from "@/views/goeat.vue";
import webgpb from "@/views/webgpb.vue";
import tuladob from "@/views/tuladob.vue";
import entrega from "@/views/entrega.vue";
import milhistorias from "@/views/milhistorias.vue";

const routes = [
    { path: '/', name: 'home', component: home},
    { path: '/proyectos/36daysoftype', name: '36 Days of Type', component: daysoftype },
    { path: '/proyectos/Timi-en-la-oscuridad', name: 'Timi en la Oscuridad', component: timi },
    { path: '/proyectos/Al-tazon', name: 'Al tazón', component: altazon },
    { path: '/proyectos/Ancestral', name: 'Ancestral', component: ancestral },
    { path: '/proyectos/Web-gpb', name: 'Web Grupo Plan B', component: webgpb },
    { path: '/proyectos/Preparados', name: 'Preparados', component: preparados },
    { path: '/proyectos/Mil-historias', name: '1 Escuela mil historias', component: milhistorias },
    { path: '/proyectos/Mestizo', name: 'Mestizo', component: mestizo },
    { path: '/proyectos/Goeat', name: 'Go eat', component: goeat },
    { path: '/proyectos/11a-Entrega', name: '11va Entrega', component: entrega },
    { path: '/proyectos/Tu-lado-b', name: 'Tu lado B', component: tuladob },
]

const router = createRouter( {
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from,savedPosition) {
        return savedPosition ?? { top: 0 };
    }
});

export default router