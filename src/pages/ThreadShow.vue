<template>
 <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts"/>

  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';

export default {
  name: 'ThreadShow',
  components: {
    PostList,
  },
  props: {
    id: {
      required: true,
      type: String,
    }
  },
  data () {
    return {
      newPostText: '',
    }
  },
  computed: {
    threads() {
      return this.$store.state.threads;
    },
    posts() {
      return this.$store.state.posts;
    },
    thread() {
      return this.threads.find(thread => thread.id === this.id);
    },
    threadPosts() {
      return this.posts.filter(post => post.threadId === this.id);
    }
  },
  methods: {
    addPost() {
      const postId = 'qqcc' + Math.random();
      const post = {
        id: postId,
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2',
      }
      this.thread.posts.push(postId);
      this.newPostText = '';
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
