<template>
	<div class="mt-16">
		<p class="wishTitle" v-if="this.$store.state.collectionList.length">소원</p>
		<p class="wishName">{{ wish }}</p>
	</div>
</template>
<script>
import { getters } from 'vuex';
export default {
	name: "Wish",
	computed: {
		wish() {
			// 리스트가 없을경우 처리.
			if(!this.$store.state.collectionList.length){ return; } 
			return this.$store.state.collectionList[0].wish;
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
	bottom: 20px;
	left: 15px;
	right: 0;
	font-size: 10px;
	color: #828282;
}
.wishName {
	position: absolute;
	bottom: 0;
	left: 15px;
	right: 0;
	font-size: 0.875rem;
}
</style>
