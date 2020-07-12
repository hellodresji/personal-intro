<template>
  <div class="home">
    <HomeComponent></HomeComponent>
    <Profile></Profile>
    <Experience></Experience>
    <div class="scroll-hint">
      <div class="hint-direc"></div>
    </div>
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

.scroll-hint {
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  height: 40px;
  width: 20px;
  content: '';
  border: 1px solid white;
  border-radius: 15px;
  overflow: hidden;
  padding: 3px;
  box-sizing: border-box;
}

.hint-direc {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid white;
  content: '';
  height: 3px;
  animation: downHint 2s infinite ease-in-out;
}

@keyframes downHint {
  0% {
    bottom: 30px;
    opacity: 0;
  }
  10% {
    bottom: 30px;
    opacity: 1;
  }
  70% {
    bottom: 5px;
    opacity: 1;
  }
  75% {
    bottom: 10px;
    opacity: 1;
  }
  80% {
    bottom: 5px;
    opacity: 1;
  }
  85% {
    bottom: 7px;
    opacity: 1;
  }
  90% {
    bottom: 5px;
    opacity: 1;
  }
  100% {
    bottom: 5px;
    opacity: 0;
  }
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
