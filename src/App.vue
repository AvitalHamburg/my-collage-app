<template>
  <div>
    <HelloWorld v-if="state.page === 0" @move-next="nextPage"></HelloWorld>
    <Menu :visitedMenuPage="state.visitedPages" v-if="state.showMenu" @go-next="movePage" ></Menu>
    <KnowCollage v-if="state.textNum === 1" @go-menu="backToMenu"></KnowCollage>
    <ActiveCollage v-if="state.textNum === 2" @go-menu="backToMenu"></ActiveCollage>
    <OutsideCollage v-if="state.textNum === 3"></OutsideCollage>
    <TrainingCollage v-if="state.textNum === 4"></TrainingCollage>
    <LocationCollage v-if="state.textNum === 5"></LocationCollage>
    <LibraryCollage v-if="state.textNum === 6"></LibraryCollage>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Menu from './components/Menu.vue';
import HelloWorld from './components/HelloWorld.vue';
import KnowCollage from './components/KnowCollage.vue';
import ActiveCollage from './components/ActiveCollage.vue';
import OutsideCollage from './components/OutsideCollage.vue';
import TrainingCollage from './components/TrainingCollage.vue';
import LocationCollage from './components/LocationCollage.vue';
import LibraryCollage from './components/LibraryCollage.vue';

const state = reactive({
  page: 0,
  showMenu: false,
  textNum: 0,
  visitedPages: [] // מערך שישמור את מספרי העמודים שעברנו בהם
});

function nextPage() {
  state.page++;
  state.showMenu = true;
  console.log("showMenu1", state.showMenu);
}

const movePage = (number) => {
  state.textNum = number;
  state.showMenu = false;
  state.visitedPages.push(number-1); // הוספת העמוד למערך מספרי העמודים שעברנו בהם
  console.log("showMenu2", state.showMenu);
}

const backToMenu = () => {
  console.log('backMenu in the app component');
  state.showMenu = true;
  state.textNum = 0;
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
