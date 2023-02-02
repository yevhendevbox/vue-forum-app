<template>
  <forum-list
    v-for="category in categories"
    :key="category.id"
    :forums="getFourumsForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<script>
import ForumList from '@/components/ForumList.vue';

export default {
  components: {
    ForumList,
  },
  props: {
    categories: {
      required: true,
      type: Array,
    }
  },
  methods: {
    getFourumsForCategory(category) {
      return this.$store.state.forums.filter(forum => forum.categoryId === category.id);
    }
  },
}
</script>

<style scoped>
</style>
