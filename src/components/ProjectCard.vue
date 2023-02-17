<script>
export default {
	props: {
		project: {
			type: Object,
			required: true,
			default: () => ({}),
		},
	},

	data() {
		return {
			urlBackend: 'http://127.0.0.1:8000',
		};
	},
};
</script>

<template>
	<div class="card text-center h-100">
		<img
			v-if="project?.cover_img"
			:src="urlBackend + '/storage/' + project.cover_img"
			class="card-img-top"
			alt="..." />
		<img
			v-else
			:src="urlBackend + '/storage/placeholder-image.png'"
			alt=""
			class="img-fluid" />
		<div class="card-body">
			<h5 class="card-title">{{ project.name }}</h5>
			<p class="card-text">
				{{ project.description }}
			</p>
		</div>
		<div class="card-footer">
			<router-link :to="{name: 'projects.show', params: {id: project.id}}">
				Show more
			</router-link>
		</div>
	</div>
</template>
