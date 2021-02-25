<template>
	<div class="mb-10">
		<div @click="addAbled()" class="ma-5">
			<v-btn block outlined color="#8977ad">
				<v-icon>mdi-plus</v-icon>
			</v-btn>
		</div>
		<v-card
			v-for="(data, i) in collectionList"
			:key="i"
			@click="moveToCollection(i)"
			class="collectionBox ma-5 pa-2"
			color="rgba(137, 119, 173, 0.3)"
		>
			<v-card-subtitle class="pt-3 pb-1">{{ data.title }}</v-card-subtitle>
			<v-card-title class="pt-0">{{ data.yourWish }}</v-card-title>
			<v-card-text>
				<v-row class="stickerCount mx-0 pb-2">
					{{ data.yourStickerList.length }} / {{ data.total }}
				</v-row>
			</v-card-text>
		</v-card>
	</div>
</template>
<script>
import CollectionAddVue from "../components/CollectionAdd.vue";
import getters from "../store/index";

export default {
	name: "Gallery",
	data() {
		return {};
	},
	computed: {
		isYou() {
			return this.$store.state.isYou;
		},
		collectionList() {
			return this.$store.state.collectionList;
		},
	},
	methods: {
		moveToCollection(i) {
			// this.$store.state.viewIndex = i;
			// console.log(i, this.$store.state.viewIndex);
			this.$router.push({ name: "Collection" });
			this.$store.commit("updateIndex", i);
		},
		addAbled() {
			if (!this.$store.getters.list.length) {
				// 초기값 : 개수 없는 경우.
				this.$router.push({ name: "CollectionAdd" });
			} else if (
				this.$store.getters.latest.yourStickerList.length ===
				this.$store.getters.latest.total
			) {
				// 최신 스티커 완성한 경우.
				console.log(this.$store.getters.latest.yourStickerList.length);
				console.log(this.$store.getters.latest.total);
				this.$router.push({ name: "CollectionAdd" });
			} else {
				alert("진행중인 스티커를 완성하신 후 새롭게 만들수 있습니다 :)");
				return;
			}
		},
	},
};
</script>

<style scoped>
.v-card__title,
.v-card__subtitle {
	line-height: 1.3;
}
.stickerCount {
	position: absolute;
	right: 20px;
	bottom: 20px;
	color: #8977ad;
}
</style>
