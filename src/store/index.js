import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import getters from "./getters";
import faker from 'faker';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentCompany: {},
    companies: [
      {
        id: 1,
        name: faker.company.companyName(),
        dateCreated: faker.date.past(0, new Date().toJSON()).toLocaleDateString(),
        state: `${faker.address.cityPrefix()}${faker.address.citySuffix()}, ${faker.address.stateAbbr()}` ,
        grossRevenue: faker.random.number({ min: 10000, max: 1e8 }),
        address: `${faker.address.streetAddress()}`,
        phoneNumber: faker.phone.phoneNumber('(###)-###-####'),
        website: faker.internet.url(),
        emps: faker.random.number({ min: 10, max: 700 }),
        type: faker.name.jobArea(),
        comparableGrowth: faker.random.arrayElement([0, faker.finance.amount(-1 * faker.random.number({ max: 100}), faker.random.number({ max: 100 }), 2)]),
        status: faker.random.arrayElement(["Researching", "Declined", "Pending", "Approved"]),
        keyContacts: [
          { id: faker.random.uuid(), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() }
        ]
      },
      {
        id: 2,
        name: faker.company.companyName(),
        dateCreated: faker.date.past(0, new Date().toJSON()).toLocaleDateString(),
        state: `${faker.address.city()}, ${faker.address.stateAbbr()}` ,
        grossRevenue: faker.random.number({ min: 10000, max: 1e7 }),
        address: `${faker.address.streetAddress()}`,
        phoneNumber: faker.phone.phoneNumber('(###)-###-####'),
        website: faker.internet.url(),
        emps: faker.random.number({ min: 90, max: 1000 }),
        type: faker.name.jobArea(),
        comparableGrowth: faker.random.arrayElement([0, faker.finance.amount(-1 * faker.random.number({ max: 100}), faker.random.number({ max: 100 }), 2)]),
        status: faker.random.arrayElement(["Researching", "Declined", "Pending", "Approved"]),
        keyContacts: [
          { id: faker.random.number({ min: 30, max: 45 }), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
          { id: faker.random.number({min: 10, max: 20}), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
          { id: faker.random.number({min: 10, max: 20}), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
          { id: faker.random.number({min: 10, max: 20}), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() }
        ]
      },
      {
        id: 3,
        name: faker.company.companyName(),
        dateCreated: faker.date.past(0, new Date().toJSON()).toLocaleDateString(),
        state: `${faker.address.city()}, ${faker.address.stateAbbr()}` ,
        grossRevenue: faker.random.number({ min: 10000, max: 1e8 }),
        address: `${faker.address.streetAddress()}`,
        phoneNumber: faker.phone.phoneNumber('(###)-###-####'),
        website: faker.internet.url(),
        emps: faker.random.number({ min: 100, max: 500 }),
        type: faker.name.jobArea(),
        comparableGrowth: faker.random.arrayElement([0, faker.finance.amount(-1 * faker.random.number({ max: 100}), faker.random.number({ max: 100 }), 2)]),
        status: faker.random.arrayElement(["Researching", "Declined", "Pending", "Approved"]),
        keyContacts: [
          { id: faker.random.number({ min: 5, max: 15 }), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
          { id: faker.random.number({min:20, max: 30}), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
        ]
      },
      {
        id: 4,
        name: faker.company.companyName(),
        dateCreated: faker.date.past(0, new Date().toJSON()).toLocaleDateString(),
        state: `${faker.address.city()}, ${faker.address.stateAbbr()}` ,
        grossRevenue: faker.random.number({ min: 10000, max: 1e7 }),
        address: `${faker.address.streetAddress()}`,
        phoneNumber: faker.phone.phoneNumber('(###)-###-####'),
        website: faker.internet.url(),
        emps: faker.random.number({ min: 200, max: 1000 }),
        type: faker.name.jobArea(),
        comparableGrowth: faker.random.arrayElement([0, faker.finance.amount(-1 * faker.random.number({ max: 100}), faker.random.number({ max: 100 }), 2)]),
        status: faker.random.arrayElement(["Researching", "Declined", "Pending", "Approved"]),
        keyContacts: [
          { id: faker.random.number({ min: 30, max: 45 }), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
          { id: faker.random.number({min: 10, max: 20}), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
        ]
      },
      {
        id: 5,
        name: faker.company.companyName(),
        dateCreated: faker.date.past(0, new Date().toJSON()).toLocaleDateString(),
        state: `${faker.address.city()}, ${faker.address.stateAbbr()}` ,
        grossRevenue: faker.random.number({ min: 10000, max: 1e7 }),
        address: `${faker.address.streetAddress()}`,
        phoneNumber: faker.phone.phoneNumber('(###)-###-####'),
        website: faker.internet.url(),
        emps: faker.random.number({ min: 20, max: 1000 }),
        type: faker.name.jobArea(),
        comparableGrowth: faker.random.arrayElement([0, faker.finance.amount(-1 * faker.random.number({ max: 100}), faker.random.number({ max: 100 }), 2)]),
        status: faker.random.arrayElement(["Researching", "Declined", "Pending", "Approved"]),
        keyContacts: [
          { id: faker.random.number({ min: 30, max: 45 }), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
          { id: faker.random.number({min: 10, max: 20}), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
        ]
      },
      {
        id: 6,
        name: faker.company.companyName(),
        dateCreated: faker.date.past(0, new Date().toJSON()).toLocaleDateString(),
        state: `${faker.address.city()}, ${faker.address.stateAbbr()}` ,
        grossRevenue: faker.random.number({ min: 10000, max: 1e9 }),
        address: `${faker.address.streetAddress()}`,
        phoneNumber: faker.phone.phoneNumber('(###)-###-####'),
        website: faker.internet.url(),
        emps: faker.random.number({ min: 20, max: 1000 }),
        type: faker.name.jobArea(),
        comparableGrowth: faker.random.arrayElement([0, faker.finance.amount(-1 * faker.random.number({ max: 100}), faker.random.number({ max: 100 }), 2)]),
        status: faker.random.arrayElement(["Researching", "Declined", "Pending", "Approved"]),
        keyContacts: [
          { id: faker.random.number({ min: 30, max: 45 }), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
          { id: faker.random.number({min: 10, max: 20}), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
        ]
      },
      {
        id: 8,
        name: faker.company.companyName(),
        dateCreated: faker.date.past(0, new Date().toJSON()).toLocaleDateString(),
        state: `${faker.address.city()}, ${faker.address.stateAbbr()}` ,
        grossRevenue: faker.random.number({ min: 10000, max: 1e8 }),
        address: `${faker.address.streetAddress()}`,
        phoneNumber: faker.phone.phoneNumber('(###)-###-####'),
        website: faker.internet.url(),
        emps: faker.random.number({ min: 20, max: 1000 }),
        type: faker.name.jobArea(),
        comparableGrowth: faker.random.arrayElement([0, faker.finance.amount(-1 * faker.random.number({ max: 100}), faker.random.number({ max: 100 }), 2)]),
        status: faker.random.arrayElement(["Researching", "Declined", "Pending", "Approved"]),
        keyContacts: [
          { id: faker.random.number({ min: 30, max: 45 }), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
          { id: faker.random.number({min: 10, max: 20}), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
        ]
      }
    ]
  },
  mutations,
  getters
});
