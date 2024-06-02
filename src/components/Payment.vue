<template>
  <div id="page">
    <img id="shape" :src="green">

   <h1 id="page-header">  גמול השתלמות </h1>
   <ScrollText id="scroll-text" :innerText="emergencyText" :innerText2="emergencyText2" :innerText3="emergencyText3" :imageNumber="3"></ScrollText>
   <img :src="nextBtn" id="next-btn" @click="MenuBack">

  </div>

</template>

<script setup>
import ScrollText from './ScrollText.vue';
import nextBtn from "../assets/imgs/nextBtn.png";
import green from "../assets/imgs/green.png";

import { defineEmits } from 'vue';
const emergencyText = `הבוגרים והבוגרות מקבלים תעודת הסמכה או השתתפות ובחלק מההכשרות, זכאים לגמול השתלמות. מה זה אומר?`;
const emergencyText2 =`כדי לעודד מעסיקים לשלוח את עובדיהם להשתלמויות החשובות לחברה, לעובד ולמשק הישראלי גם יחד, נולד המונח “גמול השתלמות” - המשקף תשלום כספי קבוע, אשר משולם לאותו עובד שהשתתף בהשתלמות המקצועית בגין לימודיו, על ידי מעסיקו. : קיימים גמולי השתלמות לעובדי מדינה ויש לעמוד במספר קריטריונים שקבע המחוקק.`
const emergencyText3 =` על מנת לקבל את גמול ההשתלמות יש להגיש בקשה מסודרת בצירוף המסמכים הנדרשים בחוק.גובה גמול ההשתלמות עשוי להיות בסך של כמה מאות שקלים בודדים מדי חודש, ויכול להגיע גם לאלפי שקלים, בהתאם לתחום, לוותק, לדרגה ולפרמטרים נוספים. בהחלט משתלם!`

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
#shape{
position: absolute;
left:0%;
top:0%;
height: 18vh;
}
</style>