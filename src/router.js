import {createRouter, createWebHistory} from 'vue-router';

import HomePage from './pages/Home.vue';
import ContactsPage from './pages/Contacts.vue';
import ProjectsIndexPage from './pages/projects/Index.vue';
import ProjectShowPage from './pages/projects/Show.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage,
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: ContactsPage,
		},
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
