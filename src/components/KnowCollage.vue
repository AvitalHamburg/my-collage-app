<template>
  <div id="page">
   <h1 id="page-header">מי זאת המכללה?</h1>
   <ScrollText id="scroll-text" :innerText="emergencyText" :innerText2="emergencyText2" :imageNumber="1"></ScrollText>
      <p id="orderText">לחץ כאן לצפייה בסרטון נסה לזכור כמה שיותר פרטים יופיעו שאלות אחר כך </p>
      <div id="play-button" @click="goToVideo">
              <div id="triangle"></div>
      </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import ScrollText from './ScrollText.vue';

const emergencyText = `המכללה לא רק מכשירה אלא גם מאמנת את הרשויות המקומיות לתרגול מצבי חירום כמו מלחמה, טרור, אסון טבע, אסון אזרחי, מגיפה וסייבר`;
const emergencyText2 = `בשעת חירום, הרשות המקומית עוברות לעבוד בתצורה של מכלולים. כלומר, עוזבים את העבודה הרגילה שלהם ומתרכזים רק בנושאים רלוונטיים ומשמעותיים לטיפול באירוע`;

const state = reactive({ 
showVideo: false,
});

const goToVideo = () => {
state.showVideo = true;
console.log(state.showVideo);
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
  top:15%;
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
  color:rgb(31,56,100);
}
#orderText{
  position: absolute;
  width:80vw;
  color:rgb(31,56,100);
  font-size: 1.5em;
  right: 50%;
  transform: translateX(50%);
  bottom:7vh;
}

#play-button{ 
  position: absolute;
height: 8vh;
width: 15vw;
background-color: #bbbbbb00;
border:1vw solid rgb(31,56,100);
border-radius: 50%;
right: 50%;
transform: translateX(50%);
bottom: 1vh;

}

#triangle {
position: absolute;
width: 0;
height: 0;
border-bottom: 10vw solid rgb(31,56,100); /* Using percentage-based value */
border-left: 5vw solid rgba(255, 255, 255, 0); /* Using percentage-based value */
border-right: 5vw solid rgba(255, 255, 255, 0); /* Using percentage-based value */
transform: rotate(90deg);
top:20%;
right:10%;
}


</style>