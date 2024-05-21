<template>
    <div id="page">
     <h1 id="page-header">  גמול השתלמות </h1>
     <ScrollText id="scroll-text" :innerText="emergencyText" :innerText2="emergencyText2" :imageNumber="3"></ScrollText>
    </div>
</template>

<script setup>
import ScrollText from './ScrollText.vue';
const emergencyText = ` אנחנו לגמרי בינלאומיים!
ומארחים משלחות בעלי תפקידים בממשלות וצבאות מרחבי העולם, שרוצים ללמוד על חוסנה של מדינת ישראל והתמודדות מיטבית בשעת חירום.`;
const emergencyText2 =` כבר יצא לנו להיפגש עם ראשת FEMA )רח"ל האמריקאית), מב"ל הספרדית, נציגים ממשטרת שבדיה, קהילות יהודיות מרחבי העולם וגורמים נוספים, שבאים מכל היבשות לשמוע על קידום המוכנות ברשויות המקומיות, ההכשרות והאימונים - מכיתה י' ועד משרדי הממשלה.`

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
    color:RGB(31,56,100);
}
</style>