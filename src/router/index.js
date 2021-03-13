import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/collection",
    name: "Collection",
    component: () =>
      import(/* webpackChunkName: "Collection" */ "../views/Collection.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/* webpackChunkName: "Gallery" */ "../views/Gallery.vue"),
  },
  {
    path: "/collectionAdd",
    name: "CollectionAdd",
    component: () =>
      import(
        /* webpackChunkName: "CollectionAdd" */ "../components/CollectionAdd.vue"
      ),
  },
  {
    path: "/stickerCustom",
    name: "StickerCustom",
    component: () =>
      import(
        /* webpackChunkName: "StickerCustom" */ "../views/StickerCustom.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
