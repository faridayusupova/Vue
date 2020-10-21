<template>
  <nav class="text-center">
    <v-btn class="mx-2" fab small color="transparent" to="/albumcreate">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <v-btn class="mx-2" fab small color="transparent" to="/albumslist">
      <v-icon dark> mdi-format-list-bulleted-square </v-icon>
    </v-btn>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
