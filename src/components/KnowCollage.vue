<template>
  <div id="page">
    <div v-if="!state.showVideo">
   <h1 id="page-header">מי זאת המכללה?</h1>
   <div id="scroll-text">
    <p class="main-text" ref="text1">{{ emergencyText }}</p>
    <img class="image-content" :src="collageImg1" alt="Collage Image" ref="image1">
    <p class="image-description" ref="text2">{{ emergencyText2 }}</p>
    <!-- <img class="image-content" :src="ImgCollage1" alt="Collage Image" ref="image2"> -->
    <p class="image-description" ref="text3">{{ emergencyText3 }}</p>
  </div>
  <p ref="nextT" id="next-text"> לחצו כאן לצפיייה בסרטון נסו לזכור כמה שיותר פרטים </p>
  <img ref="nextB" :src="nextBtn" id="next-btn" @click="goToVideo">

  <div id="play-button" @click="goToVideo">
          <div id="triangle"></div>
  </div>
</div>
  <VideoPage id="video-page" v-if="state.showVideo" @backMenu="goToMenu"></VideoPage>
  </div>
</template>

<script setup>
import { reactive, onMounted, getCurrentInstance ,defineEmits, ref} from 'vue';
import VideoPage from './VideoPage.vue';
import orange from "../assets/imgs/orange.png";
import collageImg1 from '../assets/imgs/collageImg1.png';
import nextBtn from "../assets/imgs/nextBtn.png";

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

const text1 = ref(null);
const text2 = ref(null);
const text3 = ref(null);
const image1 = ref(null);
const image2 = ref(null);
const nextT = ref(null);
const nextB = ref(null);


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

@font-face { 
font-family: "Heebo";
src: url("../assets/fonts/Heebo-VariableFont_wght.ttf"), 
format("truetype");
font-weight: bold;
}


#page {
position: fixed;
top: 0;
left: 0;
/* Adjust the height dynamically based on content */
height: 100vh;
width: 100vw;
/* background-image: url("../assets/imgs/Bg2.png"); */
background-color: rgb(229, 232, 235);
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
top:155vh;
font-weight: bold;
}
#next-btn{
position: absolute;
top:165vh;
}
</style>