<template>
  <div id="page">
    <img id="shape" :src="turquize">
   <h1 id="page-header">  אימוני רשויות   </h1>
   <ScrollText id="scroll-text" :innerText="emergencyText" :innerText2="emergencyText2" :innerText3="emergencyText3" :imageNumber="5"></ScrollText>
  </div>
</template>

<script setup>
import ScrollText from './ScrollText.vue';
import turquize from "../assets/imgs/turquize.png";
const emergencyText =`המכללה לא רק מכשירה אלא גם מאמנת את הרשויות המקומיות לתרגול מצבי חירום כמו מלחמה, טרור, אסון טבע, אסון אזרחי, מגיפה וסייבר.בשעת חירום, הרשות המקומית עוברות לעבוד בתצורה של מכלולים. כלומר, עוזבים את העבודה הרגילה שלהם ומתרכזים רק  בנושאים רלוונטיים ומשמעותיים לטיפול באירוע` 
const emergencyText2 =`במכללה, אנחנו מכשירים את המנהלים והמנהלות וסגניהם, של 8 בעלי תפקידים ברשות:סגן או סגנית הרשות או מנכ"ל/מנכ"לית הרשות, ממונה חירום וביטחוןומכלולי אוכלוסייה, חינוך, מידע לציבור, לוגיסטיקה, הנדסה ומינהל כללי ומשא"ן. לאלה מתווספת גם הכשרה צבאית ליקל"ר, שהוא נציג פיקוד העורף ברשות.`
const emergencyText3 =`אימון של רשות מקומית מתרגל את הסינכרון בין המכלולים והיכולת לגבש תמונת מצב והערכת מצב, תוך התמודדות עם תרחיש הייחוס והסימולציה למצב חירום. האימון יכול להתקיים ברשות עצמה, אז כל צוות מינהלת האימונים נוסע אליהם או במתקן הסימולטור, שהם באים אלינו לצד השני של הבסיס, כשעשרות אנשים עוזבים את הרשות, באים לתרגל במנותק מיום העבודה שלהם ומקבלים הערכה ומשוב על פעילותם.`
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
  top:5vh;
  right: 50%;
  transform: translateX(50%);
  font-size: 2.5em;
  width: 90vw;
  text-overflow: none;
  color:RGB(31,56,100);
}
#shape{
position: absolute;
left:0%;
top:0%;
height: 18vh;
}
</style>