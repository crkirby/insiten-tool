<template>
 <fragment> 
    <div class="container">
      <!-- <div class="item item--0"></div>
      <div class="item item--2">Name</div>
      <div class="item item--3">State</div>
      <div class="item item--4">Date Created</div>
      <div class="item item--5">Gross</div>
      <div class="item item--6">Status</div>
      <div class="item item--7">Employees</div>
      <div class="item item--9">Actions</div> -->
      <fragment v-for="(company, idx) in companies" :key="idx">
        <div :class="`company company--comparable company--comparable-${growth(company.comparableGrowth)}`"></div>
        <div class="company company--2">{{ company.name }}</div>
        <div class="company company--3">{{ company.state }}</div>
        <div class="company company--4">{{ company.dateCreated }}</div>
        <div class="company company--5">{{ company.grossRevenue }}</div>
        <div class="company company--6">{{ company.status }}</div>
        <div class="company company--7">{{ company.emps }}</div>
        <button class="company company--8">Edit</button>
      </fragment>
    </div>
  </fragment>
</template>

<script>
export default {
 name:'Test',
 methods: {
   growth: function (comparable) {
     if(comparable > 0) {
       return 'up'
     } else if (comparable === 0 ){
       return 'default'
     } else return 'down'
   }
 },
  data: function () {
    return {
      companies: [
        { name: 'CCompACompACompAompA', dateCreated: new Date().toLocaleDateString(), state: 'GA', grossRevenue:1000000, address: '123 abc rd', phoneNumber: '123-123-1234', website:'www.abc.com', emps: 4, type: 'string', comparableGrowth: -0.1, status: 'Declined', keyContacts: [{name: 'bob', number:'233-323-4343', title:'CEO'}] },
        { name: 'CompA', dateCreated: new Date().toLocaleDateString(), state: 'GA', grossRevenue:2000000, address: '123 abc rd', phoneNumber: '123-123-1234', website:'www.abc.com', emps: 4, type: 'string', comparableGrowth: 0.1, status: 'Approved', keyContacts: [{name: 'bob', number:'233-323-4343', title:'CEO'}] },
        { name: 'CompA', dateCreated: new Date().toLocaleDateString(), state: 'GA', grossRevenue:3000000, address: '123 abc rd', phoneNumber: '123-123-1234', website:'www.abc.com', emps: 4, type: 'string', comparableGrowth: 1.0123, status: 'Approved', keyContacts: [{name: 'bob', number:'233-323-4343', title:'CEO'}] },
        { name: 'CompA', dateCreated: new Date().toLocaleDateString(), state: 'GA', grossRevenue:3000000, address: '123 abc rd', phoneNumber: '123-123-1234', website:'www.abc.com', emps: 4, type: 'string', comparableGrowth: -0.01, status: 'Declined', keyContacts: [{name: 'bob', number:'233-323-4343', title:'CEO'}] },
        { name: 'CompA', dateCreated: new Date().toLocaleDateString(), state: 'GA', grossRevenue:2000000, address: '123 abc rd', phoneNumber: '123-123-1234', website:'www.abc.com', emps: 4, type: 'string', comparableGrowth: 0, status: 'Declined', keyContacts: [{name: 'bob', number:'233-323-4343', title:'CEO'}] },
        { name: 'CompA', dateCreated: new Date().toLocaleDateString(), state: 'GA', grossRevenue:2000000, address: '123 abc rd', phoneNumber: '123-123-1234', website:'www.abc.com', emps: 4, type: 'string', comparableGrowth: -0.013, status: 'Declined', keyContacts: [{name: 'bob', number:'233-323-4343', title:'CEO'}] },
        { name: 'CompA', dateCreated: new Date().toLocaleDateString(), state: 'GA', grossRevenue:3000000, address: '123 abc rd', phoneNumber: '123-123-1234', website:'www.abc.com', emps: 4, type: 'string', comparableGrowth: 0.1, status: 'Pending', keyContacts: [{name: 'bob', number:'233-323-4343', title:'CEO'}] },
      ]
    }
  }
}
</script>

<style lang="scss">

.container {
  padding: 15px;
  margin: 5px 0px 25px 0px;
  box-shadow: none;
  background: #eee;

  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: 0.35fr repeat(6, 1fr) 1fr;
  grid-row-gap: 10px;
  justify-items: center;
}

.company {
  font-size: 1.5rem;

  &:not(.company--comparable) {
    padding: 3.8rem 0;
    align-self: center;
  }
  
  &--0 {
    justify-self: end;
    margin-right: 15px;
    width:12%;
  }

  &--comparable {
    border-radius: 36px;
    margin-right:15px;
    width:12%;

    &-default {
      background: goldenrod;
    }

    &-down {
      background:red;
    }

    &-up {
      background:forestgreen;
    }
  }
  
  &--8 {
    width:75%;
    background: red;
    box-shadow: 4px 4px 4px lightgrey;
    color: white;
    justify-self: center;

    &:hover{
      transform: scale(1.03);
    }
  }
  
  &--9 {
    justify-self: center;
    margin-right: 40px;
  }
}
</style>
