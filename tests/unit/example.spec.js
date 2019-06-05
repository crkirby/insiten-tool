import { shallowMount } from "@vue/test-utils";
import Comapnies from "@/components/Comapnies.vue";

describe("Comapnies.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(Comapnies);
    expect(wrapper.exists()).toEqual(true);
  });
});
