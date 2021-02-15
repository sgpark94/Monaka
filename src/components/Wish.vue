<template>
	<div class="mt-16">
		<!-- <p class="wishTitle">소원</p>
		<p class="wishName" v-for="list in wishList">{{ list }}</p> -->
	</div>
</template>
<script>
export default {
	name: "Wish",
	computed: {
		wishList() {
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
