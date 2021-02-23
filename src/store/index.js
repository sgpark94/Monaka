import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		collectionList: [
			// 더미 데이터 추가.
			{
				title: "1일 1칭찬 도전기~!",
				myWish: "철수랑 손잡고 놀이공원 놀러가기.",
				yourWish: "영희랑 커플 프로필 사진찍기.",
				total: 30,
				stickerList: []
			}
		],
		isYou: true
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
		switchName(state, isYou){
			state.isYou;
		}
	},
	actions: {},
	modules: {},
});
