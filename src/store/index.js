import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		collectionList: [],
	},
	getters: {},
	mutations: {
		collectionListAdd(state, form) {
			// 위쪽에 컬렉션리스트 추가.
			state.collectionList.unshift(form);
		},
	},
	actions: {},
	modules: {},
});
