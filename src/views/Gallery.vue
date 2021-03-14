<template>
	<div class="mb-10">
		<v-col
			v-touch="{ right: () => swipe('Right') }"
			style="height: calc(100vh - 56px)"
		>
			<div @click="addAbled()" class="ma-2">
				<v-btn block outlined color="#8977ad">
					<v-icon>mdi-plus</v-icon>
				</v-btn>
			</div>

			<v-card
				v-for="(collection, i) in collectionList"
				:key="i"
				@click="moveToCollection(i)"
				class="collectionBox mx-2 my-5 pa-2"
				color="rgba(137, 119, 173, 0.3)"
			>
				<v-card-text class="pb-0">
					<span v-if="collection.yourStickerList.length == collection.total"
						>Completed</span
					>
					<span v-else>In progress</span>
				</v-card-text>
				<v-card-subtitle class="pt-3 pb-1">{{
					collection.title
				}}</v-card-subtitle>
				<v-card-title class="pt-0">{{ collection.yourWish }}</v-card-title>
				<v-card-text>
					<v-row class="stickerCount mx-0 pb-2">
						{{ collection.yourStickerList.length }} / {{ collection.total }}
					</v-row>
				</v-card-text>
			</v-card>
		</v-col>
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

		// isCompleted() {
		//  console.log(this.$store.state.viewIndex);
		//  console.log(
		//      this.$store.getters.latest.yourStickerList.length,
		//      this.$store.getters.latest.total
		//  );

		//  return (
		//      this.$store.getters.latest.yourStickerList.length ==
		//      this.$store.getters.latest.total
		//  );
		// },
	},
	methods: {
		moveToCollection(i) {
			// this.$store.state.viewIndex = i;
			// console.log(i, this.$store.state.viewIndex);
			this.$router.push({ name: "Collection" });
			this.$store.commit("updateIndex", i);
		},
		addAbled() {
			console.log(this.$store.getters.latest.yourStickerList.length);
			console.log(this.$store.getters.latest.total);
			if (!this.$store.getters.list.length) {
				// 초기값 : 개수 없는 경우.
				this.$router.push({ name: "CollectionAdd" });
			} else if (
				this.$store.getters.latest.yourStickerList.length ==
				this.$store.getters.latest.total
			) {
				// 최신 스티커 완성한 경우.
				this.$router.push({ name: "CollectionAdd" });
			} else {
				alert("진행중인 스티커를 완성하신 후 새롭게 만들수 있습니다 :)");
				return;
			}
		},

		//Utils
		swipe(direction) {
			if (direction == "Right") {
				this.$router.push({ name: "Collection" });
			}
		},

		// 함수로 표현한 경우
		// isCompleted(collection) {
		//  return collection.yourStickerList.length == collection.total
		// },
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
span {
	padding: 2px 10px;
	font-size: 0.725rem;
	border-radius: 10px;
	background: #8977ad;
	color: #fff;
}
</style>
