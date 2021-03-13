<template>
  <v-bottom-navigation v-model="value" color="#8977ad" fixed grow>
    <v-btn
      value="Collection"
      name="Collection"
      to="Collection"
      height="56"
      color="#fff"
    >
      <span>Collection</span>
      <v-icon>mdi-sticker-emoji</v-icon>
    </v-btn>

    <v-btn value="Gallery" name="Gallery" to="Gallery" height="56" color="#fff">
      <span>Gallery</span>
      <v-icon>mdi-folder-multiple-image</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
    value: "Gallery",
    // KR_dict: { Collection: "스티커", Gallery: "갤러리" },
  }),
  computed: {
    page() {
      return this.$route.name;
    },
  },
  watch: {
    page(val) {
      this.value = val;
      this.$store.commit("setTitle", val);
    },
  },
};
</script>

<style scoped></style>
