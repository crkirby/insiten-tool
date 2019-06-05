<template>
  <nav>
    <a href="/html/">HTML</a> |
    <a href="/css/">CSS</a> |
    <a href="/js/">JavaScript</a> |
    <a href="/jquery/">jQuery</a>
  </nav>
</template>

<script>
export default {
  name: 'Header',

}
</script>

<style lang="scss" scoped>
//variables
$color-red: red;
$color-green: green;

nav {
  color: $color-green; 

  a {
    color: $color-red;
  }
} 
</style>


