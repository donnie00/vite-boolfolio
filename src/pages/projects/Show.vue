<script>
import {store} from '../../store';
import ProjectCard from '../../components/ProjectCard.vue';

import axios from 'axios';

export default {
	name: 'ProjectsShow',

	components: {
		ProjectCard,
	},

	data() {
		return {
			store: store,
			project: {},
		};
	},

	mounted() {
		axios
			.get(store.urlBackend + '/api/projects/' + this.$route.params.id)
			.then((resp) => {
				this.project = resp.data;
			})
			.catch((err) => {
				this.$router.push({name: 'projects.index'});
			});
	},
};
</script>

<template>
	<div class="container">
		<h1 class="text-center display-1 m-3">{{ project.name }}</h1>
		<div class="row">
			<div class="col-4 align-self-start">
				<img
					:src="
						store.imgPath() +
						(project.cover_img ?? '/placeholder-image.png')
					"
					alt="cover_img"
					class="img-fluid rounded-3" />
				<div class="my-3 text-center">
					<i class="fa-solid fa-chevron-left"></i>
					<span>Slides</span>
					<i class="fa-solid fa-chevron-right"></i>
				</div>
			</div>
			<div class="col">
				<h3>Description:</h3>
				<p>{{ project.description }}</p>
				<h3>Tags:</h3>
				<p>
					{{ project.type?.name }}
				</p>
				<h3>Technologies:</h3>
				<span
					v-for="tech in project.technologies"
					class="rounded-pill bg-info px-3 py-1 mx-1">
					{{ tech.name }}
				</span>
				<h3 class="my-3">
					<a
						:href="project.github_link"
						class="text-decoration-none link-dark my-3">
						<i class="fa-brands fa-github"></i>
						Check on git!
					</a>
				</h3>
			</div>
		</div>
		<router-link :to="'/projects'" class="btn btn-warning"
			>&leftarrow; Go to index</router-link
		>
	</div>
</template>

<style lang="scss"></style>
