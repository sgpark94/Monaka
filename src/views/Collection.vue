<template>
	<div>
		<Wish />
	</div>
</template>
<script>
import Wish from "@/components/Wish";
export default {
	components: {
		Wish,
	},
	name: "Collection",
	created() {
		if (this.$store.state.is_sticker_exist == false) {
			alert("첫번째 스티커북을 생성해주세요 :)");
			this.$router.push({ name: "Gallery" });
		}
	},
};
</script>

<style scoped></style>
