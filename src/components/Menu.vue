<template>
  <div id="page">
    <div v-if="state.menuTrue === true">
      <h1 id="main-title">עמוד הבית</h1>
      <div class="button-container">
        <div
          v-for="(subject, index) in subjects"
          :key="index"
          @click.once="moveToPage(index)"
          :class="{ 'btn-class': states[index] === 0, 'active-btn': states[index] === 1 }"
        >
          {{ subject }}
        </div>
      </div>
    </div>
    <Page :textNum="state.numOfSub"  v-else ></Page>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Page from './Page.vue';
const subjects = ['מי זאת המכללה', 'פעילות המכללה', 'קש"ח', 'אימוני הרשויות', 'המכללה', 'ספריה'];
const states = reactive(subjects.map(() => 0));
const state = reactive({ 
  menuTrue: true,
  numOfSub: -1
});

const moveToPage = (index) => {
  states[index] = 1;
  state.menuTrue = !state.menuTrue; 
  state.numOfSub = index + 1; // הוספת 1 לאינדקס
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
  top: 10vh;
  right: 50%;
  transform: translateX(50%);
}

.btn-class {
  font-size: 1.5em;
  margin-top: 4vh;
  width: 60vw; /* רוחב קבוע לכל הכפתורים */
  height: 3vh;
  text-align: center;
  padding: 3vh;
  background-color: navy; /* כחול כהה */
  color: white; /* צבע טקסט לבן */
  border: none;
  cursor: pointer;
  border-radius: 15px;
}

.active-btn {
  font-size: 1.5em;
  margin-top: 4vh;
  width: 60vw; /* רוחב קבוע לכל הכפתורים */
  height: 3vh;
  text-align: center;
  padding: 3vh;
  background-color: rgb(97, 97, 99); /* כחול כהה */
  color: white; /* צבע טקסט לבן */
  border: none;
  cursor: pointer;
  border-radius: 15px;
  opacity: 0.6;
}
#main-title{
  color:navy;
}

</style>
