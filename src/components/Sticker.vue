<template>
	<div>
		<div class="stickerArea mb-6">
			<div class="sticker ma-2" v-for="sticker in stickerList">
				<v-btn icon x-large class="stick">
					<v-avatar color="#8977ad" size="54" class="caption">
						{{ sticker.type }}
					</v-avatar>
				</v-btn>
			</div>
			<div class="sticker ma-2" v-for="i in noStickerCount">
				<v-btn
					icon
					x-large
					class="noStick"
					:disabled="i !== 1"
					@click="attached(stickerList)"
				>
					<v-avatar color="rgba(137, 119, 173, .1)" size="54" class="caption">
						<img
							src="../assets/images/iconHeartSticker.svg"
							alt="칭찬스티커받기전아이콘"
						/>
					</v-avatar>
				</v-btn>
			</div>
		</div>
	</div>
</template>
<script>
import getters from "../store/index";

export default {
	name: "Sticker",
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
		noStickerCount() {
			// computed처럼 값을 변화시켜주니까 이해하자!!
			return this.latestCollection.total - this.stickerList.length;
		},
	},
	methods: {
		attached(list) {
			let form = {
				type: "good",
			};
			list.push(form);
		},
	},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

.stickerStatus {
	padding: 15px 15px 0;
	font-size: 0.875rem;
	color: #8977ad;
}
.stickerArea {
	text-align: center;
}
.sticker {
	position: relative;
	display: inline-block;
}
.sticker::before {
	content: "";
	position: absolute;
	top: -3px;
	left: -3px;
	right: 0;
	bottom: 0;
	width: 58px;
	height: 58px;
	border: 1px dashed #8977ad;
	border-radius: 50%;
}
.stick {
	border-style: solid;
	background-color: #8977ad;
}
.noStick img {
	width: 20px;
	opacity: 0.2;
}
</style>
