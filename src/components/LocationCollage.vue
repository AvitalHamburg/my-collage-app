<template>
  <div id="page">
  <img id="shape" :src="orange">
   <h1 id="page-header">  נכסי המכללה    </h1>
   <ScrollText id="scroll-text" :innerText="emergencyText" :innerText2="emergencyText2" :imageNumber="6"></ScrollText>
  </div>
</template>

<script setup>
import ScrollText from './ScrollText.vue';
import orange from "../assets/imgs/orange.png";

const emergencyText = `המכללה שלנו היא חלק ממערכת גדולה יותר , המפקדה של פיקוד העורף . היא כוללת הוצאה לאור לשכת אלוף פיקוד העורף . חדר אוכל של פיקוד העורף ובנוסף המאמ"פ שם ישנן מדריכות שליטה ובקרה שמדריכות על מערכת השועל שאחראית בין היתר על ההתראות לנפילת טילים. 
`
const emergencyText2 =` `
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
#scroll-text{
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top:20%;
  text-align: right;
}
#page-header{
  position: absolute;
  top:7vh;
  right: 50%;
  transform: translateX(50%);
  font-size: 2em;
  width: 90vw;
  text-overflow: none;
  color:rgb(31,56,100);
  font-family: "Heebo";
  text-align: center;
}
#shape{
position: absolute;
left:0%;
top:0%;
height: 18vh;
}
</style>