<template>
    <v-bottom-navigation :value="value" color="#8977ad" fixed grow>
        <v-btn name="collection" to="Collection" height="56" color="#fff">
            <span>Collection</span>

            <v-icon>mdi-sticker-emoji</v-icon>
        </v-btn>

        <v-btn name="gallery" to="Gallery" height="56" color="#fff">
            <span>Gallery</span>

            <v-icon>mdi-folder-multiple-image</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>
<script>
export default {
    name: "Footer",
    data: () => ({ value: 1 }),
};
</script>

<style scoped></style>
