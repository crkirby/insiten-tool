import getters from "@/store/getters";

describe("Getters", () => {
  describe(".getCompanies", () => {
    const companies = []
    let result, state = { companies }
    beforeAll(() => {
      result = getters.getCompanies(state)
    });

    it("returns the state", () => {
      expect(result).toEqual(companies);
    });
  });

  describe(".getCurrentCompany", () => {
    const currentCompany = {}
    let result, state = { currentCompany }
    beforeAll(() => {
      result = getters.getCurrentCompany(state)
    });

    it("returns the state", () => {
      expect(result).toEqual(currentCompany);
    });
  });

});
