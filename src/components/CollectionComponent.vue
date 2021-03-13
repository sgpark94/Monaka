<template>
  <div id="collectionComponent">
    <v-row justify="center">
      <v-col cols="auto">
        <div class="stickerStatus">
          {{ stickerList.length }} / {{ latestCollection.total }}
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <v-sheet>
          <v-switch
            class="mt-0"
            v-model="isYou"
            color="#8977ad"
            inset
            @click="switchName(isYou)"
            :label="$store.state.isYou ? '🐪 멋진낙타' : '🔥 예쁜슬기'"
          ></v-switch>
        </v-sheet>
      </v-col>
    </v-row>
    <Sticker />
  </div>
</template>
<script>
import Sticker from "@/components/Sticker";
import getters from "../store/index";

export default {
  name: "CollectionComponent",
  data() {
    return {
      // isYou: true,
      isYou: this.$store.state.isYou,
    };
  },
  components: {
    Sticker,
  },
  computed: {
    latestCollection() {
      return this.$store.getters.latest;
    },
    stickerList() {
      if (this.$store.state.isYou) {
        return this.$store.getters.latest.yourStickerList;
      } else {
        return this.$store.getters.latest.myStickerList;
      }
    },
  },
  methods: {
    switchName(isYou) {
      // this.$store.state.isYou = isYou;
      this.$store.commit("switchName", this.isYou);
    },
    noCollectionCheck() {
      let noCollection = !this.$store.state.collectionList.length;
      if (noCollection) {
        this.$router.push({
          name: "CollectionAdd",
        });
      }
    },
  },
  created() {
    this.noCollectionCheck();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

.stickerStatus {
  padding: 10px 15px 0;
  font-size: 0.875rem;
  color: #8977ad;
}
</style>
