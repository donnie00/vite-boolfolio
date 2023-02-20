<script>
import axios from 'axios';
import {capitalize} from 'vue';
import {store} from '../store';

export default {
	name: 'Contacts',

	data() {
		return {
			loading: false,
			submitResult: '',
			errors: [],
			formInput: {
				name: '',
				email: '',
				object: '',
				message: '',
			},
		};
	},

	methods: {
		onSubmit() {
			this.loading = true;

			const formData = new FormData();
			formData.append('name', this.formInput.name);
			formData.append('email', this.formInput.email);
			formData.append('object', this.formInput.object);
			formData.append('message', this.formInput.message);

			axios
				.post(store.urlBackend + '/api/contacts', formData)
				.then((resp) => {
					this.submitResult = 'success';
					this.loading = false;
				})
				.catch((error) => {
					if (error.response && error.response.data) {
						this.submitResult = error.response.data.message;
						var errorsArray = error.response.data.errors;
						this.errors = errorsArray;
						console.log(this.errors);
					} else {
						this.submitResult = error.message;
					}
				});
		},
	},
};
</script>

<template>
	<div class="container">
		<div
			v-if="this.submitResult === 'success'"
			class="alert alert-success m-3">
			L'invio è andato a buon fine! Grazie per avermi contattato.
		</div>
		<div v-else-if="this.submitResult" class="alert alert-danger m-3">
			<p>There was a problem with your request:</p>
			<p v-if="!errors">
				{{ this.submitResult }}
			</p>
			<ul v-else v-for="(error, i) in this.errors">
				<li>{{ `${i}: ${error}` }}</li>
			</ul>
		</div>

		<div class="d-flex justify-content-between align-items-center">
			<h1 class="my-3">Contact me:</h1>
			<div class="contacts-links">
				<a
					href="mailto:mail.prove@gmail.com?subject=Contatto da portfolio"
					class="link-dark">
					<i class="fa-solid fa-envelope-open fs-2 mx-3"></i>
				</a>
				<a
					href="https://it.linkedin.com/"
					class="link-dark"
					target="_blank">
					<i class="fa-brands fa-linkedin fs-2 mx-3"></i>
				</a>
			</div>
		</div>

		<form v-if="submitResult !== 'success'" @submit.prevent="onSubmit">
			<div class="row">
				<div class="col-6">
					<div class="form-floating mb-3">
						<input
							type="text"
							class="form-control"
							v-model="formInput.name"
							placeholder="Enter your fulll name" />
						<label for="floatingInput">Name</label>
					</div>
					<div class="form-floating mb-3">
						<input
							type="email"
							class="form-control"
							v-model="formInput.email"
							placeholder="name@example.com" />
						<label for="floatingPassword">Email address</label>
					</div>
					<div class="form-floating mb-3">
						<input
							type="text"
							class="form-control"
							v-model="formInput.object"
							id="floatingInput"
							placeholder="name@example.com" />
						<label for="floatingInput">Object</label>
					</div>
				</div>
				<div class="col-6">
					<!-- <div class="form-floating">
					<textarea
						style="height: auto"
						class="form-control text-area"
						placeholder="Leave a comment here"
						id="floatingTextarea"></textarea>
					<label for="floatingTextarea">Comments</label>
				</div> -->
					<div class="mb-3">
						<textarea
							class="form-control"
							v-model="formInput.message"
							rows="8"
							placeholder="Message"></textarea>
					</div>
				</div>
			</div>
			<button type="submit" class="btn btn-success">Send</button>
		</form>
	</div>
</template>

<style lang="scss"></style>
