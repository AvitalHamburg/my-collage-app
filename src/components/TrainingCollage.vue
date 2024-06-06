<template>
  <div id="page">
  <img id="shape" :src="orange">
  <div>
   <h1 id="page-header"> אימוני הרשויות </h1>
   <div id="scroll-text">
    <p class="main-text" ref="text1">{{ emergencyText }}</p>
    <img class="image-content" :src="collageImg5" alt="Collage Image" ref="image1">
    <p class="image-description" ref="text2">{{ emergencyText2 }}</p>
    <img class="image-content" :src="ImgCollage5" alt="Collage Image" ref="image2">
    <p class="image-description" ref="text3">{{ emergencyText3 }}</p>
  </div>
  <div id="go-next">
    <p id="next-text"> לחצו כאן להמשך</p>
   </div>
    <img :src="nextBtn" id="next-btn" @click="backToMenu">
  </div>
  </div>
  </template>

<script setup>
import { reactive, onMounted, getCurrentInstance ,defineEmits, ref} from 'vue';
import nextBtn from "../assets/imgs/nextBtn.png";
import collageImg5 from '../assets/imgs/collageImg5.jpg';
import ImgCollage5 from '../assets/imgs/5ImgCollage.jpg'

const emergencyText = `המכללה לא רק מכשירה אלא גם מאמנת את הרשויות המקומיות לתרגול מצבי חירום כמו מלחמה, טרור, אסון טבע, אסון אזרחי, מגיפה וסייבר.בשעת חירום, הרשות המקומית עוברות לעבוד בתצורה של מכלולים. כלומר, עוזבים את העבודה הרגילה שלהם ומתרכזים רק  בנושאים רלוונטיים ומשמעותיים לטיפול באירוע.`
const emergencyText2 =`במכללה, אנחנו מכשירים את המנהלים והמנהלות וסגניהם, של 8 בעלי תפקידים ברשות:סגן או סגנית הרשות או מנכ"ל/מנכ"לית הרשות, ממונה חירום וביטחוןומכלולי אוכלוסייה, חינוך, מידע לציבור, לוגיסטיקה, הנדסה ומינהל כללי ומשא"ן. לאלה מתווספת גם הכשרה צבאית ליקל"ר, שהוא נציג פיקוד העורף ברשות.`
const emergencyText3 =`אימון של רשות מקומית מתרגל את הסינכרון בין המכלולים והיכולת לגבש תמונת מצב והערכת מצב, תוך התמודדות עם תרחיש הייחוס והסימולציה למצב חירום. האימון יכול להתקיים ברשות עצמה, אז כל צוות מינהלת האימונים נוסע אליהם או במתקן הסימולטור, שהם באים אלינו לצד השני של הבסיס, כשעשרות אנשים עוזבים את הרשות, באים לתרגל במנותק מיום העבודה שלהם ומקבלים הערכה ומשוב על פעילותם.`
const emit = defineEmits(['go-menu']);



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
}

#next-btn {
  position: absolute;
  top: 190vh; /* Adjust the top value to add padding */
  left: 50%;
  transform: translateX(-50%) rotate(2.5deg);
  margin-bottom: 10vh;
}


.main-text {
font-size: 1.2em;
margin-bottom: 2vh;
}

.image-content {
width: 100%;
height: auto;
margin-bottom: 2vh;
}

.image-description {
font-size: 1.2em;
margin-bottom: 2vh;
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
top:182vh;
font-weight: bold;
}

@keyframes bounce2 {
      0% {
        top: 190%;

      }
      50%{
        top: 195%;

      }
      100%{
        top: 190%;

      }
  }
</style>
