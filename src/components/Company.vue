<template>
  <fragment>
    <div class="item item--1"></div>
    <div class="item item--2">2</div>
    <div class="item item--3">3</div>
    <div class="item item--4">4</div>
    <div class="item item--5">5</div>
    <div class="item item--6">6</div>
    <div class="item item--7">7</div>
    <button class="item item--8">Edit</button>
  </fragment>
</template>

<script>
export default {
  name: "Company",
  mounted: function () {
  },
  props: ['company'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
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
