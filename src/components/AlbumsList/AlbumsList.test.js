import AlbumsList from "./AlbumsList";
import { createLocalVue, mount } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuetify from "vuetify";

describe("AlbumsList", () => {
  const localVue = createLocalVue();

  localVue.use(VueRouter);
  const router = new VueRouter();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should render AlbumsList", () => {
    const wrapper = mount(AlbumsList, {
      localVue,
      router,
      vuetify,
    });

    expect(wrapper.findAll("tr").length).toBe(2);
  });
});
