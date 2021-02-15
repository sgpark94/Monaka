<template>
	<div class="mb-10">
		<div class="ma-5">
			<v-btn block outlined to="collectionAdd" color="#8977ad">
				<v-icon>mdi-plus</v-icon>
			</v-btn>
		</div>
		<v-card
			v-for="(data, i) in collectionList"
			:key="i"
			class="collectionBox ma-5 pa-2"
			color="rgba(137, 119, 173, 0.3)"
		>
			<v-card-subtitle class="pt-3 pb-1">{{ data.title }}</v-card-subtitle>
			<v-card-title class="pt-0">{{ data.wish }}</v-card-title>
			<v-card-text>
				<v-row class="stickerCount mx-0 pb-2">
					{{ data.stickerList.length }} / {{ data.total }}
				</v-row>
			</v-card-text>
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
@font-face {
	font-family: "SeoulNamsanM";
	src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SeoulNamsanM.woff")
		format("woff");
	font-weight: normal;
	font-style: normal;
}

.v-card__title,
.v-card__subtitle {
	line-height: 1.3;
	font-family: "SeoulNamsanM", sans-serif;
}
.stickerCount {
	position: absolute;
	right: 20px;
	bottom: 20px;
	color: #8977ad;
}
</style>
