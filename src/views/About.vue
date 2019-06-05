<template>
  <div>
    <nav>
      <h1>My Title</h1>
    </nav>
    <header> <h2>My Header</h2> </header>
    <Test/>
  </div>
</template>

<script>
  import Test from '@/components/Test'
export default {
  components: { Test }
}
</script>

<style lang="scss" scoped>
nav {
  height: 12rem;
  background: purple;
}

header {
  height: 10rem;
  background: darkblue;
}
</style>

