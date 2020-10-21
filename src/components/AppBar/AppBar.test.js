import AppBar from "./AppBar";
import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

describe("AppBar", () => {
  const localVue = createLocalVue();

  localVue.use(VueRouter);
  const router = new VueRouter();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should render AppBar", () => {
    const wrapper = mount(AppBar, {
      localVue,
      router,
      vuetify,
    });

    expect(wrapper.findAll("nav").length).toBe(1);
  });
});
