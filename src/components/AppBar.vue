<template>
  <div>
    <v-app-bar app color="white" flat>
      <v-toolbar-title>{{ MenuTitle }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            icon
            v-bind="attrs"
            v-on="on"
            v-show="MenuTitle == 'Collection'"
          >
            <v-icon color="grey">mdi-cog</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="moveTo(item.path)"
          >
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppBar",

  components: {},

  data: () => ({
    items: [{ path: "/stickerSetting", text: "스티커 종류 설정" }],
    //
  }),
  computed: {
    MenuTitle() {
      return this.$store.getters.title;
    },
  },
  methods: {
    moveTo(path) {
      this.$router.push({ path: path });
    },
  },
};
</script>
