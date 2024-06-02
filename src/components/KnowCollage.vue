<template>
  <div id="page">
    <img id="shape" :src="blue">
   <h1 id="page-header">מי זאת המכללה?</h1>
   <ScrollText id="scroll-text" :innerText="emergencyText" :innerText2="emergencyText2" :innerText3="emergencyText3" :imageNumber="1"></ScrollText>
      <p id="orderText"> לחצו כאן לצפיייה בסרטון נסו לזכור כמה שיותר פרטים </p>
      <div id="play-button" @click="goToVideo">
              <div id="triangle"></div>
      </div>
      <VideoPage v-if="state.showVideo" @backMenu="goToMenu"></VideoPage>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from 'vue';
import ScrollText from './ScrollText.vue';
import VideoPage from './VideoPage.vue';
import blue from "../assets/imgs/blue.png";

const emergencyText = `המכללה לא רק מכשירהאלא גם מאמנת את הרשויות המקומיות לתרגול מצבי חירום כמו מלחמה, טרור, אסון טבע, אסון אזרחי, מגיפה וסייבר`;
const emergencyText2 = `בשעת חירום, הרשות המקומית עוברות לעבוד בתצורה של מכלולים. כלומר, עוזבים את העבודה הרגילה שלהם ומתרכזים רק בנושאים רלוונטיים ומשמעותיים לטיפול באירוע`;
const emergencyText3 = ` אנחנו מייצרים פה שפה אחודה ומקדמים שיתופי פעולה המכללה מקיימת שיתופי פעולה עם מובילים מקצועיים ממשרדי הממשלה השונים, מרכז השלטון המקומי והאזורי, ארגוני חירום והצלה, מוסדות אקדמאים וארגונים מהחברה האזרחית.
`;
const emit = defineEmits(['go-menu']);

const state = reactive({ 
showVideo: false
});

const goToVideo = () => {
state.showVideo = true;
};

const goToMenu = () =>{
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
@font-face { 
font-family: "Karantina";
src: url("@/assets/Karantina-Regular.ttf"), 
format("truetype");
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
#orderText{
  position: absolute;
  width:80vw;
  color:rgb(31,56,100);
  font-size: 1.2em;
  right: 50%;
  transform: translateX(50%);
  bottom:6.5vh;
  font-family: "Heebo";
  text-align: center;


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
#shape{
position: absolute;
left:0%;
top:0%;
height: 18vh;
}



</style>