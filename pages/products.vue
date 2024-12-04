<script setup lang="ts">

// use useFetch and mock data to fetch products

const { data: products, status } = await useFetch('https://fakestoreapi.com/products', {
  lazy: true,
})

</script>

<template>
  <div>
    <!-- define products list  -->
     <!-- define loading spinner when loading data -->
    <v-progress-linear
      v-if="status === 'pending'"
      indeterminate
    ></v-progress-linear>
    <!-- define error message when error fetching data -->
    <v-alert
      v-if="status === 'error'"
      type="error"
    >
      Error fetching data
    </v-alert>
    <v-container>
      <v-row>
        <v-col
          v-for="(item, i) in products"
          :key="i"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            class="mb-4"
          >
            <v-card-title>
              <v-img
                :src="item.src"
                :color="item.color"
              />
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Product ID</v-list-item-title>
                    <v-list-item-subtitle>{{ item.id }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Product Name</v-list-item-title>
                    <v-list-item-subtitle>{{ item.name }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Price</v-list-item-title>
                    <v-list-item-subtitle>{{ item.price }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>

</style>
