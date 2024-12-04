import { useAuthStore } from '~/stores/auth'


export default defineNuxtRouteMiddleware(async (to, from) => {
  const { user } = storeToRefs(useAuthStore())

  if (!user.value) {
    const newUser = await useNuxtApp().$axios.get(
      'https://jsonplaceholder.typicode.com/users/1'
    )

    useAuthStore().setUser(newUser)
  }
})
