
export const useAuthStore =  defineStore('auth', () => {
  const user = ref(null)
  // generate a new token for sample
  const exampleToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjM0NTY3ODkwLCJ1c2VyX25hbWUiOiJKb2huIERvZSIsImlhdCI6MTY0MzA1NjY1MCwiZXhwIjoxNjQzMDYwMjUwfQ.s3cr3tS1gn4tur3sign4tur3sign4tur3'
  const token = ref<string | null>(exampleToken)

  const setUser = (newUser: any) => {
    user.value = newUser
  }

  const logout = () => {
    user.value = null
    token.value = null
  }

  const login = ()=> {  
    token.value = exampleToken
  }

  const isLogin = computed(() => !!token.value)

  return {
    user,
    token,
    isLogin,
    setUser,
    logout,
    login,
  }
})
