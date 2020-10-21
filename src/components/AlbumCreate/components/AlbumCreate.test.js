import AlbumCreate from "./AlbumCreate";
import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

describe("AlbumCreate", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should render AlbumCreate", () => {
    const wrapper = mount(AlbumCreate, {
      localVue,
      router,
      vuetify,
    });

    expect(wrapper.findAll("h3").length).toBe(1);
    expect(wrapper.findAll("input").length).toBe(1);
  });
});
