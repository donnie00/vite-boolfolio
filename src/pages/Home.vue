<script>
import LatestProjects from './LatestProjects.vue';

export default {
	name: 'Home',
	components: {LatestProjects},

	data() {
		return {};
	},

	methods: {},
};
</script>
<template>
	<div class="welcome-banner">
		<div class="container">
			<h1 class="display-1 fw-bold">Welcome to my Boolfolio</h1>
			<p class="fs-5">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
				vitae sagittis mi. Integer volutpat ultricies pretium. Duis libero
				diam, finibus ut tincidunt ut, eleifend sed turpis. Phasellus
				suscipit felis enim, a aliquam lectus interdum a. Praesent nec justo
				quis erat aliquet maximus. Etiam quis lacinia quam, ut dictum magna.
				Donec eleifend urna a porta laoreet. Suspendisse eu nunc
				ullamcorper, bibendum dolor in, mollis diam.
			</p>
		</div>
	</div>

	<!-- sezione ultimi progetti -->
	<div class="container">
		<h2>Latest projects</h2>
		<div class="row">
			<LatestProjects></LatestProjects>
		</div>
	</div>
</template>

<style lang="scss"></style>
