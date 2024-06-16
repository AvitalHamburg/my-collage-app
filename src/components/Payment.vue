<template>
  <div id="page">

    <h1 id="page-header">גמול השתלמות</h1>
    <div id="scroll-text">
      <p class="main-text" ref="text1">{{ emergencyText }}</p>
      <img class="image-content" :src="collageImg3" alt="Collage Image" ref="image1">
      <p class="image-description" ref="text2">{{ emergencyText2 }}</p>
      <img class="image-content" :src="ImgCollage3" alt="Collage Image" ref="image2">
      <p class="image-description" ref="text3">{{ emergencyText3 }}</p>
    </div>
    <img :src="nextBtn" id="next-btn" @click="MenuBack">
  </div>
</template>

<script setup>
import nextBtn from "../assets/imgs/nextBtn.png";

import { defineEmits, ref, onMounted, onUnmounted } from 'vue';
const emergencyText = `הבוגרים והבוגרות מקבלים תעודת הסמכה או השתתפות ובחלק מההכשרות, זכאים לגמול השתלמות. מה זה אומר?`;
const emergencyText2 =`כדי לעודד מעסיקים לשלוח את עובדיהם להשתלמויות החשובות לחברה, לעובד ולמשק הישראלי גם יחד, נולד המונח “גמול השתלמות” - המשקף תשלום כספי קבוע, אשר משולם לאותו עובד שהשתתף בהשתלמות המקצועית בגין לימודיו, על ידי מעסיקו. : קיימים גמולי השתלמות לעובדי מדינה ויש לעמוד במספר קריטריונים שקבע המחוקק.`;
const emergencyText3 =`על מנת לקבל את גמול ההשתלמות יש להגיש בקשה מסודרת בצירוף המסמכים הנדרשים בחוק.גובה גמול ההשתלמות עשוי להיות בסך של כמה מאות שקלים בודדים מדי חודש, ויכול להגיע גם לאלפי שקלים, בהתאם לתחום, לוותק, לדרגה ולפרמטרים נוספים. בהחלט משתלם!`;

import collageImg3 from '../assets/imgs/collageImg3.png';
import ImgCollage3 from '../assets/imgs/3ImgCollage.jpg';
const emit = defineEmits(['menu-back']);

const MenuBack = () => {
  emit('menu-back');
};

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
    font-weight: normal;
    src: url("../assets/fonts/Heebo-VariableFont_wght.woff"), 
         format("woff");
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
  top: 170vh;
  left: 50%;
  transform: translateX(-50%) rotate(2.5deg);
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
</style>
