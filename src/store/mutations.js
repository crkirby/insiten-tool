const mutations = {
  SET_CURRENT_COMPANY: (state, company) => {
    state.currentCompany = company;
  },
  DELETE_COMPANY: (state, { id }) => {
    const companies = state.companies.slice();
    const companyIndex = companies.findIndex(company => company.id === id);
    companyIndex > -1 && companies.splice(companyIndex, 1);
    state.companies = companies;
  },
  UPDATE_COMPANY: (state, company) => {
    const companies = state.companies.slice();
    const companyIndex = companies.findIndex(({ id }) => company.id === id);
    companyIndex > -1 && companies.splice(companyIndex, 1, company);
    state.companies = companies;
  }
};

export default mutations;
