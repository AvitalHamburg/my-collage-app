<template>
    <div class="button-container">
      <button
        v-for="(subject, index) in subjects"
        :key="index"
        @click.once="moveToPage(index)"
        :class="{ 
          'btn-class': states[index] === 0, 
          'active-btn': states[index] === 1, 
          'selected-btn': visitedMenuPage.includes(index),
        }"
        
      >
        {{ subject }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { reactive, defineProps, defineEmits } from 'vue';
  
  const { visitedMenuPage } = defineProps(['visitedMenuPage']);
  const emit = defineEmits(['go-next']);
  
  const subjects = ['מי זאת המכללה', 'פעילות המכללה','גמול השתלמות', 'קש"ח', 'אימוני הרשויות', 'המכללה', 'ספריה'];
  const states = reactive(subjects.map(() => 0));
  
  const moveToPage = (index) => {
    states[index] = 1;
    emit('next-page',  index + 1);
  };
  </script>
  
  <style scoped>
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .btn-class {
    font-size: 1.5em;
    background-color:rgba(52, 72, 105, 0);
    color: #ffffff;
    cursor: pointer;
    transition: color 0.3s ease;
    width: 100vw;
    height: 10vh;
    border-radius: 0; /* סורק את רדיוס הכפתור */
    border-bottom: #ffffff solid;
  }
  
  .btn-class:hover {
    color: #c9d2ddb4;
  }
  
  .active-btn {
    opacity: 0.6;
  }

  .selected-btn{
    background-color: rgba(170, 170, 170, 0.308);
  }
  </style>
  