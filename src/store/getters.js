const getters = {
  getCompanies: state => {
    return state.companies;
  },
  getCurrentCompany: state => {
    return state.currentCompany;
  }
}

export default getters;
