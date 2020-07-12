<template>
  <v-app class="app">
    <router-view></router-view>
  </v-app>
</template>
<style scoped>
.app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
});
</script>
