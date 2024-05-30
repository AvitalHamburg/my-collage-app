<template>
  <div id="page">
  <img id="shape" :src="red">
  <div v-if="!state.showQuestion">
   <h1 id="page-header"> פעילות המכללה  </h1>
   <ScrollText id="scroll-text" :innerText="emergencyText" :innerText2="emergencyText2" :imageNumber="2"></ScrollText>
   <div id="go-next">
    <p id="next-text">לחצו כאן וענו על השאלה </p>
   </div>
    <img :src="nextBtn" id="next-btn" @click="GoQuestion">
  </div>
    <AmericanQ  v-if="state.showQuestion" :pageHeader="pageHead" :questions="questionArray" :answers1="firstAns" :answers2="seconedAns"
    :answers3="thirdAns":correctAnswers="correctAnsArr" :explantions="explainArr" @go-next="backToMenu"></AmericanQ>
  </div>
  </template>

<script setup>
import ScrollText from './ScrollText.vue';
import Payment from './Payment.vue';
import AmericanQ from './AmericanQ.vue';
import { reactive, onMounted, getCurrentInstance ,defineEmits} from 'vue';
import nextBtn from "../assets/imgs/nextBtn.png";
import red from "../assets/imgs/red.png";
const emergencyText = `    פעילות המכללה מתחלקת בין ארבע מגמות: 
מגמת משרדי הממשלה, מגמת הכשרות אזרחיות, מגמת אימונים לרשויות מקומיות ומגמת מפקדות שגם מעבירים קורסים וגם מאמנים.
`;
const emergencyText2 =` למכללה יש מטה מקצועי - משרתי קבע ומילואים, בכירים מרח"ל ויועצים. 
סגל המרצים כולל מומחים מקצועיים מפיקוד העורף, רח"ל, משרדי הממשלה, המינהל הציבורי והאקדמיה.`

const emit = defineEmits(['go-menu']);

const state = reactive({ 
showPayment: false,
showQuestion:false
});

const pageHead ="פעילות המכללה";
const questionArray=[' מה מבין הבאים קורס הדגל של המכללה?','את מי מאמנת המכללה?'];
const firstAns = ['ממונה חירום וביטחון','כוחות ביטחון'];
const seconedAns = ['קורס ניהול מצבי חירום' ,'כל התשובות נכונות '];
const thirdAns = ['תשבות א ו ב נכונות' ,' רשויות'];
const correctAnsArr=['תשבות א ו ב נכונות','כל התשובות נכונות '];
const explainArr = ['קורסי הדגל במכללה שלנו הם :  ואנו מלמדים אותם ','בלה בלה בלה '];

const GoQuestion = () => {
state.showQuestion=true;
};
const goToPayment = () =>{
state.showPayment= true;
state.showQuestion=false;


};

const backToMenu = () =>{
    emit('go-menu');
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
#scroll-text{
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top:20%;
  text-align: right;
}
#page-header{
  position: absolute;
  top:8vh;
  right: 50%;
  transform: translateX(50%);
  font-size: 2em;
  width: 90vw;
  text-overflow: none;
  color:rgb(31,56,100);
}
#go-next{
position: absolute;
right: 50%;
transform: translateX(50%);
bottom:15vw;
}

#next-btn{
position: absolute; /* Change to absolute positioning */
bottom: 8vh; /* Initial position */
right: 50%;
transform: translateX(50%) rotate(2.5deg); /* Adjust the rotation */
animation: bounce2 2s ease infinite; /* Add animation delay */
animation-delay: 15sec;
}

#next-text{
color:rgb(31,56,100);
font-size:1.2em ;
width:30vw;
}
@keyframes bounce2 {
  0% {
      bottom: 6vh;
  }
  50%{
    bottom: 4vh;
  }
  100%{
    bottom: 6vh;
  }
}
#shape{
position: absolute;
left:0%;
top:0%;
height: 18vh;
}
</style>
