<template>
<div>
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
              



<v-list three-line>
      <template v-for="item in this.$store.getters.getNotifications">

        <v-list-item
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-icon>assignment</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="notif-title">{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle> {{ item.message }} </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
          <v-divider
          :key="item.id"
          :inset="true"
        ></v-divider>
      </template>
    </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</div>
</template>

<script>
export default {
    name: 'notifications-content',
    data() {
        return {
    }
}
}
</script>

<style scoped>

</style>