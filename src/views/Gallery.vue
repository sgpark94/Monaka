<template>
	<div>
		<v-btn block to="collectionAdd">
			<v-icon>mdi-plus</v-icon>
		</v-btn>
		<div v-for="data in collectionList" class="collectionBox">
			타이틀 : {{ data.title }}
		</div>
	</div>
</template>
<script>
export default {
	name: "Gallery",
	computed: {
		collectionList() {
			return this.$store.state.collectionList;
		},
	},
};
</script>

<style scoped></style>
