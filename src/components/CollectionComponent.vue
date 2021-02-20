<template>
	<div id="collectionComponent">
		<!-- 스티커 갯수 -->
		<div>
			<div class="stickerStatus mb-3">
				{{ latestCollection.stickerList.length }} / {{ latestCollection.total }}
			</div>
			<!-- Sticker -->
			<Sticker />
		</div>
	</div>
</template>
<script>
import Sticker from "@/components/Sticker";
import getters from "../store/index";

export default {
	name: "CollectionComponent",
	data() {
		return {};
	},
	components: {
		Sticker,
	},
	computed: {
		latestCollection() {
			return this.$store.getters.latest;
		},
	},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

.stickerStatus {
	padding: 15px 15px 0;
	font-size: 0.875rem;
	color: #8977ad;
	font-family: "Poppins", sans-serif;
}
</style>
