<template>
	<div>
		<div class="ma-5">
			<v-btn block to="collectionAdd">
				<v-icon>mdi-plus</v-icon>
			</v-btn>
		</div>
		<v-card v-for="data in collectionList" class="collectionBox ma-5">
			<v-card-text>
				<v-row class="stickerCount mx-0 mt-0">{{ data.stickerList.length }} / {{ data.total }}</v-row>
			</v-card-text>
			<v-card-title>{{ data.title }}</v-card-title>
		</v-card>
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

<style scoped>
.stickerCount{
	color: #8977ad;
}
</style>
