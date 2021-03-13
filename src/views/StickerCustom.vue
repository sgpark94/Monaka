<template>
  <v-container>
    <h3>등록된 스티커</h3>
    <v-card flat>
      <template v-for="sticker in stickerTypeList">
        <v-badge
          :value="true"
          class="stickerBtn"
          bordered
          left
          :icon="sticker.icon"
          color="deep-orange"
          overlap
          offset-x="20"
          offset-y="20"
        >
          <v-btn
            fab
            :color="sticker.color"
            class="ma-1"
            :class="'text-none font-weight-bold ' + sticker.class"
            >{{ sticker.type }}</v-btn
          >
        </v-badge>
      </template>
    </v-card>

    <h3 class="mt-5">스티커 추가</h3>
    <v-form>
      <v-badge
        :value="true"
        class="stickerBtn"
        bordered
        left
        :icon="stickerForm.icon"
        color="deep-orange"
        overlap
        offset-x="20"
        offset-y="20"
      >
        <v-btn
          fab
          :color="stickerForm.color"
          :class="'text-none font-weight-bold ' + stickerForm.class"
          >{{ stickerForm.type }}</v-btn
        >
      </v-badge>
      <v-text-field
        v-model="stickerForm.type"
        class="mt-3"
        name="name"
        label="스티커명"
        counter="4"
        id="id"
      ></v-text-field>
      <v-select :items="colorItems" v-model="stickerForm.color" label="배경색">
        <template slot="selection" slot-scope="{ item }">
          <v-avatar :color="item" size="10" class="mr-3"></v-avatar>
          {{ item }}
        </template>
        <template slot="item" slot-scope="{ item }">
          <v-avatar :color="item" size="10" class="mr-3"></v-avatar>
          {{ item }}
        </template>
      </v-select>
      <v-select :items="textItems" v-model="stickerForm.class" label="글자색">
        <template slot="selection" slot-scope="{ item }">
          <v-avatar :color="removeText(item)" size="10" class="mr-3"></v-avatar>
          {{ removeText(item) }}
        </template>
        <template slot="item" slot-scope="{ item }">
          <v-avatar :color="removeText(item)" size="10" class="mr-3"></v-avatar>
          {{ removeText(item) }}
        </template>
      </v-select>
      <v-btn-toggle v-model="stickerForm.icon">
        <v-btn v-for="icon in iconItems.slice(0, 6)" :value="icon" :key="icon">
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </v-btn-toggle>

      <v-btn-toggle v-model="stickerForm.icon">
        <v-btn
          v-for="icon in iconItems.slice(6, iconItems.length)"
          :value="icon"
          :key="icon"
        >
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </v-btn-toggle>
      <v-btn
        class="mt-3"
        dark
        large
        block
        elevation="0"
        color="#8977ad"
        :disabled="disabledCheck"
        @click="addNewStickerType()"
        >스티커 생성</v-btn
      >
    </v-form>
    <v-snackbar v-model="snackBar" :timeout="2000">
      {{ snackBarText }}

      <template v-slot:action="{ attrs }"> </template>
    </v-snackbar>
  </v-container>
</template>
<script>
export default {
  name: "StickerCustom",
  data() {
    return {
      snackBar: false,
      snackBarText: "",

      defaultForm: {
        type: "Love",
        text: "",
        icon: "mdi-thumb-up-outline",
        color: "#8977ad",
        class: "white--text",
      },

      stickerForm: {
        type: "Love",
        text: "",
        icon: "mdi-thumb-up-outline",
        color: "#8977ad",
        class: "white--text",
      },

      colorItems: ["#fff", "#ffb6c1", "#8977ad", "#fbd872", "red", "blue"],
      textItems: [
        "white--text",
        "pink--text",
        "pink--text text--accent-4",
        "pink--text text--darken-1",
        "pink--text text--lighten-1",
        "purple--text",
        "purple--text text--accent-4",
        "purple--text text--darken-1",
        "purple--text text--lighten-1",
        "red--text",
        "red--text text--accent-4",
        "red--text text--darken-1",
        "red--text text--lighten-1",
        "blue--text",
        "blue--text text--accent-4",
        "blue--text text--darken-1",
        "blue--text text--lighten-1",
      ],

      // Icon
      iconItems: [
        "mdi-thumb-up-outline",
        "mdi-hand-peace",
        "mdi-emoticon-excited-outline",
        "mdi-heart-outline",
        "mdi-emoticon-kiss-outline",
        "mdi-face-woman-shimmer-outline",
        "mdi-face-shimmer-outline",
        "mdi-emoticon-cry-outline",
      ],
    };
  },
  computed: {
    stickerTypeList() {
      return this.$store.state.stickerTypeList;
    },
    disabledCheck() {
      return !this.stickerForm.type || !this.stickerForm.icon;
    },
  },
  methods: {
    removeText(item) {
      // remove "--text", "text--"
      return item.replace("--text", "").replace("text--", "");
    },
    addNewStickerType() {
      this.$store.commit("addStickerType", this.stickerForm);
      this.stickerForm = this.copy(this.defaultForm);
      this.snackBarText = "새로운 스티커가 생성되었습니다! :)";
      this.snackBar = true;
    },
    // Utils
    copy(val) {
      return JSON.parse(JSON.stringify(val));
    },
  },
};
</script>
