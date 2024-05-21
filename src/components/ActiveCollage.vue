<template>
  <div id="page">
   <h1 id="page-header"> פעילות המכללה  </h1>
   <ScrollText id="scroll-text" :innerText="emergencyText" :innerText2="emergencyText2" :imageNumber="2"></ScrollText>
    <Payment></Payment>
  </div>
  </template>

<script setup>
import ScrollText from './ScrollText.vue';
import Payment from './Payment.vue';
const emergencyText = `    פעילות המכללה מתחלקת בין ארבע מגמות: 
מגמת משרדי הממשלה, מגמת הכשרות אזרחיות, מגמת אימונים לרשויות מקומיות ומגמת מפקדות שגם מעבירים קורסים וגם מאמנים.
`;
const emergencyText2 =` למכללה יש מטה מקצועי - משרתי קבע ומילואים, בכירים מרח"ל ויועצים. 
סגל המרצים כולל מומחים מקצועיים מפיקוד העורף, רח"ל, משרדי הממשלה, המינהל הציבורי והאקדמיה.`

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