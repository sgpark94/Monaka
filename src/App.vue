<template>
	<v-app>
		<v-main>
			<AppBar />
			<v-slide-x-transition hide-on-leave>
				<router-view />
			</v-slide-x-transition>
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import Footer from "./components/Footer";
import AppBar from "./components/AppBar";
export default {
	name: "App",

	components: {
		Footer,
		AppBar,
	},

	data: () => ({
		//
	}),
};
</script>

<style>
@font-face {
	font-family: "GyeonggiBatang";
	src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GyeonggiBatang.woff")
		format("woff");
	font-weight: normal;
	font-style: normal;
}

* {
	font-family: "GyeonggiBatang", sans-serif;
	letter-spacing: -0.5px;
}
</style>
