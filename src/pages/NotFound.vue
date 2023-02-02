<template>
  <div class="col-full text-center">
    <h1>Oops, the page doesn't found!</h1>
    <router-link :to="{ name: 'Home-page' }">Read some cool threads</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style scoped>
</style>
