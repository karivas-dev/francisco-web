import {defineStore} from "pinia";
import {ref} from "vue";

export const useProjectsStore = defineStore('projects', () => {
    const projects = {
        projects: 'projects',
        reel: 'reel',
        portafolio: 'portafolio',
    };
    const currentProject = ref(projects.projects);

    return { projects, currentProject };
});