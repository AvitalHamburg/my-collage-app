
<template>
  <div>
    <HelloWorld v-if="state.page === 0" @move-next="nextPage"></HelloWorld>
    <Menu v-if="state.page === 1" ></Menu>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Menu from './components/Menu.vue';
import HelloWorld from './components/HelloWorld.vue';

  const state = reactive({
    page: 0
  });

  function nextPage() {
    state.page++;
  }
</script>

<style scoped>
body {
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>
