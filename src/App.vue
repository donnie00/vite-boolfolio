<script>
export default {
	data() {
		return {
			projects: [1, 2, 3, 4, 5],
		};
	},
};
</script>

<template>
	<h1>Projects table</h1>

	<table class="table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Description</th>
				<th>Image</th>
				<th>Type</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="project in projects">
				<td>Nome</td>
				<td>Desc</td>
				<td>img</td>
				<td>tipo</td>
			</tr>
		</tbody>
	</table>
</template>

<style lang="scss">
@use 'styles/main.scss';
</style>
