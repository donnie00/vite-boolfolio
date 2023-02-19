<script>
import TheNavbar from './components/TheNavbar.vue';

export default {
	components: {
		TheNavbar,
	},
};
</script>

<template>
	<TheNavbar></TheNavbar>

	<router-view></router-view>
</template>

<style lang="scss">
@use 'styles/main.scss';
</style>
