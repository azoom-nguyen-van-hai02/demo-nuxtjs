import { useAuthStore } from '~/stores/auth'


export default defineNuxtRouteMiddleware(async (to, from) => {
  // check params
  const allowContractIds = [1,2,3]
  const id = Number(to.params.id)
  const contractId = Number(to.query.contractId)

  if (!allowContractIds.includes(contractId)) {
    return abortNavigation()
  }

  // check path
  if (from.path === '/users/create' && to.path === '/users') {
    console.log('from create user page to user page ...')
  }

  // check user login
  if (!useAuthStore().isLogin) {
    return navigateTo('/login')
  }
})
