<template>
    <div>
        <div class="stickerArea mb-6">
            <div
                class="sticker ma-2"
                v-for="sticker in stickerList"
                :key="sticker.createdAt"
            >
                <v-badge
                    bordered
                    left
                    :icon="badgeType(sticker.type)"
                    color="deep-orange"
                    overlap
                >
                    <v-btn icon x-large class="stick">
                        <!-- :value="isNew(sticker.createdAt)" -->
                        <v-avatar size="54" class="caption">
                            <img :src="sticker.src" alt="" />
                        </v-avatar>
                    </v-btn>
                </v-badge>
            </div>
            <div class="sticker ma-2" v-for="i in noStickerCount" :key="i">
                <v-btn
                    icon
                    x-large
                    class="noStick"
                    :disabled="i !== 1"
                    @click="openStickerType()"
                >
                    <v-avatar
                        color="rgba(137, 119, 173, .1)"
                        size="54"
                        class="caption"
                    >
                        <img
                            src="../assets/images/iconHeartSticker.svg"
                            alt="칭찬스티커받기전아이콘"
                        />
                    </v-avatar>
                </v-btn>
            </div>
        </div>

        <div class="text-center">
            <v-dialog v-model="dialog" width="500">
                <v-card>
                    <v-card-title class="headline grey lighten-2">
                        스티커 종류
                    </v-card-title>

                    <v-avatar
                        v-for="stickerType in stickerTypeList"
                        :key="stickerType.type"
                    >
                        <img
                            @click="attached(stickerType)"
                            :src="stickerType.src"
                            :alt="stickerType.alt"
                        />
                    </v-avatar>

                    <!-- <v-avatar>
                        <img
                            @click="attached(stickerTypeList[0])"
                            :src="stickerTypeList[0].src"
                            :alt="stickerTypeList[0].alt"
                        />
                    </v-avatar>
                    <v-avatar>
                        <img
                            @click="attached(stickerTypeList[1])"
                            :src="stickerTypeList[1].src"
                            :alt="stickerTypeList[1].alt"
                        />
                    </v-avatar>
                    <v-avatar>
                        <img
                            @click="attached(stickerTypeList[2])"
                            :src="stickerTypeList[2].src"
                            :alt="stickerTypeList[2].alt"
                        />
                    </v-avatar> -->

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>
<script>
import getters from "../store/index";

export default {
    name: "Sticker",
    data() {
        return {
            dialog: false,
            stickerTypeList: [
                {
                    type: "good",
                    text: "참 잘했어요.",
                    alt: "참잘했어요스티커",
                    badge: "mdi-thumb-up-outline",
                    src: require("@/assets/images/good.png"),
                    createdAt: null,
                },
                {
                    type: "nice",
                    text: "멋져요.",
                    alt: "멋져요스티커",
                    badge: "mdi-hand-peace",
                    src: require("@/assets/images/nice.png"),
                    createdAt: null,
                },
                {
                    type: "kind",
                    text: "착해요.",
                    alt: "착해요스티커",
                    badge: "mdi-emoticon-excited-outline",
                    src: require("@/assets/images/kind.png"),
                    createdAt: null,
                },
            ],
            // mdi-face-man-shimmer
            // mdi-face-woman-shimmer
        };
    },

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
        disabled() {
            // viewIndex = 0 -> 최신 컬렉션을 의미한다.
            return this.$store.state.viewIndex > 0; // true, false를 반환한다.
        },
    },
    methods: {
        // APIs

        // Functions
        openStickerType() {
            this.dialog = true;
        },
        attached(clikedSticker) {
            if (this.disabled) return;
            clikedSticker.createdAt = Date.now();

            this.$store.commit("attach", clikedSticker);
            // this.stickerList.push(clikedSticker);

            this.dialog = false;
        },

        // Utils
        badgeType(type) {
            let badge = "mdi-close";

            this.stickerTypeList.forEach((item) => {
                if (item.type == type) {
                    badge = item.badge;
                }
            });

            return badge;
        },
        isNew(time) {
            return (Date.now() - time) / 1000 < 1 * 60 * 60 * 24;
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
/* .stick {
    border-style: solid;
    background-color: #8977ad;
} */
.noStick img {
    width: 20px;
    opacity: 0.2;
}
</style>
