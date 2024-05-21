<template>
  <div id="page">
    <KnowCollage v-if="textNum === 1"></KnowCollage>
    <ActiveCollage v-if="textNum === 2" ></ActiveCollage>
  </div>
</template>

<script setup>
import KnowCollage from './KnowCollage.vue';
import ActiveCollage from './ActiveCollage.vue';
const props = defineProps({
  textNum: Number
});
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