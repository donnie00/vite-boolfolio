<script>
import axios from 'axios';
import {store} from '../store';

import ProjectCard from '../components/ProjectCard.vue';

export default {
	name: 'LatestProjects',

	components: {ProjectCard},

	data() {
		return {
			projects: [],
		};
	},

	methods: {},

	mounted() {
		axios
			.get(store.urlBackend + '/api/projects', {
				params: {
					last3: true,
				},
			})
			.then((resp) => {
				this.projects = resp.data;
			});
	},
};
</script>

<template>
	<div class="row">
		<div v-for="project in projects" class="col-4">
			<ProjectCard :project="project"></ProjectCard>
		</div>
	</div>

	<router-link
		:to="{name: 'projects.index'}"
		class="btn btn-outline-primary w-auto m-auto my-3">
		Check all projects!
	</router-link>
</template>

<style lang=""></style>
