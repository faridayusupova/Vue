import { shallowMount } from "@vue/test-utils";
import AlbumEditHeader from "./AlbumEditHeader";

describe("AlbumEditHeader", () => {
  it("should render AppName", () => {
    const wrapper = shallowMount(AlbumEditHeader, {
      propsData: { album: { id: 1, title: "test" } },
    });

    expect(wrapper.text()).toContain("test");
  });

  it("should not render AppName", () => {
    const wrapper = shallowMount(AlbumEditHeader, {
      propsData: { album: { id: 1, title: "xxx" } },
    });

    expect(wrapper.text()).not.toContain("test");
  });
});
