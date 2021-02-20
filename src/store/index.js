import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		collectionList: [],
	},
	getters: {
		list(state) {
			if (state.collectionList.length === 0) {
				return [];
			}
			return state.collectionList;
		},
		latest(state) {
			if (state.collectionList.length === 0) {
				return {};
			}
			return state.collectionList[0];
		},
	},
	mutations: {
		collectionListAdd(state, form) {
			// 위쪽에 컬렉션리스트 추가.
			state.collectionList.unshift(form);
		},
	},
	actions: {},
	modules: {},
});
