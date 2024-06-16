<template>
  <div id="page">
   <h1 id="page-header"> נכסי המכללה</h1>
   <div id="scroll-text">
    <p class="main-text" ref="text1">{{ emergencyText }}</p>
    <span>
    <a href="https://www.facebook.com/ilResilience" target="_blank"><img class="brand" :src="faceBook" >
    </a>
    <a href="https://x.com/ILresilience" target="_blank"><img class="brand" :src="twitter" >
    </a>
    <a href="https://www.instagram.com/ilresilience/" target="_blank"><img class="brand" :src="instagram" >
    </a>
    <a href="https://www.instagram.com/ilresilience/" target="_blank"><img class="brand" :src="linkedin" >
    </a>
  </span>
    <a id="site-link" href="https://inri.orc.org.il/">לחצו כאן לאתר המכללה</a>
    <img :src="nextBtn" id="next-btn">

  </div>
  </div>
  </template>

<script setup>
import { reactive, onMounted, getCurrentInstance ,defineEmits, ref} from 'vue';
import nextBtn from "../assets/imgs/nextBtn.png";
import faceBook from "../assets/imgs/facebook.png";
import twitter from "../assets/imgs/twitter.png";
import instagram from "../assets/imgs/instagram.png";
import linkedin from "../assets/imgs/linkedin.png";
const emergencyText = `הכירו את אתר המכללה, באמצעותו נרשמים להכשרות האזרחיות שלנו ממשרדי הממשלה והרשויות המקומיות. אפשר ללמוד שם עוד על פעילויות המכללה ולחפש תוכן מקצועי בספרייה. 
ובגלל שאתם גם ככה שם :) בואו לעשות לנו לייק ולעקוב אחרינו ברשתות החברתיות 
`
const emit = defineEmits(['go-menu']);

const state = reactive({ 
showGame:false
});

const openFacebook = () => {
window.open("https://www.facebook.com/ilResilience", "_blank");
};
const GoGame = () => {
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
top:150vh;
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
.brand{
  width:10vw;
  height: auto;
}
span a {
  margin-right: 5vw; /* רווח מימין */
}

.brand {
  width: 10vw;
  height: auto;
}
#site-link{
  position: absolute;
  top:80vw;
  right: 50%;
  transform: translateX(50%);
}
</style>
