import { mount, RouterLinkStub } from "@vue/test-utils";
import NewCompanyModal from "@/components/NewCompanyModal";
import store from "@/store/index";

describe("NewCompanyModal", () => {
  const $emit = jest.fn();
  let wrapper = mount(NewCompanyModal, {
    store,
    stubs: { RouterLink: RouterLinkStub },
    mocks: { $emit }
  });

  describe("mount", () => {
    it("renders empty input fields", () => {
      expect(
        wrapper
          .findAll("input")
          .wrappers.every(inputField => inputField.text() === "")
      ).toBeTruthy();
    });

    it("renders the 'Cancel' button", () => {
      expect(wrapper.find("button.btn__cancel").text()).toEqual("Cancel");
    });

    it("renders the 'Save' button", () => {
      expect(wrapper.find("button.btn__save").text()).toEqual("Save changes");
    });

    describe("when user clicks 'Cancel'", () => {
      beforeAll(() => {
        wrapper.find("button.btn__cancel").trigger('click')
      })

      it('closes the modal', () => {
        expect($emit).toHaveBeenCalledWith('close')
      })
    })

    describe("when user clicks 'Save Changes'", () => {
      beforeAll(() => {
        wrapper.find("button.btn__save").trigger('click')
      })

      it('closes the modal', () => {
        expect($emit).toHaveBeenCalledWith('close')
      })
    })
  });
});
