<template>
 <div class="targets">
   <fragment v-for="company in companies" :key="company.id">
      <div class="target">
        <h5 class="target__name">{{ company.name }}</h5>
        <div class="target__location">
          <img :src="buildingImg" />
          <span>{{ company.state }}</span>
        </div>
        <div class="target__employees">
          <img :src="empImg" />
          <span>{{ company.emps }}</span>
        </div>
        <div class="target__gross">
          <img :src="grossImg" />
          <span>{{ company.grossRevenue | toFiat }}</span>
        </div>
        <div class="target__type">
          <img :src="typeImg" />
          <span>{{ company.type }}</span>
        </div>
        <button class="target__btn" @click="requestMerger(company)" type="button">Request Merger</button>
      </div>
   </fragment>
   <div v-if="lastRequested" class="request">
    <button @click="hideReminder()" class="btn--close" style="float:right">X</button>
    <p class="request--message">{{ lastRequested.name }} has been added to your <router-link class="to-dashboard" to="/dashboard">Dashboard</router-link></p>
  </div>

</div> 
</template>

<script>
import { mapMutations } from 'vuex'
import faker from 'faker'
import employee from '@/assets/employee.png'
import buidling from '@/assets/building.png'
import gross from '@/assets/gross.png'
import niche from '@/assets/niche.png'

export default {
  name:'Companies',
  computed: {
    typeImg: function () {
      return niche
    },
    grossImg: function () {
      return gross
    },
    buildingImg: function () {
      return buidling
    },
    empImg: function () {
      return employee
    }
  },
  data: function() {
    return {
      lastRequested: null,
      companies: [
        {
        id: faker.random.number({ min:80, max:90 }),
        name: faker.company.companyName() ,
        dateCreated: new Date().toLocaleDateString(),
        state: `${faker.address.city()}, ${faker.address.stateAbbr()}` ,
        grossRevenue: faker.random.number({ min: 10000, max: 1e7 }),
        address: `${faker.address.streetAddress()}`,
        phoneNumber: faker.phone.phoneNumber('(###)-###-####'),
        website: faker.internet.url(),
        emps: faker.random.number({ min: 200, max: 1000 }),
        type: faker.name.jobArea(),
        comparableGrowth: faker.random.arrayElement([0, faker.finance.amount(-1 * faker.random.number({ max: 100}), faker.random.number({ max: 100 }), 2)]),
        status: "Pending",
        keyContacts: [
          { id: faker.random.number({ min: 30, max: 45 }), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
          { id: faker.random.number({min: 10, max: 20}), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
        ]
        },
        {
          id: faker.random.number({ min:56, max:68 }),
        name: faker.company.companyName() ,
        dateCreated: new Date().toLocaleDateString(),
        state: `${faker.address.city()}, ${faker.address.stateAbbr()}` ,
        grossRevenue: faker.random.number({ min: 10000, max: 1e7 }),
        address: `${faker.address.streetAddress()}`,
        phoneNumber: faker.phone.phoneNumber('(###)-###-####'),
        website: faker.internet.url(),
        emps: faker.random.number({ min: 200, max: 1000 }),
        type: faker.name.jobArea(),
        comparableGrowth: faker.random.arrayElement([0, faker.finance.amount(-1 * faker.random.number({ max: 100}), faker.random.number({ max: 100 }), 2)]),
        status: "Pending",
        keyContacts: [
          { id: faker.random.number({ min: 30, max: 45 }), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
          { id: faker.random.number({min: 10, max: 20}), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
        ]
        },{
          id: faker.random.number({ min:40, max:46 }),
        name: faker.company.companyName() ,
        dateCreated: new Date().toLocaleDateString(),
        state: `${faker.address.city()}, ${faker.address.stateAbbr()}` ,
        grossRevenue: faker.random.number({ min: 10000, max: 1e7 }),
        address: `${faker.address.streetAddress()}`,
        phoneNumber: faker.phone.phoneNumber('(###)-###-####'),
        website: faker.internet.url(),
        emps: faker.random.number({ min: 200, max: 1000 }),
        type: faker.name.jobArea(),
        comparableGrowth: faker.random.arrayElement([0, faker.finance.amount(-1 * faker.random.number({ max: 100}), faker.random.number({ max: 100 }), 2)]),
        status: "Pending",
        keyContacts: [
          { id: faker.random.number({ min: 30, max: 45 }), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
          { id: faker.random.number({min: 10, max: 20}), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
        ]
        },{
          id: faker.random.number({ min:30, max:35 }),
        name: faker.company.companyName() ,
        dateCreated: new Date().toLocaleDateString(),
        state: `${faker.address.city()}, ${faker.address.stateAbbr()}` ,
        grossRevenue: faker.random.number({ min: 10000, max: 1e7 }),
        address: `${faker.address.streetAddress()}`,
        phoneNumber: faker.phone.phoneNumber('(###)-###-####'),
        website: faker.internet.url(),
        emps: faker.random.number({ min: 200, max: 1000 }),
        type: faker.name.jobArea(),
        comparableGrowth: faker.random.arrayElement([0, faker.finance.amount(-1 * faker.random.number({ max: 100}), faker.random.number({ max: 100 }), 2)]),
        status: "Pending",
        keyContacts: [
          { id: faker.random.number({ min: 30, max: 45 }), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
          { id: faker.random.number({min: 10, max: 20}), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
        ]
        },{
          id: faker.random.number({ min: 10, max: 20 }),
        name: faker.company.companyName() ,
        dateCreated: new Date().toLocaleDateString(),
        state: `${faker.address.city()}, ${faker.address.stateAbbr()}` ,
        grossRevenue: faker.random.number({ min: 10000, max: 1e7 }),
        address: `${faker.address.streetAddress()}`,
        phoneNumber: faker.phone.phoneNumber('(###)-###-####'),
        website: faker.internet.url(),
        emps: faker.random.number({ min: 200, max: 1000 }),
        type: faker.name.jobArea(),
        comparableGrowth: faker.random.arrayElement([0, faker.finance.amount(-1 * faker.random.number({ max: 100}), faker.random.number({ max: 100 }), 2)]),
        status: "Pending",
        keyContacts: [
          { id: faker.random.number({ min: 30, max: 45 }), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
          { id: faker.random.number({min: 10, max: 20}), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
        ]
        },{
          id: faker.random.number({ min:0, max:8 }),
        name: faker.company.companyName() ,
        dateCreated: new Date().toLocaleDateString(),
        state: `${faker.address.city()}, ${faker.address.stateAbbr()}` ,
        grossRevenue: faker.random.number({ min: 10000, max: 1e7 }),
        address: `${faker.address.streetAddress()}`,
        phoneNumber: faker.phone.phoneNumber('(###)-###-####'),
        website: faker.internet.url(),
        emps: faker.random.number({ min: 200, max: 1000 }),
        type: faker.name.jobArea(),
        comparableGrowth: faker.random.arrayElement([0, faker.finance.amount(-1 * faker.random.number({ max: 100}), faker.random.number({ max: 100 }), 2)]),
        status: "Pending",
        keyContacts: [
          { id: faker.random.number({ min: 30, max: 45 }), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
          { id: faker.random.number({min: 10, max: 20}), name: faker.name.findName(faker.name.firstName(), faker.name.lastName()), number: faker.phone.phoneNumber('(###)-###-####'), title: faker.name.jobTitle() },
        ]
        }
        ]
    }
  },
  methods: {
    ...mapMutations(['ADD_COMPANY']),
    requestMerger: function (company) {
      const removeRequest = this.companies.findIndex(c => c.id === company.id)
      this.companies.splice(removeRequest, 1)
      this.ADD_COMPANY(company)
      this.lastRequested = company
    },
    hideReminder: function () {
      this.lastRequested = null
    }
  }
}
</script>

<style lang="scss" scoped>
.targets {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2rem; 
}
.target {
  flex: 0 0 42%;
  height: 20rem;
  margin: 2rem 1rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  &__name {
    grid-column: 1/-1;
    width: 100%;
    height: 60%;
    justify-self: center;
    font-size: 2rem;
    text-align: center;
    background: #084c61;
    font-weight: 400;
    padding: 1.25rem;
    color: white;
  }

  &__location,
  &__gross,
  &__employees,
  &__type {
    justify-self: center;
    font-size: 1.9rem;
    font-weight: 400;

    img {
      position: relative;
      top: 10%;
      right: 10%;
    }
  }

  &__btn {
    grid-column: 1/-1;
    font-size: 1.6rem;
    color: #084c61;
    border-radius: .3rem;
    box-shadow: 0rem .2rem .4rem 0rem #084c61;
    transition: transform .3s;

    &:hover {
      transform: scale(1.02);
    }
  }
}

.request {
  overflow: hidden;
  background-color: #084c61;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;

  &--message {
    font-size: 1.8rem;
    padding: 2rem 2rem;

    & > * {
      font-size: inherit;
    }
  }
}

.btn--close {
  padding:1rem 2rem;
  margin: 1.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 400;
}
.to-dashboard {
  color: white;
}
</style>
