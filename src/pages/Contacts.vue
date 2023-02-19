<script>
export default {
	name: 'Contacts',

	data() {
		return {};
	},

	methods: {},
};
</script>

<template>
	<div class="container">
		<h1>Contact me:</h1>

		<form>
			<div class="row">
				<div class="col-6">
					<div class="form-floating mb-3">
						<input
							type="text"
							class="form-control"
							placeholder="Enter your fulll name" />
						<label for="floatingInput">Name</label>
					</div>
					<div class="form-floating mb-3">
						<input
							type="email"
							class="form-control"
							placeholder="name@example.com" />
						<label for="floatingPassword">Email address</label>
					</div>
					<div class="form-floating mb-3">
						<input
							type="email"
							class="form-control"
							id="floatingInput"
							placeholder="name@example.com" />
						<label for="floatingInput">Subject</label>
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
							id="exampleFormControlTextarea1"
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
