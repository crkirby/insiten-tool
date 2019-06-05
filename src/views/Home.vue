<template>
  <div> 
    <Header />
    <Companies class="container"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Companies from "@/components/Companies.vue";
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    Companies,
    Header
  }
};
</script>

<style lang="scss" scoped>

</style>

