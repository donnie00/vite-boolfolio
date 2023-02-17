<script>
import axios from 'axios';
import {store} from '../../store';

import ProjectCard from '../../components/ProjectCard.vue';

export default {
	name: 'ProjectsIndex',

	components: {ProjectCard},

	data() {
		return {
			projects: [],
			order: 'oldest',
		};
	},

	methods: {
		fetchProjects() {
			axios
				.get(store.urlBackend + '/api/projects', {
					params: {
						order: this.order,
					},
				})
				.then((resp) => {
					this.projects = resp.data;
				});
		},
	},

	mounted() {
		this.fetchProjects();
	},
};
</script>

<template>
	<h1 class="m-3 text-center">Lista progetti</h1>

	<div class="container">
		<span for="">Order by: </span>
		<div class="btn-group my-3" role="group">
			<input
				type="radio"
				class="btn-check"
				name="indexOrder"
				id="oldest"
				value="oldest"
				v-model="order"
				@change="fetchProjects()" />
			<label class="btn btn-outline-primary" for="oldest"> Oldest </label>

			<input
				type="radio"
				class="btn-check"
				name="indexOrder"
				id="latest"
				value="latest"
				v-model="order"
				@change="fetchProjects()" />
			<label class="btn btn-outline-primary" for="latest"> Latest </label>
		</div>
		<div class="row">
			<div v-for="project in projects" :key="project.id" class="col-3">
				<ProjectCard :project="project"></ProjectCard>
			</div>
		</div>
	</div>
</template>
