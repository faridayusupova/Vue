<template>
  <v-container>
    <v-row>
      <v-col
        v-for="photo in photos"
        :key="photo.id"
        class="d-flex child-flex"
        cols="2"
      >
        <v-img v-bind:src="photo.thumbnailUrl" :alt="photo.title" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AlbumEditPhotos",
  props: ["photos"],
};
</script>
<style scoped></style>
