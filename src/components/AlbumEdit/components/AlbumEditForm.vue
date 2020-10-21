<template>
  <v-container>
    <v-form>
      <v-text-field
        label="Album Title"
        v-model="album.title"
        placeholder="Please enter Album Data"
        outlined
      ></v-text-field>
      <v-btn @click="submit" color="primary"> Update Album Data </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "AlbumEditForm",
  props: ["album", "submit"],
};
</script>

<style scoped></style>
