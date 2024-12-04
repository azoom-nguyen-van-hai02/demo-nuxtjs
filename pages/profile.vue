<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

definePageMeta({
  title: 'Profile',
  description: 'Profile page',
  // middleware: (...context) => {
    
  //   if(!useAuthStore().$state.token){
  //     return navigateTo('/login')
  //   }
  // },
  middleware: ['auth']
})
</script>

<template>
  <div class="flex justify-center pt-10">
    <!-- define a simple profile page -->
    <!-- define title profile page -->
    <!-- define profile page with name, email, and phone number -->
    <div class="flex gap-4 mx-2">
      <v-card>
        <v-card-title class="w-full">
          <!-- define avatar with image -->
          <v-avatar >
            <v-img src="https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png" />
          </v-avatar>

        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Name</v-list-item-title>
                <v-list-item-subtitle>Naruto Chill Guy</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Email</v-list-item-title>
                <v-list-item-subtitle>
                  john.doe@example.com 
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Phone</v-list-item-title>
                <v-list-item-subtitle>
                  +1 234 567 890
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
