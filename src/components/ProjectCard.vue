<script>
import {store} from '../store';

export default {
	name: 'ProjectCard',

	props: {
		project: {
			type: Object,
			required: true,
			default: () => ({}),
		},
	},

	data() {
		return {
			store: store,
		};
	},

	computed: {
		description() {
			const textLength = this.project.description.length;

			if (textLength > 30) {
				return this.project.description.slice(0, 30) + '...';
			}

			return this.project.description;
		},
	},
};
</script>

<template>
	<div class="card h-100 text-center">
		<img
			:src="
				store.imgPath() + (project.cover_img ?? '/placeholder-image.png')
			"
			alt="cover_img"
			class="img-fluid card-img" />
		<div class="card-body">
			<h5 class="card-title">{{ project.name }}</h5>
			<p class="card-text">
				{{ description }}
			</p>
		</div>
		<div class="card-footer">
			<router-link :to="{name: 'projects.show', params: {id: project.id}}">
				Show more
			</router-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card-img {
	max-height: 50%;
	object-fit: cover;
}
</style>
