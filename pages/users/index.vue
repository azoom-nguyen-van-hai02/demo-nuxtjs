<script setup lang="ts">
definePageMeta({
  title: 'Users',
  description: 'List of users',
  middleware: 'demo-middleware'
})
</script>

<template>
  <div>
    <h1>Users</h1>
    <!-- define simple demo user list -->
    <ul>
      <li>
        <nuxt-link to="/users/1">User 1</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users/2">User 2</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users/3">User 3</nuxt-link>
      </li>
    </ul>
    <!-- Create user navigate button -->
     
    <v-btn
      @click="navigateTo('/users/create')"
    >Create User</v-btn>
  </div>
</template>

<style lang="scss" scoped>

</style>
