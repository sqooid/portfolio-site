import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Front from '@/pages/About.vue';
import Museum from '@/pages/Museum.vue';
import Projects from '@/pages/Projects.vue';
import Cube from '@/pages/projects/Cube.vue';
import Boored from '@/pages/projects/Boored.vue';
import Contact from '@/pages/Contact.vue'
import NotFound from '@/pages/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'About',
		component: Front
	},
	{
		path: '/museum',
		name: 'Museum',
		component: Museum
	},
	{
		path: '/projects',
		name: 'Projects',
		component: Projects
	},
	{
		path: '/projects/cube',
		name: 'Cube',
		component: Cube
	},
	{
		path: '/projects/boored',
		name: 'Boored',
		component: Boored
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact
	},
	{
		path: '/:catchAll(.*)',
		component: NotFound
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router