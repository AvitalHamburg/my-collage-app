<template>
  <div id="page">
    <KnowCollage v-if="textNum === 1" @go-menu="backToMenu"></KnowCollage>
    <ActiveCollage v-if="textNum === 2"></ActiveCollage>
    <OutsideCollage v-if="textNum === 3"></OutsideCollage>
    <TrainingCollage v-if="textNum === 4"></TrainingCollage>
    <LocationCollage v-if="textNum === 5"></LocationCollage>
    <LibraryCollage v-if="textNum === 6"></LibraryCollage>
  </div>
</template>

<script setup>
import { reactive, defineProps ,defineEmits } from 'vue'; // Import reactive and defineProps

import KnowCollage from './KnowCollage.vue';
import ActiveCollage from './ActiveCollage.vue';
import OutsideCollage from './OutsideCollage.vue';
import TrainingCollage from './TrainingCollage.vue';
import LocationCollage from './LocationCollage.vue';
import LibraryCollage from './LibraryCollage.vue';
const emit = defineEmits(['menuShow']);


const props = defineProps({
  textNum: Number
});
const backToMenu = () =>{
  emit('menuShow');
}

</script>

<style scoped>
@font-face {
  font-family: "Heebo";
  src: url("@/assets/fonts/Heebo-VariableFont_wght.ttf"),
    format("truetype");
  font-weight: bold;
}

* {
  overflow: hidden;
  direction: rtl;
}

#page {
  position: absolute;
  top: 0%;
  right: 50%;
  transform: translateX(50%);
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/imgs/Bg2.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0%;
}
</style>