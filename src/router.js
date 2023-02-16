import {createRouter, createWebHistory} from 'vue-router';

import ProjectsIndexPage from './pages/projects/Index.vue';
import ProjectShowPage from './pages/projects/Show.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/projects',
			name: 'projects.index',
			component: ProjectsIndexPage,
		},
		{
			path: '/project/:id',
			name: 'projects.show',
			component: ProjectShowPage,
		},
	],
});

export {router};
