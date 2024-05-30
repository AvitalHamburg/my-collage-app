<template>
  <div id="page">
  <img id="shape" :src="yellow">
   <h1 id="page-header"> ספריה</h1>
   <ScrollText id="scroll-text" :innerText="emergencyText" :innerText2="emergencyText2" :imageNumber="7"></ScrollText>
  </div>
</template>

<script setup>
import ScrollText from './ScrollText.vue';
import yellow from "../assets/imgs/yellow.png";

const emergencyText = ` הספרייה הלאומית לחירום היא מאגר ידע דיגיטלי מתעדכן–
להערכות, התערבות ושיקום.
הספרייה נמצאת באתר המכללה וכוללת כ- 1,500 פריטי מידע, כמו חוקים ותקנות, נהלים, תדריכים, תוכניות מענה, מאמרים, מחקרים, סרטים ועוד.
המאגר מאפשר לרכז, לארגן, להפיץ ולהנגיש ידע.
`;
const emergencyText2 =` `;
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
  font-size: 2.5em;
  width: 90vw;
  text-overflow: none;
  color:RGB(31,56,100);
}
#shape{
position: absolute;
left:0%;
top:0%;
height: 18vh;
}

</style>