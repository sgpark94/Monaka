import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    collectionList: [
      // 더미 데이터 추가.
      // {
      //    title: "1일 1칭찬 도전기~!",
      //    myWish: "철수랑 손잡고 놀이공원 놀러가기.",
      //    yourWish: "영희랑 커플 프로필 사진찍기.",
      //    total: 30,
      //    myStickerList: [],
      //    yourStickerList: [],
      // },
    ],
    isYou: true,
    viewIndex: 0,
    menuTitle: "스티커",
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
  },
  actions: {},
  modules: {},
});
