<template>
  <v-container>
    <div v-if="album">
      <AlbumEditHeader :album="album" />
      <AlbumEditForm :album="album" :submit="submit" />
      <AlbumEditPhotos :photos="photos" />
    </div>
    <v-snackbar v-model="snackbar" :vertical="vertical" :color="color">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="indigo" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import {
  getAlbumsById,
  getAlbumsPhotosId,
  updateAlbum,
} from "../../../lib/Api";
import AlbumEditHeader from "./AlbumEditHeader";
import AlbumEditPhotos from "./AlbumEditPhotos";
import AlbumEditForm from "./AlbumEditForm";

export default {
  name: "AlbumEdit",
  components: { AlbumEditForm, AlbumEditPhotos, AlbumEditHeader },
  data: function () {
    return {
      snackbar: false,
      color: "",
      text: "",
      vertical: false,
      album: null,
      photos: [],
    };
  },
  async mounted() {
    this.album = await getAlbumsById(this.$route.params.id);
    this.photos = await getAlbumsPhotosId(this.$route.params.id);
    if (!this.album || !this.photos) {
      this.snackbar = true;
      this.text = !this.album ? "Error Album" : "Error photos";
      this.color = "error";
    }
  },
  methods: {
    async submit() {
      const result = await updateAlbum(this.album);
      this.snackbar = true;
      if (result) {
        this.text = "Success";
        this.color = "success";
        return;
      }
      this.text = "Error";
      this.color = "error";
    },
  },
};
</script>

<style scoped></style>
