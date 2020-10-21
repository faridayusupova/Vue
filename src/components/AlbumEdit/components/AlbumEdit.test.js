import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import AlbumEdit from "./AlbumEdit";

describe("AlbumEdit", () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should not render AlbumEdit", () => {
    const wrapper = mount(AlbumEdit, {
      localVue,
      router,
      vuetify,
    });

    expect(wrapper.findAll("h3").length).not.toBe(1);
    expect(wrapper.findAll("input").length).not.toBe(1);
    expect(wrapper.findAll("img").length).not.toBe(50);
  });

  it("should render AlbumEdit", () => {
    const wrapper = mount(AlbumEdit, {
      localVue,
      router,
      vuetify,
      mounted: jest.fn(),
      data: function () {
        return {
          album: {
            id: 1,
            title: "test",
          },
          photos: [
            {
              albumId: 1,
              id: 2,
              title: "reprehenderit est deserunt velit ipsam",
              url: "https://via.placeholder.com/600/771796",
              thumbnailUrl: "https://via.placeholder.com/150/771796",
            },
          ],
        };
      },
    });
    expect(wrapper.findAll("h3").length).toBe(1);
    expect(wrapper.findAll("input").length).toBe(1);
    expect(wrapper.findAll(".v-image").length).toBe(1);
  });
});
