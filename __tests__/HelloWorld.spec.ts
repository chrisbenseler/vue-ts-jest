import { shallowMount } from "@vue/test-utils";
import HelloWorld from "../src/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  test("renders component", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper).toBeDefined();
  });
});
