import { shallowMount } from "@vue/test-utils";
import AppName from "./AppName";

describe("AppName", () => {
  it("should render AppName", () => {
    const wrapper = shallowMount(AppName);

    expect(wrapper.text()).toContain("Farida");
  });
});
