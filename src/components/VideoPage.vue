<template>
  <div id="page">
    <h1 id="page-header"> סרטון </h1>
    <video id="video" src="../assets/media/videoCollage.mp4" controls ></video>
    <p id="user-massage">נגמר הסרטון? יופי לחצ/י כאן לבדוק את הזיכרון</p>

    <img  :src="nextBtn" id="next-btn" @click.once="nextSubject">
    <Question v-if="state.showQuestion" @menuBack="goToMenu"></Question>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, reactive } from 'vue';
import nextBtn from "../assets/imgs/nextBtn.png";
import Question from './Question.vue';
const emit = defineEmits(['backMenu']);


const state = reactive({ 
  showQuestion: false,
});


const nextSubject = () => {
  state.showQuestion=true;
};
const goToMenu = () =>{
  console.log('backMenu in the video component');
  emit('backMenu');

};
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

#page-header{
  position: absolute;
  top:5vh;
  right: 50%;
  transform: translateX(50%);
  font-size: 2.5em;
  width: 90vw;
  text-overflow: none;
  color:rgb(31,56,100);
}

#user-massage{
  position: absolute;
  color:rgb(31,56,100);
  font-size: 1.5em;
  width:80vw;
  right:50%;
  transform: translateX(50%);
  bottom:25vh;
}
#next-btn{
  position: absolute;
  right:50%;
  transform: translateX(50%);
  bottom:15vh;
}
#video{
position: absolute;
width:90vw;
height: auto;
right:50%;
transform: translateX(50%);
top:30%;
}
#next-btn {
position: absolute;
right: 45%;
transform: rotate(2.5deg);
bottom: 15%;
animation: bounce2 2s ease infinite; /* Add animation delay */
animation-delay: 15sec;
}

</style>