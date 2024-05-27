<template>
    <div>
      <h1>{{ pageHeader }}</h1>
      <p id="question">{{ currentQuestion }}</p>
      <button v-for="(answer, index) in currentAnswers" :key="index" @click="handleButtonClick(answer)" class="answer-button">
        {{ answer }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref } from 'vue';
  
  const props = defineProps({
    pageHeader: String,
    questions: Array,
    answers1: Array,
    answers2: Array,
    answers3: Array,
    correctAnswers: Array
  });
  
  const currentIndex = ref(0);
  
  const currentQuestion = props.questions[currentIndex.value];
  const currentAnswers = [props.answers1[currentIndex.value], props.answers2[currentIndex.value], props.answers3[currentIndex.value]];
  
  const handleButtonClick = (answer) => {
    const correctAnswer = props.correctAnswers[currentIndex.value];
    if (answer === correctAnswer) {
      // Handle correct answer logic
    } else {
      // Handle incorrect answer logic
    }
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
  
  .answer-button {
    width: 90%;
    padding: 10px;
    margin-top: 10px;
    background-color: rgb(31, 56, 100);
    color: white;
    border: none;
    border-radius: 7px;
    font-size: 1.3em;
    font-family: "Heebo";
  }
  
  #question {
    font-size: 1.3em;
    font-weight: bold;
    font-family: "Heebo";
    color: rgb(31, 56, 100);
  }
  </style>
  