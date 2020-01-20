<template>
  <div id="app">
    <Notification />
    <Navbar />
      <router-view></router-view>
    <Footer />     
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Notification from '@/components/Notification.vue'

export default {
  name: 'App',

  components: {
   Navbar,
   Footer,
   Notification
},
  created() {




  },
};
</script>
