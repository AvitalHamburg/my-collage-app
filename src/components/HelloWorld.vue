

<template>
  <div id="intro">
    <div id="shadow"></div>
    <img :src="state.imagesrc" alt="White Logo" id="white-logo" :class="{ 'move-to-top-right': state.isLogoChanged }">
    <div  v-if="state.showIntro">
      <h1 id="welcome-text">ברוכים וברוכות הבאים ללומדת היכרות עם המכללה</h1>
      <p id="introduction">בלומדה זו תלמדו על המכללה תוכלו לקרוא בגלילה ולשחק במשחקונים מוכנים?</p>
      <img src="../assets/imgs/nextWhiteBtn.png"  id="next-wBtn" @click="moveNextPage"> 
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, getCurrentInstance } from 'vue'

import whiteLogoGif from "../assets/imgs/whiteLogo.gif";
import inriLogoSvg from "../assets/imgs/inri-logo-white2.svg";

const { emit } = getCurrentInstance();

const state = reactive({
  imagesrc: whiteLogoGif,
  isLogoChanged: false,
  showIntro: false
});

function changeImageSourceAfterTimeout() {
  setTimeout(() => {
    state.imagesrc = inriLogoSvg;
    state.isLogoChanged = true;
    state.showIntro = true;
  }, 4000);
}

function moveNextPage(){
  emit("move-next");
}

onMounted(() => {
  changeImageSourceAfterTimeout();
});
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



*{
  overflow: hidden;
  direction: rtl;
}
#intro {
  position:absolute;
  top: 0%;
  right: 50%;
  transform: translateX(50%);
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/imgs/Bg1.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0%;
}
#shadow {
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: rgb(59, 59, 59);
  top: 0%;
  right: 50%;
  transform: translateX(50%);
  opacity: 0.5;
  z-index: 2;
}

#white-logo {
  position: absolute;
  width: 50vw;
  height: auto;
  z-index: 5;
  right: 50%;
  transform: translateX(50%);
  top: 5%;
}
#welcome-text{
    color: white;
    position:absolute;
    right: 50%;
    transform: translateX(50%);
    font-size: 1.7em;
    text-align: center;
    top:30vh;
    z-index: 5;
    width:90vw;
    font-family: "Heebo";

}
#introduction{
  position:absolute;
  color: white;
  right:50%;
  transform:translateX(50%);
  width:80vw;
  height:auto;
  z-index: 5;
  font-size: 1.5em;
  bottom:30vh;
}
@keyframes bounce2 {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}


#next-wBtn{
  position:absolute;
  z-index: 5;
  right:50%;
  transform: translateX(50%);
  bottom:20vh;   
  animation: bounce2 2s ease infinite; 
}
@keyframes bounce2 {
    0% {
        bottom: 20vh;
    }
    50%{
      bottom: 15vh;
    }
    100%{
      bottom: 20vh;
    }
}
.read-the-docs {
  color: #888;
}

.move-to-top-right {
  animation: moveTopRight 2s ease forwards;
}

@keyframes moveTopRight {
  from {
    top: 5%;
    right: 50%;
    transform: translateX(50%);
    width: 50vw;
    height: auto;
  }
  to {
    width: 40vw;
    height: auto;
    right:30%;
  }
}
</style>


