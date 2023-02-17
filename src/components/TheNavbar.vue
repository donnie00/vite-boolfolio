<script>
export default {
	name: 'TheNavbar',

	data() {
		return {};
	},

	methods: {},
};
</script>

<template>
	<nav
		class="navbar navbar-expand-lg bg-dark navbar-dark"
		data-bs-theme="dark">
		<div class="container">
			<router-link :to="{name: 'home'}" class="navbar-brand" href="#">
				<img
					src="/logo-placeholder.png"
					alt="Bootstrap"
					class="nav-logo-img"
					height="60px" />
			</router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link
							:to="{name: 'home'}"
							class="nav-link"
							aria-current="page">
							Home
						</router-link>
					</li>
					<li class="nav-item">
						<router-link :to="{name: 'projects.index'}" class="nav-link">
							Lista progetti
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
.nav-logo-img {
	height: 60px;
}
</style>
