<template>
	<div id="collectionComponent">
		<!-- 스티커 갯수 -->
		<div>
			<v-container class="pb-0">
				<v-row justify="center" class="mt-1">
					<v-col cols="auto">
						<div class="stickerStatus">
							{{ latestCollection.stickerList.length }} / {{ latestCollection.total }}
						</div>
					</v-col>
					
					<v-spacer></v-spacer>

					<v-col cols="auto">
						<v-sheet>
							<v-switch
								class="mt-0"
								v-model="isYou"
								color="#8977ad"
								inset
								:label="isYou ? 'You' : 'Me'"
							></v-switch>
						</v-sheet>
					</v-col>
				</v-row>
			</v-container>
			<!-- Sticker -->
			<Sticker />
		</div>
	</div>
</template>
<script>
import Sticker from "@/components/Sticker";
import getters from "../store/index";

export default {
	name: "CollectionComponent",
	data() {
		return {
	        isYou: true,
		};
	},
	components: {
		Sticker,
	},
	computed: {
		latestCollection() {
			return this.$store.getters.latest;
		},
	},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

.stickerStatus {
	padding: 10px 15px 0;
	font-size: 0.875rem;
	color: #8977ad;
}
</style>
