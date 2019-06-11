import { mount, RouterLinkStub } from "@vue/test-utils";
import Acquisitions from "@/components/Acquisitions.vue";
import EditCompanyModal from "@/components/EditCompanyModal.vue";
import store from "@/store/index";
import filters from "@/filters/filters";

describe("Acquisitions.vue", () => {
  let $modal = { show: jest.fn() };
  let wrapper = mount(Acquisitions, {
    store,
    filters,
    stubs: { RouterLink: RouterLinkStub },
    mocks: { $modal }
  });
  describe("mount", () => {
    it("renders data correctly", () => {
      expect(wrapper.find("div.company--name").text()).toEqual(
        expect.any(String)
      );
      expect(wrapper.find("div.company--state").text()).toEqual(
        expect.any(String)
      );
      expect(wrapper.find("div.company--date").text()).toEqual(
        expect.any(String)
      );
      expect(wrapper.find("div.company--gross").text()).toEqual(
        expect.any(String)
      );
      expect(wrapper.find("div.company--status").text()).toEqual(
        expect.any(String)
      );
      expect(wrapper.find("div.company--emps").text()).toEqual(
        expect.any(String)
      );
      expect(wrapper.find("button.company--editBtn").text()).toEqual("Edit");
    });
  });

  describe("when user clicks 'Edit'", () => {
    beforeAll(() => {
      wrapper.find("button.company--editBtn").trigger("click");
    });
    it("opens the EditCompanyModal", () => {
      expect($modal.show).toHaveBeenCalledWith(
        EditCompanyModal,
        {},
        { height: "auto", adaptive: true }
      );
    });
  });
});
