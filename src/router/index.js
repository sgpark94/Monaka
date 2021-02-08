import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/collection",
		name: "Collection",
		component: () =>
			import(/* webpackChunkName: "collection" */ "../views/Collection.vue"),
	},
	{
		path: "/gallery",
		name: "Gallery",
		component: () =>
			import(/* webpackChunkName: "gallery" */ "../views/Gallery.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
