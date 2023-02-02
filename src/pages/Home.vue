<template>
  <h1>Welcome to the forum</h1>
  <category-list :categories="categories"/>
</template>

<script>
import CategoryList from '@/components/CategoryList.vue';

export default {
  name: 'Home-page',
  components: {
    CategoryList,
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    }
  }
}
</script>

<style scoped>
</style>
