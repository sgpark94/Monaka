<template>
	<div>
		<v-app-bar app color="white" flat>
			<v-icon large v-if="backIconShow" @click="goBack()">
				mdi-chevron-left</v-icon
			>
			<v-icon v-else class="mr-2" color="purple darken-4">
				{{ MenuIcon }}
			</v-icon>
			<v-toolbar-title class="font-weight-bold purple--text text--darken-4">
				{{ MenuTitle }}
			</v-toolbar-title>

			<v-spacer></v-spacer>
			<v-menu offset-y>
				<template v-slot:activator="{ on, attrs }">
					<v-btn
						color="primary"
						icon
						v-bind="attrs"
						v-on="on"
						v-show="MenuTitle == 'Collection'"
					>
						<v-icon color="grey">mdi-cog</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-item
						v-for="(item, index) in items"
						:key="index"
						@click="moveTo(item.path)"
					>
						<v-list-item-title>{{ item.text }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-app-bar>
	</div>
</template>

<script>
export default {
	name: "AppBar",

	components: {},

	data: () => ({
		items: [{ path: "/stickerCustom", text: "스티커 종류 설정" }],
		//
	}),
	computed: {
		MenuTitle() {
			return this.$store.getters.title;
		},
		MenuIcon() {
			let icon = {
				Collection: "mdi-sticker-emoji",
				CollectionAdd: "mdi-sticker-emoji",
				Gallery: "mdi-folder-multiple-image",
			}[this.MenuTitle];
			console.log(this.MenuTitle, icon);
			return icon;
		},
		backIconShow() {
			let backList = ["StickerCustom"];
			return backList.includes(this.MenuTitle);
		},
	},
	methods: {
		moveTo(path) {
			this.$router.push({ path: path });
		},
		goBack() {
			if (["StickerCustom"].includes(this.MenuTitle)) {
				// to Collection
				this.$router.push({ name: "Collection" });
			} else {
				// Gallery
				this.$router.push({ name: "Gallery" });
			}
		},
	},
};
</script>
