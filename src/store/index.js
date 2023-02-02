import { createStore } from 'vuex';

export default createStore({
  state: this.$store.state,
  actions: {
    createPost(context, post) {
      this.posts.push(post);
    }
  }
});
