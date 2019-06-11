import { mount, RouterLinkStub } from "@vue/test-utils";
import Companies from "@/components/Companies.vue";
import store from "@/store/index";
import faker from "faker";
import filters from "@/filters/filters";

describe("Comapnies.vue", () => {
  const data = {
    lastRequested: null,
    companies: [
      {
        id: 83,
        name: faker.company.companyName(),
        dateCreated: new Date().toLocaleDateString(),
        state: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
        grossRevenue: faker.random.number({ min: 10000, max: 1e7 }),
        address: `${faker.address.streetAddress()}`,
        phoneNumber: faker.phone.phoneNumber("(###)-###-####"),
        website: faker.internet.url(),
        emps: faker.random.number({ min: 200, max: 1000 }),
        type: faker.name.jobArea(),
        comparableGrowth: faker.random.arrayElement([
          0,
          faker.finance.amount(
            -1 * faker.random.number({ max: 100 }),
            faker.random.number({ max: 100 }),
            2
          )
        ])
      }
    ]
  };

  describe("mount", () => {
    let wrapper, requestBanner;
    beforeAll(() => {
      wrapper = mount(Companies, { store, filters, stubs: { RouterLink: RouterLinkStub } });
      wrapper.setData(data);
      requestBanner = wrapper.find("#requestBanner");
    });

    it("does not render 'Request Banner'", () => {
      expect(requestBanner.exists()).toEqual(false);
    });
  });

  describe("when user clicks 'Request Merger'", () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(Companies, { store, filters, stubs: { RouterLink: RouterLinkStub } });
      wrapper.setData({
        lastRequested: data.companies[0],
        companies: data.companies
      });
      wrapper.find(".target__btn").trigger("click");
    });

    it("renders the request banner", () => {
      expect(wrapper.find("#requestBanner").exists()).toEqual(true);
    });

    describe("when user clicks the 'X' on the banner", () => {
      beforeAll(() => {
        wrapper.find("#closeBanner").trigger("click");
      });

      it("closes the request banner", () => {
        expect(wrapper.find("#requestBanner").exists()).toEqual(false);
      });
    });
  });
});
