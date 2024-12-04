<script setup lang="ts">

</script>

<template>
  <div>
    <h1>Create User</h1>
    <!-- define simple demo create user form with multiple steps -->
     <!-- using vuetify demo create user page -->
    <form>
      <div>
        <label for="name">Name</label>
        <v-text-field type="text" id="name" name="name" />
      </div>
      <div>
        <label for="email">Email</label>
        <v-text-field type="email" id="email" name="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <v-text-field type="password" id="password" name="password" />
      </div>
      <div class="flex gap-2">
        <v-btn type="submit">Create User</v-btn>
        
        <v-btn
          @click="navigateTo('/users?contractId=1')"
        >back to users</v-btn>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>

</style>
