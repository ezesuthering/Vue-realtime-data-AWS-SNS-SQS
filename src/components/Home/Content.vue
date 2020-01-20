<template>
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex shrink>
            


             <v-row align="center">
    <v-item-group
      v-model="window"
      class="shrink mr-6"
      mandatory
      tag="v-flex"
    >
      <v-item
        v-for="n in this.$store.getters.getNews.length"
        :key="n"
        v-slot:default="{ active, toggle }"
      >
        <div>
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-col>
      <v-window
        v-model="window"
        class="elevation-1"
        vertical
      >
        <v-window-item
          v-for="item in this.$store.getters.getNews"
          :key="item.id"
        >
          <v-card flat>
            <v-card-text>
              <v-row class="mb-4" align="center">
                <v-avatar color="grey" class="mr-4"></v-avatar>
                <strong class="title"> {{ item.title }}</strong>
                <v-spacer></v-spacer>
                
              </v-row>

              <p>
                {{ item.message }}
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
export default {
    name: 'content',
    created() {
      console.log(this.$store.getters.getNews)
    },
    data(){
      return {
      window: 0
      }
    }
}
</script>