<script>
import ProjectCard from '../../components/ProjectCard.vue';

import axios from 'axios';

export default {
	name: 'ProjectsShow',

	components: {
		ProjectCard,
	},

	data() {
		return {
			urlBackend: 'http://127.0.0.1:8000',
			project: {},
		};
	},

	mounted() {
		axios
			.get(this.urlBackend + '/api/projects/' + this.$route.params.id)
			.then((resp) => {
				console.log(resp);
				this.project = resp.data;
			})
			.catch((err) => {
				this.$router.push({name: 'projects.index'});
			});
	},
};
</script>

<template>
	<!-- <ProjectCard :project="project"></ProjectCard> -->

	<div class="container">
		<h1 class="text-center display-1 m-3">{{ project.name }}</h1>
		<div class="row">
			<div class="col-4">
				<img
					v-if="project.cover_img"
					:src="urlBackend + '/storage/' + project.cover_img"
					alt=""
					class="img-fluid" />
				<img
					v-else
					:src="urlBackend + '/storage/placeholder-image.png'"
					alt=""
					class="img-fluid" />
			</div>
			<div class="col">
				<h3>Description:</h3>
				<p>{{ project.description }}</p>
				<h3>Tags:</h3>
				<p>
					{{ project.type }}
				</p>
				<h3>Technologies:</h3>
				<span
					v-for="tech in project.technologies"
					class="rounded-pill bg-info px-3 py-1 mx-1">
					{{ tech.name }}
				</span>
				<h3 class="mt-3">Git:</h3>
				<a :href="project.github_link">Check on git!</a>
			</div>
		</div>
	</div>

	<router-link :to="'/projects'">Go to index</router-link>
</template>
