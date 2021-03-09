<template>
  <v-app>
    <v-main>
      <v-slide-x-transition hide-on-leave>
        <router-view />
      </v-slide-x-transition>
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
/* @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap"); */

@font-face {
  font-family: "JSDongkang-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

* {
  font-family: "JSDongkang-Regular", sans-serif;
  letter-spacing: -0.5px;
}
</style>
