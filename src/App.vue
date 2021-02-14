<template>
	<v-app>
		<v-main>
			<router-view />
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import Footer from "./components/Footer";
export default {
	name: "App",

	components: {
		Footer,
	},

	data: () => ({
		//
	}),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap");

* {
	font-family: "Noto Sans KR", sans-serif;
}
</style>
