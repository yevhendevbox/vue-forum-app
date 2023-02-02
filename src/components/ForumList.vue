<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
          <router-link
            v-if="categoryId"
            :to="{ name: 'CategoryShow', params: { id: categoryId } }"
            >{{ title }}</router-link>
          <span v-else>{{ title }}</span>
      </h2>
      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <router-link
            class="text-xlarge"
            :to="{ name: 'Forum-page', params: {id: forum.id} }"
            >
            {{ forum.name }}
          </router-link>
          <p>{{ forum.description }}</p>
        </div>
        <div class="threads-count">
          <p class="count">{{ forum.threads?.length }}</p> {{ forumsDisplayWord(forum) }}
        </div>
        <div class="last-thread">
          <!-- <img class="avatar" src="https://i.imgur.com/WPSrfGm.jpg" alt="">
          <div class="last-thread-details">
            <a href="thread.html">What is the best animal joke y...</a>
            <p class="text-xsmall">By <a href="profile.html">Blossom</a>, 16 hours ago</p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forums: {
      required: true,
      type: Array,
    },
    title: {
      default: 'Forums',
      type: String,
    },
    categoryId: {
      required: false,
      type: String,
    },
  },
  methods: {
    forumsDisplayWord(forum) {
      if (!forum.threads?.length) {
        return 'no threads';
      }
      return forum.threads.length > 1 ? 'threads' : 'thread';
    }
  },

}
</script>
<style scoped>
</style>
