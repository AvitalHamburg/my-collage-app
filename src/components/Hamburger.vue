<template>
  <div class="button-container">
    <button
      v-for="(subject, index) in subjects"
      :key="index"
      @click.once="handleButtonClick(subject, index)"
      :class="{ 
        'btn-class': (subject !== 'משוב' && states[index] === 0) || (subject === 'משוב' && allOtherButtonsVisited),
        'active-btn': states[index] === 1, 
        'selected-btn': visitedMenuPage.includes(index),
        'disabled-btn': (subject === 'משוב' && !allOtherButtonsVisited) 
      }"
      :disabled="subject === 'משוב' && !allOtherButtonsVisited"
    >
      <div class="button-content">
        {{ subject }}
      </div>
      <div class="separator"></div>
    </button>
  </div>
</template>

<script setup>
import { reactive, computed, defineProps, defineEmits } from 'vue';

const { visitedMenuPage } = defineProps(['visitedMenuPage']);
const emit = defineEmits(['next-page']);

const subjects = [
  'מי זאת המכללה',
  'המכללה בחרבות ברזל',
  'נכסים דיגיטליים',
  'הספרייה הלאומית לחירום',
  'קש"ח',
  'מה נמצא איפה?',
  'משוב'
];

const states = reactive(subjects.map(() => 0));

// מחשב אם כל הכפתורים מלבד "משוב" בוקרו
const allOtherButtonsVisited = computed(() => {
  return visitedMenuPage.length === 8;
});

const handleButtonClick = (subject, index) => {
  if (subject === 'משוב') {
    if (allOtherButtonsVisited.value) {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSflGabIbTG0fNDp_MGmI64a9xzg4AHkJNyH7DovtxicCIuIhw/viewform?usp=sf_link', '_blank');
    }
  } else {
    states[index] = 1;
    emit('next-page', index + 1);
  }
};
</script>

<style scoped>
@font-face {
  font-family: "Heebo";
  font-weight: normal;
  src: url("../assets/fonts/Heebo-VariableFont_wght.woff"),
    format("woff");
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 20px; /* Adjust the margin-top value as needed */
}

.btn-class {
  position: relative; /* Ensure button content positioning */
  font-size: 1.5em;
  background-color: rgba(23, 90, 133, 0);
  color: #ffffff;
  cursor: pointer;
  transition: color 0.3s ease;
  width: 100vw;
  height: 10vh;
  border-radius: 0; /* Adjust the button radius */
  font-family: "Heebo";
  border: none; /* Remove default button border */
}

.btn-class:hover {
  color: #c9d2ddb4;
}

.active-btn {
  opacity: 0.6;
}

.selected-btn {
  background-color: rgb(238, 238, 238);
  color: rgb(89, 89, 89);
}

.disabled-btn {
  opacity: 0.6;
  font-size: 1.5em;
  background-color: rgba(23, 90, 133, 0);
  color: #ffffff;
  cursor: pointer;
  transition: color 0.3s ease;
  width: 100vw;
  height: 10vh;
  border-radius: 0; /* Adjust the button radius */
  font-family: "Heebo";
  border: none; /* Remove default button border */
  cursor: not-allowed; /* Not-allowed cursor for disabled state */
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center; /* Center content horizontally */
  width: 100%;
  height: 100%;
  text-align: center; /* Center text inside button */
  direction: rtl;
}

.separator {
  width: calc(100% - 40px); /* Adjust width to fit within button */
  height: 0.5px; /* Separator height */
  background-color: #ffffff; /* Separator color */
  margin-left: 20px; /* Adjust margin to center the separator */
  margin-top: 13px;
}
</style>
