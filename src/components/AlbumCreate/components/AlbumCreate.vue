<template>
  <v-container>
    <div v-if="album">
      <AlbumCreateHeader :album="album" />
      <AlbumCreateForm :album="album" :submit="submit" />
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
import { createAlbum } from "../../../lib/Api";
import AlbumCreateHeader from "./AlbumCreateHeader";
import AlbumCreateForm from "./AlbumCreateForm";

export default {
  name: "AlbumCreate",
  components: { AlbumCreateForm, AlbumCreateHeader },
  data: function () {
    return {
      snackbar: false,
      text: "",
      color: "",
      vertical: true,
      album: {
        title: "",
        id: 0,
        photos: [],
      },
    };
  },

  methods: {
    async submit() {
      const result = await createAlbum(this.album);
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
