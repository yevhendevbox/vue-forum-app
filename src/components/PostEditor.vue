<template>
  <div class="col-full">
      <form @submit.prevent="addPost">
          <div class="form-group">
            <label for="thread_title">Title:</label>
            <input type="text" id="thread_title" class="form-input" name="title" >
          </div>
          <div class="form-group">
            <label for="thread_content">Content:</label>
            <textarea v-model="newPostText" id="thread_content" class="form-input" name="content" rows="8" cols="140"></textarea>
          </div>
          <div class="form-actions">
            <button class="btn btn-ghost">Cancel</button>
            <button class="btn btn-blue" type="submit" name="Publish">Publish </button>
          </div>
      </form>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
