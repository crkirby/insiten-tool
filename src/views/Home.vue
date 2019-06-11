<template>
  <div>
    <nav>
      <h1 class="heading-title--xlg">Welcome to MergElite</h1>
    </nav>
    <Companies />
  </div>
</template>

<script>
import Companies from "@/components/Companies";
export default {
  name: "Home",
  components: { Companies }
};
</script>

<style lang="scss" scoped>
nav {
  height: 16rem;
  margin-bottom: 2rem;
  background: #084c61;
  color: whitesmoke;
  text-align: center;
}

.heading-title {
  font-size: 1.2rem;
  &--xlg {
    font-size: 5.6rem;
  }
}
</style>
