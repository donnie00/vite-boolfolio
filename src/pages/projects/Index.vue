<script>
import axios from 'axios';

import ProjectCard from '../../components/ProjectCard.vue';

export default {
	name: 'ProjectsIndex',

	components: {ProjectCard},

	data() {
		return {
			urlBackend: 'http://127.0.0.1:8000',
			projects: [],
		};
	},

	methods: {
		fetchProjects() {
			axios.get(this.urlBackend + '/api/projects').then((resp) => {
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
	<!-- <h1 class="m-3 text-center">Projects table</h1>

	<div class="container">
		<table class="table align-middle">
			<thead>
				<tr>
					<th>Name</th>
					<th>Cover</th>
					<th>Type</th>
				</tr>
			</thead>
			<tbody class="table-group-divider">
				<tr v-for="project in projects" :key="project.id">
					<td>{{ project.name }}</td>
					<td>
						<div v-if="project.cover_img">
							<img
								:src="urlBackend + '/storage/' + project.cover_img"
								alt=""
								class="img-fluid" />
						</div>
						<div v-else>
							<img
								:src="urlBackend + '/storage/placeholder-image.png'"
								alt=""
								class="img-fluid" />
						</div>
					</td>
					<td class="">{{ project.type.name }}</td>
				</tr>
			</tbody>
		</table>
	</div> -->

	<h1 class="m-3 text-center">Lista progetti</h1>

	<div class="container">
		<div class="row">
			<div v-for="project in projects" :key="project.id" class="col-3">
				<ProjectCard :project="project"></ProjectCard>
			</div>
		</div>
	</div>
</template>
