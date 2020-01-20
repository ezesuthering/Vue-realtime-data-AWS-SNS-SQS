<template>
<v-footer class="footer" app>
      <span>Code challenge</span>
</v-footer>
</template>

<script>
export default {
  name: 'Navbar',

  data: () => ({
    drawer: null
  }),
};
</script>

<style scoped>
.footer {
  background-color: #000 !important;
  color: #fff !important;
}
</style>
