<template>
	<div>
		<v-card height="100%" class="pa-3 ma-5" color="rgba(137, 119, 173, 0.3)">
			<v-fade-transition>
				<v-alert type="error" v-show="warningText" dense class="caption ma-0">{{
					warningText
				}}</v-alert>
			</v-fade-transition>
			<v-card-text>
				<p class="titleInfo caption mb-7">연인을 위한 컬렉션을 추가하세요 :)</p>
				<h3 class="mb-2">컬렉션 이름</h3>
				<v-text-field
					v-model="collectionAddForm.title"
					solo
					flat
					class="content pt-0"
					ref="collectionName"
					placeholder="ex) 1일 1칭찬 한달도전기!"
				></v-text-field>
				<h3 class="mb-2">소원</h3>
				<v-text-field
					v-model="collectionAddForm.wish"
					solo
					flat
					ref="wish"
					class="content pt-0"
					placeholder="ex) 영희가 준비한 도시락 가지고 놀이공원 놀러가기."
				></v-text-field>
				<h3>스티커 개수</h3>
				<v-btn-toggle
					v-model="collectionAddForm.total"
					mandatory
					tile
					color="deep-purple accent-3"
					group
				>
					<v-btn class="mt-3 pl-5 pr-5" value="30">
						30
					</v-btn>
					<v-btn class="mt-3 pl-5 pr-5" value="50">
						50
					</v-btn>
				</v-btn-toggle>
			</v-card-text>

			<v-divider></v-divider>

			<v-card-actions>
				<v-btn dark large block color="#8977ad" class="mt-3" @click="create">
					생성하기
				</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>
<script>
export default {
	name: "CollectionAdd",
	data() {
		return {
			collectionAddForm: {
				title: "",
				wish: "",
				total: 30,
				stickerList: [],
			},
			warningText: "",
		};
	},
	methods: {
		create() {
			// 실패시
			if (!this.collectionAddForm.title) {
				this.warningText = "컬렉션 이름을 입력해주세요.";
				this.$refs.collectionName.focus();
				return;
			} else if (!this.collectionAddForm.wish) {
				this.warningText = "소원을 입력해주세요.";
				this.$refs.wish.focus();
				return;
			}
			// 성공시
			this.warningText = "";
			this.$router.push({ name: "Gallery" });
			this.$store.commit("collectionListAdd", this.collectionAddForm);
		},
	},
};
</script>

<style scope>
/* @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap"); */
@font-face {
	font-family: "SeoulNamsanM";
	src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SeoulNamsanM.woff")
		format("woff");
	font-weight: normal;
	font-style: normal;
}

h3 {
	font-family: "SeoulNamsanM", sans-serif;
	color: #8977ad;
}
.titleInfo {
	color: #808080;
}
.v-input input {
	font-size: 0.875rem;
}
</style>
