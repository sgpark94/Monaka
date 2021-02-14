<template>
	<div id="collectionComponent">
		<!-- 스티커 갯수 -->
		<div class="stickerStatus">2 / 20</div>

		<!-- 스티커 영역 -->
		<div class="stickerList">
			<!-- 채워진 스티커 -->
			<!-- 신규 스티커 -->
			<div class="aquired new">
				<span>New</span>
				<img
					src="../assets/images/iconRedStar.png"
					alt="강조아이콘"
					class="star"
				/>
				<img
					src="https://item.kakaocdn.net/do/4ab318951f14b03c2e545776b00a7b8a66d8fd08427c1f00d04db607cc4cdc8e"
					alt="칭찬스티커받은후"
				/>
			</div>

			<div class="aquired">
				<img
					src="https://item.kakaocdn.net/do/4ab318951f14b03c2e545776b00a7b8a66d8fd08427c1f00d04db607cc4cdc8e"
					alt="칭찬스티커받은후"
				/>
			</div>

			<!-- 빈 스티커 -->
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
			<div class="empty">
				<img
					src="../assets/images/iconHeartSticker.svg"
					alt="칭찬스티커받기전"
				/>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "CollectionComponent",
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
.stickerList {
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
}
.aquired {
	border-style: solid;
	background-color: #8977ad;
}
.aquired.new span {
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
.aquired.new .star {
	position: absolute;
	top: 13px;
	left: 0;
	width: 16px;
}
.empty {
	border-style: dashed;
	opacity: 0.2;
}
.empty img {
	width: 20px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
