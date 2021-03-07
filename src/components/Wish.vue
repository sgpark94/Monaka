<template>
	<div class="mt-16 mx-5">
		<p class="wishTitle" v-if="this.$store.state.collectionList.length">소원</p>
		<p class="wishName">{{ wish }}</p>
	</div>
</template>
<script>
import { getters } from "vuex";
export default {
	name: "Wish",
	data() {
		return {};
	},
	computed: {
		wish() {
			// 리스트가 없을경우 처리.
			if (!this.$store.state.collectionList.length) {
				return;
			}
			// return this.$store.state.collectionList[0].wish;
			// return this.$store.getters.latest.yourWish;

			if (this.$store.state.isYou) {
				return this.$store.getters.latest.yourWish;
			} else {
				return this.$store.getters.latest.myWish;
			}
		},
	},
};
</script>

<style scoped>
p {
	margin-bottom: 0;
}
.wishTitle {
	font-size: 0.825rem;
	color: #828282;
}
.wishName {
	margin-bottom: 70px;
}
</style>
