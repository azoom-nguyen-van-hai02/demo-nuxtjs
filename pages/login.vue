<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

definePageMeta({
  title: 'Login',
  description: 'Login page',
  // middleware: (...context) => {
  //   const isLogin = Boolean(useAuthStore().token)

  //   if (isLogin) {
  //     return navigateTo('/')
  //   }
  // }
})
const email = ref('')
const password = ref('')

const login = () => {
  useAuthStore().login()
  navigateTo('/')
}
</script>

<template>
  <div class="login-page w-full">
    <!-- Generate login page using vuetify with login form -->
    <v-container class="w-full flex justify-center align-center">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-card-title>
              <h2>Login</h2>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  label="Email"
                  outlined
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Password"
                  outlined
                  required
                  type="password"
                ></v-text-field>
                <v-btn
                  @click="login"
                  color="primary"
                  block
                >
                  Login
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>

</style>
