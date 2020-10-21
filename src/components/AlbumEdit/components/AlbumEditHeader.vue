<template>
  <v-container>
    <h3>
      Album Edit: <span class="red--text"> {{ album.title }} </span>
    </h3>
  </v-container>
</template>

<script>
export default {
  name: "AlbumEditHeader",
  props: ["album"],
};
</script>

<style scoped>
h3 {
  color: #008800;
}
</style>
