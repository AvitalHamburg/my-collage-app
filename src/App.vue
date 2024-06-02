<template>
  <div>
    <HelloWorld v-if="state.page === 0" @move-next="nextPage"></HelloWorld>
    <div v-if="state.page > 0" :class="{ 'open': state.openHamburger }" id="hamburger-icon" @click="showHamburger">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <img v-if="state.page > 0 && !state.openHamburger" :src="collegeLogo" id="logo">
    <Menu v-if="state.showMenu" :visitedMenuPage="state.visitedPages" @go-next="movePage"></Menu>
    <KnowCollage v-if="state.textNum === 1" @go-menu="backToMenu"></KnowCollage>
    <ActiveCollage v-if="state.textNum === 2" @go-menu="backToMenu"></ActiveCollage>
    <Payment v-if="state.textNum === 3"@menu-back="backToMenu"></Payment>
    <OutsideCollage v-if="state.textNum === 4" @menu-back="backToMenu"></OutsideCollage>
    <TrainingCollage v-if="state.textNum === 5"></TrainingCollage>
    <LocationCollage v-if="state.textNum === 6"></LocationCollage>
    <LibraryCollage v-if="state.textNum === 7"></LibraryCollage>
    <div class="overlay" v-if="state.openHamburger" @click="showHamburger">
    </div>
    <Hamburger 
      id="hamburger-page" 
      v-if="state.openHamburger" 
      :visitedMenuPage="state.visitedPages" 
      @next-page="movePage"
    ></Hamburger>  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Menu from './components/Menu.vue';
import Payment from './components/Payment.vue';
import Hamburger from './components/Hamburger.vue';
import HelloWorld from './components/HelloWorld.vue';
import KnowCollage from './components/KnowCollage.vue';
import ActiveCollage from './components/ActiveCollage.vue';
import OutsideCollage from './components/OutsideCollage.vue';
import TrainingCollage from './components/TrainingCollage.vue';
import LocationCollage from './components/LocationCollage.vue';
import LibraryCollage from './components/LibraryCollage.vue';
import collegeLogo from "./assets/imgs/collegeLogo.png";



const state = reactive({
  page: 0,
  showMenu: false,
  textNum: 0,
  openHamburger:false,
  visitedPages: []
});

function nextPage() {
  state.page++;
  state.showMenu = true;
}

const movePage = (number) => {
  state.textNum = number;
  state.showMenu = false;
  state.openHamburger=false;
  state.visitedPages.push(number-1);
}

const backToMenu = () => {
  state.showMenu = true;
  state.textNum = 0;
}
const showHamburger = () =>{
      state.openHamburger = !state.openHamburger;
}
</script>

<style scoped>
body {
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  background-image: url("../assets/imgs/Bg2.png");
  padding: 0%;

}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #252424; 
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);  /* Adjust the transparency as needed */
  z-index: 8998; /* Make sure the overlay is below the hamburger menu but above other content */
  transition: transform 0.5s; 
  animation: slideIn 0.5s forwards; 
}
#hamburger-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; 
  height: 100vh; 
  transition: transform 0.5s; 
  animation: slideIn 0.5s forwards; 
  margin-top: 10vh; /* Adjust the margin-top value as needed */
  z-index: 9999;
}


#hamburger-icon {
  position: absolute;
  top: 2vh; 
  left: 3vw; 
  width: 10vw;
  height: 10vh; 
  z-index: 9999; 
}

.bar {
  width: 8vw;
  height: 1vw;
  background-color: black;
  margin: 2vw 0;
  transition: 0.4s;
}

#hamburger-icon.open .bar:nth-child(1) {
  transform: rotate(-45deg) translate(-2vw, 1.1vw);
  background-color: aliceblue;
}

#hamburger-icon.open .bar:nth-child(2) {
  opacity: 0;
}

#hamburger-icon.open .bar:nth-child(3) {
  transform: rotate(45deg) translate(-3vw, -2.6vw);
  background-color: aliceblue;
}
#logo{
  position: absolute;
  z-index: 9999; 
  height: 8vh;
  width: auto;
  right: 1%;
  top: 2%;
}



</style>

