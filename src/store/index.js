import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    menuTitle: "스티커",

    // Collection
    collectionList: [],
    isYou: true,
    viewIndex: 0,

    // Sticker
    stickerTypeList: [
      {
        type: "Good",
        text: "참 잘했어요.",
        icon: "mdi-thumb-up-outline",
        color: "#8977ad",
        class: "white--text",
      },
      {
        type: "Nice",
        text: "멋져요.",
        icon: "mdi-hand-peace",
        color: "#ffb6c1",
        class: "white--text",
      },
      {
        type: "Kind",
        text: "착해요.",
        icon: "mdi-emoticon-excited-outline",
        color: "#fbd872",
        class: "white--text",
      },
    ],
  },
  getters: {
    title(state) {
      return state.menuTitle;
    },
    list(state) {
      if (state.collectionList.length === 0) {
        return [];
      }
      return state.collectionList;
    },
    latest(state) {
      // TODO: 이름 의미에 맞게 바꾸기.
      if (state.collectionList.length === 0) {
        return {
          title: "",
          myWish: "",
          yourWish: "",
          total: 30,
          myStickerList: [],
          yourStickerList: [],
        };
      }
      if (state.viewIndex === 0) {
        // 최신 컬렉션
        return state.collectionList[0];
      } else {
        // 이전 컬렉션들
        return state.collectionList[state.viewIndex];
      }
    },
  },
  mutations: {
    setTitle(state, title) {
      state.menuTitle = title;
    },
    collectionListAdd(state, form) {
      // 위쪽에 컬렉션리스트 추가.
      state.collectionList.unshift(form);
    },
    switchName(state, isYou) {
      state.isYou = isYou;
    },
    updateIndex(state, idx) {
      state.viewIndex = idx;
    },
    attach(state, clikedSticker) {
      if (state.isYou) {
        state.collectionList[state.viewIndex].yourStickerList.push(
          clikedSticker
        );
      } else {
        state.collectionList[state.viewIndex].myStickerList.push(clikedSticker);
      }
    },
    addStickerType(state, form) {
      state.stickerTypeList.push(form);
    },
  },
  actions: {},
  modules: {},
});
