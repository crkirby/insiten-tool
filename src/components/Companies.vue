<template>
  <div class="container">
    <div v-for="(company, idx) in companies" :key="idx">
      <Company :class="`item item--${idx}`" :company="company" />
    </div>
    
  </div>
</template>

<script>
import Company from '@/components/Company'

export default {
  components: { Company },
  name: "Companies",
  mounted: function () {
    console.log('fetching products from API')
  },
  data: function () {
    return {
      companies: [
        { name: 'CompA', dateCreated: new Date().toLocaleDateString(), state: 'GA', grossRevenue:1000000, address: '123 abc rd', phoneNumber: '123-123-1234', website:'www.abc.com', emps: 4, type: 'string', comparableGrowth: 0.1, status: 'Pending', keyContacts: [{name: 'bob', number:'233-323-4343', title:'CEO'}] },
        { name: 'CompA', dateCreated: new Date().toLocaleDateString(), state: 'GA', grossRevenue:2000000, address: '123 abc rd', phoneNumber: '123-123-1234', website:'www.abc.com', emps: 4, type: 'string', comparableGrowth: 0.1, status: 'Pending', keyContacts: [{name: 'bob', number:'233-323-4343', title:'CEO'}] },
        { name: 'CompA', dateCreated: new Date().toLocaleDateString(), state: 'GA', grossRevenue:3000000, address: '123 abc rd', phoneNumber: '123-123-1234', website:'www.abc.com', emps: 4, type: 'string', comparableGrowth: 0.1, status: 'Pending', keyContacts: [{name: 'bob', number:'233-323-4343', title:'CEO'}] },
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.container {
  display: grid;
  // background: #eee;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: 0.35fr repeat(6, 1fr) 1fr;
  grid-row-gap: 10px;
  // grid-column-gap: 25px;
  padding: 5px;
  margin: 5px 0px 25px 0px;
  box-shadow: 2px 2px 2px lightgrey;
}
.item {
  align-content: center;
  font-size: 1.5rem;
  
  &:not(.item--1) {
    padding-top: 35px;
    padding-bottom: 45px;
  }
  
  &--0 {
    justify-self: end;
    margin-right: 15px;
    width:12%;
  }
  &--1 {
    background: red;
    justify-self: end;
    margin-right:15px;
    width:12%;
  }
  
  &--8 {
    width:75%;
    background: red;
    box-shadow: 4px 4px 4px lightgrey;
    color: white;

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


/*
<div class="container">
  <div class="item item--0"></div>
  <div class="item item--2">Name</div>
  <div class="item item--3">State</div>
  <div class="item item--4">Date Created</div>
  <div class="item item--5">Gross</div>
  <div class="item item--6">Status</div>
  <div class="item item--7">Employees</div>
  <div class="item item--9">Actions</div>
  
  <div class="item item--1"></div>
   <div class="item item--2">2</div>
  <div class="item item--3">3</div>
  <div class="item item--4">4</div>
   <div class="item item--5">5</div>
   <div class="item item--6">6</div>
   <div class="item item--7">7</div>
  <button class="item item--8">Edit</button>
 
    <div class="item item--1"></div>
   <div class="item item--2">2</div>
  <div class="item item--3">3</div>
  <div class="item item--4">4</div>
   <div class="item item--5">5</div>
   <div class="item item--6">6</div>
   <div class="item item--7">7</div>
  <button class="item item--8">Edit</button>
  
    <div class="item item--1"></div>
   <div class="item item--2">2</div>
  <div class="item item--3">3</div>
  <div class="item item--4">4</div>
   <div class="item item--5">5</div>
   <div class="item item--6">6</div>
   <div class="item item--7">7</div>
   <button class="item item--8">Edit</button>
  
   <div class="item item--1"></div>
   <div class="item item--2">2</div>
  <div class="item item--3">3</div>
  <div class="item item--4">4</div>
   <div class="item item--5">5</div>
   <div class="item item--6">6</div>
   <div class="item item--7">7</div>
   <button class="item item--8">Edit</button>
</div>

.container {
  display: grid;
  // background: #eee;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: 0.35fr repeat(6, 1fr) 1fr;
  grid-row-gap: 10px;
  // grid-column-gap: 25px;
  padding: 25px;
  margin: 5px 0px 25px 0px;
  box-shadow: 2px 2px 2px lightgrey;
}

.item {
  align-content: center;
  
  &:not(.item--1) {
    padding-top: 35px;
    padding-bottom: 45px;
    // border-bottom: 1px solid lightgray;
  }
  
  &--0 {
    justify-self: end;
    margin-right: 15px;
    width:12%;
  }
  &--1 {
    background: red;
    justify-self: end;
    margin-right:15px;
    width:12%;
  }
  
  &--8 {
    width:75%;
    background: red;
    box-shadow: 4px 4px 4px lightgrey;
    color: white;
  }
  
  &--9 {
    justify-self: center;
    margin-right: 40px;
  }
}
 */
