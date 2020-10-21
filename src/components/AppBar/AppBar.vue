<template>
  <v-app-bar app color="primary" dark>
    <AppName />
    <v-spacer></v-spacer>
    <NavBar />
  </v-app-bar>
</template>

<script>
import AppName from "./components/AppName";
import NavBar from "./components/NavBar";

export default {
  name: "AppBar",
  components: { NavBar, AppName },
};
</script>
