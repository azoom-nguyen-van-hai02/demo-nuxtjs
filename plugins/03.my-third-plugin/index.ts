export default defineNuxtPlugin({
  name: 'my-second-plugin',
  enforce: 'pre', // demo run before my-first-plugin
  // parallel: true, // by default is false, it means run in sequence -> demo run in parallel (not wait for my-first-plugin)
  async setup(nuxtApp) {
    // change background color of nuxt app to red
    console.log('From plugin: My third plugin')
    await new Promise((resolve) => setTimeout(resolve, 2000))
  },
})
