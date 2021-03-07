<template>
	<v-footer padless color="#fff">
		<v-tabs grow name="footer" color="#8977ad" slider-color="#8977ad">
			<v-tab name="collection" to="Collection" exact>Collection</v-tab>
			<v-tab name="gallery" to="Gallery" exact>Gallery</v-tab>
		</v-tabs>
	</v-footer>
</template>
<script>
export default {
	name: "Footer",
};
</script>

<style scoped>
.v-footer {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #fff;
}
</style>
