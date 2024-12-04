<template>
  <div>
    <h1>Nuxt 3 Data Fetching Demo</h1>

    <h2>useAsyncData (Blocking Navigation)</h2>
    <div v-if="asyncStatus === 'pending'">Loading (Blocking)...</div>
    <div v-else >
      <p>{{ asyncData }}</p>
    </div>

    <h2 class="mt-8">useLazyAsyncData (Non-blocking Navigation)</h2>
    <div v-if="lazyStatus === 'pending'">Loading (Non-blocking)...</div>
    <div v-else>
      <p>{{ lazyData }}</p>
    </div>
  </div>
</template>

<script setup>
const fetchData = async (delay = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data fetched after ${delay / 1000} seconds!`);
    }, delay);
  });
};

// Use useAsyncData (Blocking)
const { data: asyncData, status: asyncStatus } = await useAsyncData('async-data', () => fetchData(3000), {
  lazy: true
});

// Use useLazyAsyncData (Non-blocking)
const { data: lazyData, status: lazyStatus } = await useLazyAsyncData('lazy-data', () => fetchData(3000));
</script>
