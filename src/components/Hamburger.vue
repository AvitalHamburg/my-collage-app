<template>
    <div>
      <div v-if="menuState.menuTrue">
        <div class="button-container">
          <div
            v-for="(subject, index) in subjects"
            :key="index"
            @click.once="handleButtonClick(index + 1)" 
            :class="{ 'btn-class': states[index] === 0, 'active-btn': states[index] === 1 }"
            >
            {{ subject }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, defineEmits } from 'vue';
  
  const emit = defineEmits(['button-click']); // Define the button-click event
  
  const subjects = ['מי זאת המכללה', 'פעילות המכללה', 'קש"ח', 'אימוני הרשויות', 'המכללה', 'ספריה'];
  const states = reactive(subjects.map(() => 0));
  const menuState = reactive({ 
    menuTrue: true,
    numOfSub: -1
  });
  const pageState = reactive({
    textNum: -1
  });
  
  const handleButtonClick = (pageNum) => { // הוספתי פונקציה זו שתעביר את מספר העמוד באירוע
    emit('button-click', pageNum);
  };
  
  </script>
  
  <style scoped>
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* Align buttons to the left */
  }
  
  .btn-class {
    font-size: 1.5em;
    padding: 10px 20px;
    background-color: #007bff; /* Blue background color */
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border: white solid;
    width: 35vw;
  }
  
  .btn-class:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
  
  .active-btn {
    opacity: 0.6;
  }
  </style>
  