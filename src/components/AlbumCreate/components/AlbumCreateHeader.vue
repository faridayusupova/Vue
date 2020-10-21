<template>
  <v-container>
    <h3>
      Album Create: <span class="red--text"> {{ album.title }} </span>
    </h3>
  </v-container>
</template>

<script>
export default {
  name: "AlbumCreateHeader",
  props: ["album"],
};
</script>

<style scoped>
h3 {
  color: #000088;
}
</style>
