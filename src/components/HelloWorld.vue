<template>
  <div id="intro">
    <video id="video" v-if="!state.isVideoEnded" src="../assets/media/introVid.mp4" autoplay muted></video>
    
    <!-- Vue transition wrapper -->
    <transition name="fade">
      <div id="intro-text" v-if="state.showIntro">
        <img :src="inriLogoSvg" alt="White Logo" id="white-logo" class="move-to-center">
        <h1 id="welcome-text">ברוך הבא או הבאה למשפחת המכללה</h1>
        <p id="introduction">בחצי שעה הקרובה תכירו ותלמדו על המכללה הלאומית לאיתנות ישראלית, במה אנחנו מתמחים, את מי אנחנו מכשירים, מאמנים ואיך כל זה קשור לשלטון העות'מאני. וכן, בארור שיש בוחן בסוף :) בהצלחה!</p>
        <img ref="nextBtn" :src="nextButton" id="next-wBtn" @click="moveNextPage">
      </div>
    </transition>
  </div>
</template>

<script setup>
import { reactive, onMounted, getCurrentInstance } from 'vue';
import nextButton from "../assets/imgs/whiteNextBtn.png";
import inriLogoSvg from "../assets/imgs/inri-logo-white2.svg";

const { emit } = getCurrentInstance();

const state = reactive({
  isVideoEnded: false,
  showIntro: false,
});

function changeImageSourceAfterTimeout() {
  setTimeout(() => {
    state.isVideoEnded = true;
  }, 13000);
  setTimeout(() => {
    state.showIntro = true;
  }, 13500);
}

function moveNextPage() {
  emit("move-next");
}

onMounted(() => {
  changeImageSourceAfterTimeout();
});
</script>

<style scoped>
@font-face {
  font-family: "Heebo";
  font-weight: normal;
  src: url("../assets/fonts/Heebo-VariableFont_wght.woff"), format("woff");
}

@font-face {
  font-family: "Karantina";
  font-weight: normal;
  src: url("../assets/fonts/Karantina-Regular.woff"), format("woff");
}

* {
  overflow: hidden;
  direction: rtl;
}

#intro {
  position: absolute;
  top: 0;
  right: 50%;
  transform: translateX(50%);
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/imgs/Bg1.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
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

#welcome-text {
  color: white;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  font-size: 4em;
  text-align: center;
  top: 15vh;
  z-index: 5;
  width: 90vw;
  font-family: "karantina";
}

#introduction {
  position: absolute;
  color: white;
  right: 50%;
  transform: translateX(50%);
  width: 80vw;
  z-index: 5;
  font-size: 1.4em;
  top: 45vh;
  font-family: "Heebo";
}

#next-wBtn {
  position: absolute;
  z-index: 5;
  right: 50%;
  transform: translateX(50%);
  bottom: 20vh;
  animation: bounce2 2s ease infinite;
  height: 10vh;
  width: auto;
}

@keyframes bounce2 {
  0% {
    bottom: 8vh;
  }
  50% {
    bottom: 5vh;
  }
  100% {
    bottom: 8vh;
  }
}

.move-to-center {
  position: absolute;
  width: 50vw;
  height: auto;
  z-index: 5;
  right: 50%;
  transform: translateX(50%);
  top: 5%;
}

#video {
  position: absolute;
  width: auto;
  height: 100vh;
  right: 50%;
  transform: translateX(50%);
  top: 0;
}

/* Fade animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
