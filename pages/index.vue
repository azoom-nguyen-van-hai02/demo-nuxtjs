<script setup lang="ts">

const items = [
  {
    src: 'https://i.redd.it/fypklk30az1e1.jpeg',
    color: 'grey darken-1',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    color: 'grey darken-2',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    color: 'grey darken-3',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    color: 'grey darken-4',
  },
]
const comments = ref([])

// const fetchListComment = async () => {
//   const { $axios } = useNuxtApp()
//   comments.value = await $axios.get('/comments')
// }

const fetchListComment = async () => {
  console.log('fetching comments')
  comments.value = await $fetch('/api/comments')

  return comments.value
}

// It make call 2 times, one in server and one in client
comments.value = await $fetch('/api/comments')
// ----------------------------------------------


// use useFetch or useAsyncData to avoid running twice

const { data: commentList, status } = await useFetch('/api/comments')

// const { data: commentList, status } = useAsyncData(fetchListComment)

</script>

<template>
  <div>
      <div class="flex gap-4 mx-2">
        <v-btn
          @click="fetchListComment"
          color="primary"
          class="mb-4"
        >
          Fetch List Comment
        </v-btn>
        <!-- button reset comments -->
        <v-btn
          @click="comments = []"
          color="error"
          class="mb-4"
        >
          Reset Comments
        </v-btn>
      </div>
     <!-- define list of comments in card including id and text  -->
      <v-container>
        <v-row>
          <v-col
            v-for="(comment, i) in commentList"
            :key="i"
            cols="12"
          >
            <v-card
              class="mb-4"
            >
              <v-card-title>
                Comment ID: {{ comment.id }}
              </v-card-title>
              <v-card-text>
                {{ comment.text }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-carousel>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
            >
              <v-sheet
                :color="item.color"
                height="100%"
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-col>
                    <v-img
                      :src="item.src"
                      max-height="200"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>

</style>
