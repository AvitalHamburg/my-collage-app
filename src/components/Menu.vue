
<template>
  <div id="page">
    <h1 id="main-title">עמוד הבית</h1>
    <div class="button-container">
      <button
        v-for="(subject, index) in subjects"
        :key="index"
        @click.once="moveToPage(index)"
        :class="{ 
          'btn-class': states[index] === 0, 
          'active-btn': states[index] === 1, 
          'selected-btn': visitedMenuPage.includes(index),
          'disabled-btn': visitedMenuPage.includes(index) // הוספת סגנון לכפתורים שכבר לחצנו עליהם
        }"
        :disabled="visitedMenuPage.includes(index)"
        >
        {{ subject }}
      </button>

    </div>
  </div>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from 'vue';

const { visitedMenuPage } = defineProps(['visitedMenuPage']);
const emit = defineEmits(['go-next']);

const subjects = ['מי זאת המכללה', 'פעילות המכללה', 'קש"ח', 'אימוני הרשויות', 'המכללה', 'ספריה'];
const states = reactive(subjects.map(() => 0));

const moveToPage = (index) => {
  states[index] = 1;
  emit('go-next',  index + 1);
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


.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 12vh;
  right: 50%;
  transform: translateX(50%);
}

.btn-class {
  font-size: 1.5em;
  margin-top: 2vh; /* Adjusted margin */
  width: 80vw; /* Fixed width for all buttons */
  height: auto; /* Allow height to adjust based on content */
  text-align: center;
  padding: 3vh 0; /* Adjusted padding */
  background-color: rgb(31,56,100);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 15px;
}

.active-btn {
  font-size: 1.5em;
  margin-top: 2vh; /* Adjusted margin */
  width: 60vw; /* Fixed width for all buttons */
  height: auto; /* Allow height to adjust based on content */
  text-align: center;
  padding: 1.5vh 0; /* Adjusted padding */
  background-color: rgb(97, 97, 99);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  opacity: 0.6;
}

#main-title {
  position: absolute;
  color: rgb(31, 56, 100);
  font-size: 2.5em;
  top: 3vh;
  right: 50%;
  transform: translate(50%);
  width:100%;
}
.selected-btn {
    background-color: grey;
}
.disabled-btn {
  opacity: 0.6; /* קיבולת נמוכה - פיהוק רב */
  cursor: not-allowed; /* אסור לחיצה */
}

</style>
