import Vue from "vue";
import VueRouter from "vue-router";
import albumsList from "../views/albumslist.vue";
import editAlbum from "../views/albumedit.vue";
import albumCreate from "../views/albumcreate";
import albumDelete from "../views/albumdelete";

Vue.use(VueRouter);

const routes = [
  {
    path: "/albumslist",
    name: "albumslist",
    component: albumsList,
  },
  {
    path: "/albumedit/:id",
    name: "albumedit",
    component: editAlbum,
  },
  {
    path: "/albumcreate",
    name: "albumcreate",
    component: albumCreate,
  },
  {
    path: "/albumdelete",
    name: "albumdelete",
    component: albumDelete,
  },
];

const router = new VueRouter({
  mode: "history",
  //eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes,
});

export default router;
