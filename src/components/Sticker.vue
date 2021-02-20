<template>
	<div>
		<div class="stickerArea mb-6">
			<div class="sticker ma-2" v-for="sticker in latestCollection.stickerList">
				<v-btn icon x-large class="stick">
					<v-avatar color="#8977ad" size="54" class="caption">{{
						sticker.type
					}}</v-avatar></v-btn
				>
			</div>
			<div class="sticker ma-2" v-for="i in noStickerCount(latestCollection)">
				<v-btn
					icon
					x-large
					class="noStick"
					:disabled="i !== 1"
					@click="attached(latestCollection.stickerList)"
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
	},
	methods: {
		attached(list) {
			let form = {
				type: "good",
			};
			list.push(form);
		},
		noStickerCount(data) {
			// computed처럼 값을 변화시켜주니까 이해하자!!
			return data.total - data.stickerList.length;
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
	font-family: "Poppins", sans-serif;
}
/* .stickerList {
	margin-bottom: 100px;
	text-align: center;
}
.stickerList > div {
	position: relative;
	display: inline-block;
	width: 50px;
	height: 50px;
	margin: 10px;
	padding: 5px;
	vertical-align: top;
	border-width: 1px;
	border-color: #8977ad;
	border-radius: 50%;
}
.stickerList > div::before {
	content: "";
	position: absolute;
	top: -4px;
	left: -4px;
	right: 0;
	bottom: 0;
	width: 56px;
	height: 56px;
	border: 1px solid #8977ad;
	border-radius: 50%;
}
.stickerList img {
	max-width: 100%;
	max-height: 100%;
} */
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
/* .stick.new span {
	position: absolute;
	top: 16px;
	left: -5px;
	right: -5px;
	padding: 2px 0;
	text-align: center;
	background-color: #8977ad;
	font-size: 0.625rem;
	color: #fff;
}
.stick.new .star {
	position: absolute;
	top: 13px;
	left: 0;
	width: 16px;
} */
.noStick img {
	width: 20px;
	opacity: 0.2;
}
</style>
