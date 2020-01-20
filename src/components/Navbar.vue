<template>
<div>
  <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item @click="goHome">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="goNotifications">
          <v-list-item-action>
            <v-icon>notifications</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Notifications</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      class="navbar"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
</div>
</template>

<script>
export default {
  name: 'Navbar',

  data: () => ({
    drawer: null
  }),

  methods: {
    goHome() {
      this.$router.push('/', () => {})
    },
    goNotifications() {
      this.$router.push('/notifications', () => {})
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #9a0000 !important;
  color: #fff !important;
}

.v-btn--outlined .v-btn__content .v-icon, .v-btn--round .v-btn__content .v-icon {
  color: #fff;
}
</style>
