<template>
  <div class="home">
    <HomeComponent></HomeComponent>
    <Profile></Profile>
    <Experience></Experience>
  </div>
</template>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}
</style>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HomeComponent from '@/components/Home.vue';
import Profile from '@/components/Profile.vue';
import Experience from '@/components/Experience.vue';

@Component({
  components: {
    HomeComponent,
    Profile,
    Experience,
  },
})
export default class Home extends Vue {
  
}
</script>
