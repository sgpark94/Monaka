<template>
  <div>
    <v-col
      v-touch="{ left: () => swipe('Left') }"
      style="height: calc(100vh - 56px)"
    >
      <collection-component />
      <Wish />
    </v-col>
  </div>
</template>
<script>
import Wish from "@/components/Wish";
import CollectionComponent from "@/components/CollectionComponent.vue";
export default {
  components: {
    CollectionComponent,
    Wish,
  },
  name: "Collection",
  data() {
    return {};
  },
  methods: {
    swipe(direction) {
      if (direction == "Left") {
        this.$router.push({ name: "Gallery" });
      }
    },
  },
  created() {
    /*
        if (this.$store.state.is_sticker_exist == false) {
            alert("첫번째 스티커북을 생성해주세요 :)");
            this.$router.push({ name: "Gallery" });
        }
        */
  },
};
</script>

<style scoped></style>
