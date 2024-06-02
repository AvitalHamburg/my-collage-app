<template>
  <div id="page">
    <img id="shape" :src="blueLight">

   <h1 id="page-header">  קשרי חוץ  </h1>
   <ScrollText id="scroll-text" :innerText="emergencyText" :innerText2="emergencyText2" :imageNumber="4"></ScrollText>
   <img :src="nextBtn" id="next-btn" @click="MenuBack">
  </div>
</template>

<script setup>
import ScrollText from './ScrollText.vue';
import blueLight from "../assets/imgs/blueLight.png";
import nextBtn from "../assets/imgs/nextBtn.png";
import { defineEmits } from 'vue';

const emergencyText = `אנחנו לגמרי בינלאומיים!
ומארחים משלחות בעלי תפקידים בממשלות וצבאות מרחבי העולם, שרוצים ללמוד על חוסנה של מדינת ישראל והתמודדות מיטבית בשעת חירום.`;
const emergencyText2 =` כבר יצא לנו להיפגש עם ראשת FEMA )רח"ל האמריקאית), מב"ל הספרדית, נציגים ממשטרת שבדיה, קהילות יהודיות מרחבי העולם וגורמים נוספים, שבאים מכל היבשות לשמוע על קידום המוכנות ברשויות המקומיות, ההכשרות והאימונים - מכיתה י' ועד משרדי הממשלה.`

const emit = defineEmits(['menu-back']);

const MenuBack = () =>{
emit('menu-back');
};
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
  top:5vh;
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

#next-btn{
position: absolute; /* Change to absolute positioning */
bottom: 5vh; /* Initial position */
right: 50%;
transform: translateX(50%) rotate(2.5deg); /* Adjust the rotation */
animation: bounce2 2s ease infinite; /* Add animation delay */
animation-delay: 15sec;
}
@keyframes bounce2 {
  0% {
      bottom: 10vh;
  }
  50%{
    bottom:7vh;
  }
  100%{
    bottom: 10vh;
  }
}
</style>