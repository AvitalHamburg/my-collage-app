<template>
  <div id="page">
  <div v-if="!state.showQuestion">
   <h1 id="page-header"> פעילות המכללה  </h1>
   <div id="scroll-text">
    <p class="main-text" ref="text1">{{ emergencyText }}</p>
    <img class="image-content" :src="collageImg2" alt="Collage Image" ref="image1">
    <p class="image-description" ref="text2">{{ emergencyText2 }}</p>
    <img class="image-content" :src="ImgCollage2" alt="Collage Image" ref="image2">
    <p class="image-description" ref="text3">{{ emergencyText3 }}</p>
  </div>
  <div id="go-next">
    <p id="next-text">לחצו כאן וענו על השאלה </p>
   </div>
    <img :src="nextBtn" id="next-btn" @click="GoQuestion">
  </div>
    <AmericanQ id="question-page"  v-if="state.showQuestion" :pageHeader="pageHead" :questions="questionArray" :answers1="firstAns" :answers2="seconedAns"
    :answers3="thirdAns":correctAnswers="correctAnsArr" :explanations="explainArr" @go-next="backToMenu"></AmericanQ>
  </div>
  </template>

<script setup>
import AmericanQ from './AmericanQ.vue';
import { reactive, onMounted, getCurrentInstance ,defineEmits, ref} from 'vue';
import nextBtn from "../assets/imgs/nextBtn.png";
import collageImg2 from '../assets/imgs/collageImg2.jpg';
import ImgCollage2 from '../assets/imgs/2ImgCollage.jpg'

const emergencyText = `פעילות המכללה מתחלקת בין ארבע מגמות - מגמת משרדי הממשלה, מגמת הכשרות אזרחיות, מגמת אימונים לרשויות מקומיות ומגמת מפקדות שגם מעבירים קורסים וגם מאמנים.`
const emergencyText2 =`למכללה יש מטה מקצועי - משרתי קבע ומילואים, בכירים מרח"ל ויועצים. סגל המרצים כולל מומחים מקצועיים מפיקוד העורף, רח"ל, משרדי הממשלה, המינהל הציבורי והאקדמיה.אורך ההכשרות נע בין שישה לעשרה מפגשים, פעם בשבוע. `
const emergencyText3 =`שתי הכשרות הארוכות במכללה הן ממונה חירום וביטחון (הכשרה מחייבת) וקורס ניהול מצבי חירום, הקנמ"ח, קורס הדגל של מגמת משרדי ממשלה. שניהם עם 20 מפגשים לאורך חצי שנה`
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

const text1 = ref(null);
const text2 = ref(null);
const text3 = ref(null);
const image1 = ref(null);
const image2 = ref(null);

const handleIntersect = (entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('animate');
    observer.unobserve(entry.target);
  }
});
};

onMounted(() => {
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};
const observer = new IntersectionObserver(handleIntersect, options);
observer.observe(text1.value);
observer.observe(text2.value);
observer.observe(text3.value);
observer.observe(image1.value);
observer.observe(image2.value);
});
</script>
<style scoped>
/* @font-face { 
font-family: "Heebo";
src: url("../assets/fonts/Heebo-VariableFont_wght.ttf"), 
format("truetype");
font-weight: bold;
} */


#page {
position: fixed;
top: 0;
left: 0;
/* Adjust the height dynamically based on content */
height: 100vh;
width: 100vw;
background-image: url("../assets/imgs/Bg2.png");
background-size: cover;
background-repeat: no-repeat;
padding: 0;
margin: 0;
overflow: auto; /* Add overflow to enable scrolling */
}

#shape {
position: absolute;
left: 0;
top: 0;
height: 18vh;
}

#scroll-text {
/* Adjust positioning and dimensions */
position: absolute;
top: 20%;
left: 50%;
transform: translateX(-50%);
width: 90vw;
direction: rtl;
text-align: right;
}

#page-header {
font-size: 2em;
color: rgb(31, 56, 100);
font-family: "Heebo";
text-align: center;
margin-top: 10vh;
direction: rtl;
}

#next-btn {
position: absolute;
top:150vh;
left: 50%;
transform: translateX(-50%) rotate(2.5deg);
}

.main-text {
font-size: 1.2em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;

}

.image-content {
width: 100%;
height: auto;
margin-bottom: 2vh;
}

.image-description {
font-size: 1.2em;
margin-bottom: 2vh;
direction: rtl;
text-align: right;
}

.animate {
animation: fadeIn 1s ease;
}

@keyframes fadeIn {
from {
  opacity: 0;
  transform: translateY(20px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
}
#next-text{
position: absolute;
font-size: 1.2em;
right: 50%;
transform: translateX(50%);
text-overflow: none;
width: 80vw;
top:140vh;
font-weight: bold;
}
#question-page{
position: absolute;
right: 50%;
transform: translateX(50%);
width: 100%;
}
</style>
