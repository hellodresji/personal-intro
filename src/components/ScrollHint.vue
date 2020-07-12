<template>
    <div class="hint-container">
        <div class="scroll-hint" :style="{'border-color': theme === 'light' ? 'black' : 'white'}">
            <div class="hint-direc" :style="{'border-color': theme === 'light' ? 'black' : 'white'}"></div>
        </div>
    </div>
</template>
<style scoped>
.hint-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.scroll-hint {
  height: 40px;
  width: 20px;
  content: '';
  border: 1px solid;
  border-radius: 15px;
  overflow: hidden;
  padding: 3px;
  box-sizing: border-box;
}

.hint-direc {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid;
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
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ScrollHint extends Vue {
    @Prop({default: 'light'})
    public theme: string;
}
</script>