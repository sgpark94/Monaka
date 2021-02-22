<template>
	<div class="mt-16">
		<p class="wishTitle" v-if="this.$store.state.collectionList.length">소원</p>
		<p class="wishName">{{ yourWish }}</p>
	</div>
</template>
<script>
import { getters } from 'vuex';
export default {
	name: "Wish",
	computed: {
		yourWish() {
			// 리스트가 없을경우 처리.
			if(!this.$store.state.collectionList.length){
				return;
			} 
			// return this.$store.state.collectionList[0].wish;
			return this.$store.getters.latest.yourWish;
		},
	},
};
</script>

<style scoped>
p {
	display: inline-block;
}
.wishTitle {
	position: absolute;
	bottom: 24px;
	left: 15px;
	right: 0;
	font-size: 0.825rem;
	color: #828282;
}
.wishName {
	position: absolute;
	bottom: 0;
	left: 15px;
	right: 0;
}
</style>
