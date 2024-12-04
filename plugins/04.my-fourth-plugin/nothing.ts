export default defineNuxtPlugin({
  name: 'my-fourth-plugin',
  // enforce: 'pre', // demo run before my-first-plugin
  // parallel: true, // by default is false, it means run in sequence -> demo run in parallel (not wait for my-first-plugin)
  setup(nuxtApp) {
    console.log('From plugin: fourth - Nothing')
  },
})
