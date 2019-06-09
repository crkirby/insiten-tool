import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentCompany: {},
    companies: [
      {
        id:1,
        name: "Company A",
        dateCreated: new Date().toLocaleDateString(),
        state: "City, State",
        grossRevenue: 1000000,
        address: "123 abc rd",
        phoneNumber: "123-123-1234",
        website: "www.abc.com",
        emps: 4,
        type: "string",
        comparableGrowth: -0.1,
        status: "Declined",
        keyContacts: [{ id:8733, name: "juan", number: "233-323-4343", title: "CEO" }, { id:7421, name: "gina", number: "233-323-4343", title: "VP of Sales" }]
      },
      {
        id:2,
        name: "Company B",
        dateCreated: new Date().toLocaleDateString(),
        state: "City, State",
        grossRevenue: 2000000,
        address: "123 abc rd",
        phoneNumber: "123-123-1234",
        website: "www.abc.com",
        emps: 4,
        type: "string",
        comparableGrowth: 0.1,
        status: "Approved",
        keyContacts: [{ id:8374, name: "alex", number: "233-323-4343", title: "CEO" },{ id:8322, name: "paul", number: "233-323-4343", title: "CEO" }, { id:6677, name: "alex", number: "233-323-4343", title: "CEO" }, { id:1122, name: "dylan", number: "635-973-1132", title: "Head Secretary" }]
      },
      {
        id:3,
        name: "Company C",
        dateCreated: new Date().toLocaleDateString(),
        state: "City, State",
        grossRevenue: 3000000,
        address: "123 abc rd",
        phoneNumber: "123-123-1234",
        website: "www.abc.com",
        emps: 4,
        type: "string",
        comparableGrowth: 1.0123,
        status: "Approved",
        keyContacts: [{ id:93, name: "shawn", number: "233-323-4343", title: "CEO" }]
      },
      {
        id:4,
        name: "Company D",
        dateCreated: new Date().toLocaleDateString(),
        state: "City, State",
        grossRevenue: 3000000,
        address: "123 abc rd",
        phoneNumber: "123-123-1234",
        website: "www.abc.com",
        emps: 4,
        type: "string",
        comparableGrowth: -0.01,
        status: "Declined",
        keyContacts: [{ id: 73, name: "charlotte", number: "233-323-4343", title: "CEO" }]
      },
      {
        id:5,
        name: "Company E",
        dateCreated: new Date().toLocaleDateString(),
        state: "City, State",
        grossRevenue: 2000000,
        address: "123 abc rd",
        phoneNumber: "123-123-1234",
        website: "www.abc.com",
        emps: 4,
        type: "string",
        comparableGrowth: 0,
        status: "Declined",
        keyContacts: [{ id:893, name: "derrick", number: "233-323-4343", title: "CEO" }]
      },
      {
        id:6,
        name: "Company F",
        dateCreated: new Date().toLocaleDateString(),
        state: "City, State",
        grossRevenue: 2000000,
        address: "123 abc rd",
        phoneNumber: "123-123-1234",
        website: "www.abc.com",
        emps: 4,
        type: "string",
        comparableGrowth: -0.013,
        status: "Declined",
        keyContacts: [{ id:234, name: "ruth", number: "233-323-4343", title: "CEO" }]
      },
      {
        id: 8,
        name: "Company G",
        dateCreated: new Date().toLocaleDateString(),
        state: "City, State",
        grossRevenue: 3000000,
        address: "123 abc rd",
        phoneNumber: "123-123-1234",
        website: "www.abc.com",
        emps: 4,
        type: "string",
        comparableGrowth: 0.1,
        status: "Pending",
        keyContacts: [
          { id: 123, name: "stephanie", number: "233-323-4343", title: "CEO" }
        ]
      }
    ]
  },
  mutations,
  getters
});
