import mutations from "@/store/mutations";

describe("Mutations", () => {
  describe(".SET_CURRENT_COMPANY", () => {
    let state = { currentCompany: "a" },
      company = "b";
    beforeAll(() => {
      mutations.SET_CURRENT_COMPANY(state, company);
    });

    it("updates the state to company", () => {
      expect(state.currentCompany).toEqual(company);
    });
  });

  describe(".ADD_COMPANY", () => {
    let state = { companies: [] },
      company = "b";
    beforeAll(() => {
      mutations.ADD_COMPANY(state, company);
    });

    it("updates the state of companies", () => {
      expect(state.companies).toEqual([company]);
    });
  });

  describe(".UPDATE_COMPANY", () => {
    let state = { companies: [{ id: 0, name: "a" }] },
      company = { id: 0, name: 'b' };
    beforeAll(() => {
      mutations.UPDATE_COMPANY(state, company);
    });

    it("updates the state of company", () => {
      expect(state.companies[0]).toEqual(company);
    });
  });
  describe(".DELETE_COMPANY", () => {
    let state = { companies: [{ id: 0, name: "a" }] },
      company = { id: 0 };
    beforeAll(() => {
      mutations.DELETE_COMPANY(state, company);
    });

    it("removes the company from companies", () => {
      expect(state.companies.length).toEqual(0);
    });
  });
});
