<template>
  <v-container>
    <v-col cols="4">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-col>

    <v-data-table
      :headers="headers"
      :items="albums"
      :items-per-page="5"
      class="elevation-1"
      :search="search"
    >
      <template #item.name="{ item }">
        <tr>
          <td>
            {{ item.id }}
          </td>
          <td>
            <router-link :to="{ name: 'company', params: { id: item.id } }">
              {{ item.name }}
            </router-link>
          </td>
        </tr>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small @click="deleteAlbum(item)"> mdi-delete </v-icon>
        <v-icon small @click="editAlbum(item)"> mdi-pencil </v-icon>
      </template>
    </v-data-table>
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
import { getAlbums } from "../../lib/Api";
import { deleteAlbum } from "../../lib/Api";

export default {
  name: "AlbumsList",
  methods: {
    editAlbum(item) {
      this.$router.push({ name: "albumedit", params: { id: item.id } });
    },

    async deleteAlbum(album) {
      await deleteAlbum(album.id);
    },
  },

  data: function () {
    return {
      snackbar: false,
      color: "error",
      text: "Error",
      vertical: true,
      search: "",
      albums: [],
      headers: [
        {
          text: "Id",
          value: "id",
        },
        {
          text: "Title",
          value: "title",
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
        },
      ],
    };
  },
  async mounted() {
    this.albums = await getAlbums();
    if (!this.albums) {
      this.snackbar = true;
    }
  },
};
</script>
