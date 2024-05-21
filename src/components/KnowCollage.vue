<template>
    <div id="page">
     <h1 id="page-header">מי זאת המכללה?</h1>
     <ScrollText id="scroll-text" :innerText="emergencyText" :innerText2="emergencyText2" :imageNumber="1"></ScrollText>
    </div>
</template>

<script setup>
import ScrollText from './ScrollText.vue';
const emergencyText = `המכללה לא רק מכשירה אלא גם מאמנת את הרשויות המקומיות לתרגול מצבי חירום כמו מלחמה, טרור, אסון טבע, אסון אזרחי, מגיפה וסייבר`;
const emergencyText2 =`בשעת חירום, הרשות המקומית עוברות לעבוד בתצורה של מכלולים. כלומר, עוזבים את העבודה הרגילה שלהם ומתרכזים רק בנושאים רלוונטיים ומשמעותיים לטיפול באירוע
`
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
</style>