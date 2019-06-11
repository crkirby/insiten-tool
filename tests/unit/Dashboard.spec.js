import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import Dashboard from "@/views/Dashboard.vue";
import NewCompanyModal from "@/components/NewCompanyModal.vue";
import store from "@/store/index";
import filters from "@/filters/filters";

describe("Dashboard.vue", () => {
  let $modal = { show: jest.fn() };
  let wrapper = shallowMount(Dashboard, {
    store,
    filters,
    stubs: { RouterLink: RouterLinkStub },
    mocks: { $modal }
  });
  describe("mount", () => {
    it("renders data correctly", () => {
      expect(wrapper.find("span.company__count").text()).toEqual(
        `${store.getters["getCompanies"].length}`
      );
      expect(wrapper.find("button.company__addMerger").text()).toEqual(
        "Add new merger"
      );
    });
  });

  describe("when user clicks 'Request Merger'", () => {
    beforeAll(() => {
      wrapper.find("button.company__addMerger").trigger("click");
    });
    it("opens the NewCompanyModal", () => {
      expect($modal.show).toHaveBeenCalledWith(
        NewCompanyModal,
        {},
        { height: "auto", adaptive: true }
      );
    });
  });
});
