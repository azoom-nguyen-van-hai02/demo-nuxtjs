<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

const logout = () => {
  useAuthStore().logout()

  navigateTo('/login')
}
const hasLogin = computed(() => {
  return Boolean(useAuthStore().token)
})
</script>

<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Chill Guy 

      <!-- define logo -->
      <v-avatar>
        <v-img src="https://i.redd.it/fypklk30az1e1.jpeg" />
      </v-avatar>
    </v-app-bar-title>
     <!-- define nav bar with menu including homepage and profile page -->
    <v-btn
      @click="navigateTo('/')"
    >Home</v-btn>
    <v-btn
      @click="navigateTo('/profile')"
    >Profile</v-btn>
    <v-btn
      @click="navigateTo('/products')"
    >Products</v-btn>
    <v-btn
      @click="navigateTo('/users?contractId=1')"
    >Users</v-btn>
    <v-btn
      v-if="hasLogin"
      @click="logout"
      color="error"
    >Log out</v-btn>
    <v-btn
      v-else
      color="primary"
      @click="navigateTo('/login')"
    >Login</v-btn>
    
  </v-app-bar>
</template>

<style lang="scss" scoped>

</style>
