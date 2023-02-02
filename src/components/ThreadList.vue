<template>
  <div class="col-full push-top">
    <ul class="breadcrumbs">
      <li>
        <router-link :to="{ name: 'Home-page' }"><i class="fa fa-home fa-btn"></i>Home</router-link>
      </li>
      <li><a href="#">Discussions</a></li>
      <li class="active"><a href="#">Cooking</a></li>
    </ul>
    <div class="forum-header">
      <div class="forum-details">
        <h1>Cooking</h1>
          <p class="text-lead">Discuss your passion for food and cooking</p>
      </div>
      <a href="#" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full">
    <div class="category-item">
      <div class="forum-list">
        <h2 class="list-title">Recipes</h2>
        <div class="forum-listing">
          <div class="forum-details">
            <a href="#" class="forum-name">Recipes</a>
            <p class="forum-description ">Recipes, Guides and Tips & Tricks</p>
          </div>
          <div class="threads-count">
            <p class="count text-lead">1</p> threads
          </div>
          <div class="last-thread">
            <img class="avatar" src="http://cleaneatsfastfeets.com/wp-content/uploads/2013/05/Mr-Burns.gif" alt="">
            <div class="last-thread-details">
              <a href="#">How I grill my fish</a>
              <p class="text-xsmall">By <a href="profile.html">Charles Montgomery Burns</a>, 2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
        <div v-for="thread in threads" :key="thread.id" class="thread">
          <div>
            <p>
              <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">{{ thread.title }}</router-link>
            </p>
            <p class="text-faded text-xsmall">
              By <a href="#">{{ userById(thread.userId).name }}</a>, <app-date :timestamp="thread.publishedAt"/>
            </p>
          </div>
          <div class="activity">
            <p class="replies-count">
              {{ thread.posts.length }} replies
            </p>
            <img class="avatar-medium"
                 :src="userById(thread.userId).avatar"
                 alt="">
            <div>
              <p class="text-xsmall">
                <a href="#">{{ userById(thread.userId).name }}</a>
              </p>
              <p class="text-xsmall text-faded">
                <app-date :timestamp="thread.publishedAt"/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>

export default {
  name: 'ThreadList',
  components: {
  },
  props: {
    threads: {
      required: true,
      type: Array,
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    postById(postId) {
      return this.posts.find(p => p.id === postId);
    },
    userById(userId) {
      return this.users.find(u => u.id === userId);
    }
  }
}
</script>

<style scoped>
</style>
