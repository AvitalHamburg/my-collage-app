<template>
  <div id="page">
    <div v-if="state.showResults" class="results-container">
      <p class="blue-title">{{ points }}</p>
      <p class="grey-big">{{ congratsMessage }}</p>
      <div class="share-buttons" v-if="points >= 70">
        <button id="next-button" @click="captureAndShare()">צילום מסך ושיתוף</button>
        <button id="next-button" @click="goAgain()">חזרה להתחלה</button>
      </div>
      <div class="retry-button" v-if="points < 70">
        <button id="next-button" @click="retryQuiz()">נסה שוב</button>
      </div>
    </div>
    <div v-if="!state.showFinalScreen" class="container">
      <p class="question-number">{{ currentIndex + 1 }}/10</p>
      <div class="progress-bar">
        <div class="progress-bar-inner" :style="{ width: progressBarWidth }"></div>
      </div>
      <p class="grey-big" id="question">{{ currentQuestion }}</p>
      <button
        v-for="(answer, index) in currentAnswers"
        :key="index"
        @click="handleButtonClick(answer, index)"
        :class="[
          'answer-button',
          { 'selected-answer': index === selectedAnswerIndex }
        ]"
        :disabled="state.showResults"
        :id="`answer-button-${index}`"
      >
        {{ answer }}
      </button>
      
    </div>
    <div id="navigation-buttons" v-if="!state.showFinalScreen">
      <button
        id="next-button"
        @click="nextQuestion"
        :disabled="selectedAnswerIndex === null"
      >
        שאלה הבאה
      </button>
      <button
        id="prev-button"
        @click="prevQuestion"
        :disabled="currentIndex === 0"
      >
        שאלה קודמת
      </button>
    </div>
    <div v-if="pointsVisible">
      <p>נקודות: {{ points }}</p>
    </div>
    <!-- מסך סיום עם קלט של השם וכפתור להצגת הציון -->
    <div v-if="state.showFinalScreen && !state.showResults" class="final-screen">
      <p class="grey-bold">כדי לקבל ציון ותיעוד לסיום, יש להזין את השם הפרטי ושם המשפחה</p>
      <div class="name-input">
        <input type="text" v-model="firstName" placeholder="שם פרטי">
        <input type="text" v-model="lastName" placeholder="שם משפחה">
      </div>
      <button @click="showScore()" :disabled="!firstName || !lastName">הצג ציון</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, reactive, onMounted, watch ,defineEmits } from 'vue';
import html2canvas from 'html2canvas';

const emit = defineEmits(['go-again']);

const props = defineProps({
  pageHeader: String,
  questions: Array,
  answers1: Array,
  answers2: Array,
  answers3: Array,
  answers4: Array,
  correctAnswers: Array,
});

const state = reactive({
  showResults: false,
  showFinalScreen: false,
});

const currentIndex = ref(0);
const points = ref(0);
const maxPoints = props.questions.length * 10;

const currentQuestion = ref(props.questions[currentIndex.value]);
const currentAnswers = ref([
  props.answers1[currentIndex.value],
  props.answers2[currentIndex.value],
  props.answers3[currentIndex.value],
  props.answers4[currentIndex.value],
]);

const selectedAnswerIndex = ref(null);
const feedbackMessage = ref("");
const firstName = ref("");
const lastName = ref("");
const congratsMessage = ref("");

const handleButtonClick = (answer, index) => {
  selectedAnswerIndex.value = index;
  const correctAnswer = props.correctAnswers[currentIndex.value];
  if (answer === correctAnswer) {
    points.value += 10;
  }
};
const extraAnswer = ref("ה.כל התשובות נכונות");
let isExtraAnswerAdded = false;

const updateQuestionData = () => {
  currentQuestion.value = props.questions[currentIndex.value];
  currentAnswers.value = [
    props.answers1[currentIndex.value],
    props.answers2[currentIndex.value],
    props.answers3[currentIndex.value],
    props.answers4[currentIndex.value],
  ];

  if (currentIndex.value === 7 && !isExtraAnswerAdded) {
    currentAnswers.value.push(extraAnswer.value);
    isExtraAnswerAdded = true;
  } 

  selectedAnswerIndex.value = null;
};

const nextQuestion = () => {
  if (currentIndex.value < props.questions.length - 1) {
    currentIndex.value++;
    updateQuestionData();
  } else if (currentIndex.value === props.questions.length - 1) {
    state.showFinalScreen = true;
  }
};

const prevQuestion = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    updateQuestionData();
  }
};

const pointsVisible = ref(false);
const progressBarWidth = ref('0%');

const updateProgressBar = () => {
  const progress = ((currentIndex.value + 1) / props.questions.length) * 100;
  progressBarWidth.value = `${progress}%`;
};

const showScore = () => {
  congratsMessage.value = points.value >= 70 ? `כל הכבוד! ${firstName.value} עברת את השאלון!` : `לא נורא ${firstName.value}, אפשר לנסות שוב`;
  state.showResults = true;
};

const captureAndShare = () => {
  const currentDate = new Date().toLocaleDateString('he-IL'); 
  const captureTime = new Date().toLocaleTimeString('he-IL');

  const message = `
בוחן מסכם להיכרות המכללה
${firstName.value} ${lastName.value}: ציון 100!
תאריך: ${currentDate}
שעה: ${captureTime}

🧡 משפחת המכללה`;


  navigator.share({ text: message })
    .then(() => console.log('הודעה שותפה בהצלחה'))
    .catch(error => console.error('שגיאה בשיתוף:', error));
};


const retryQuiz = () => {
  currentIndex.value = 0;
  points.value = 0;
  firstName.value = "";
  lastName.value = "";
  congratsMessage.value = "";
  state.showResults = false;
  state.showFinalScreen = false;
};
const goAgain = () =>{
  emit('go-again')

}
onMounted(() => {
  updateProgressBar();
});

watch(currentIndex, () => {
  updateProgressBar();
});

</script>
<style scoped>
@font-face {
  font-family: "Heebo";
  font-weight: normal;
  src: url("../assets/fonts/Heebo-VariableFont_wght.woff"),
       format("woff");
}
@font-face {
  font-family: "Heebo-Black";
  font-weight: normal;
  src: url("../assets/fonts/Heebo-Black.woff"),
       format("woff");
}
@font-face {
  font-family: "Karantina";
  font-weight: normal;
  src: url("../assets/fonts/Karantina-Regular.woff"),
  format("woff");
}
.container {
  position: relative;
  top: 15vh;
  z-index: 0;
}
.results-container {
  position: relative;
  top: 15vh;
  text-align: center;
  font-size: 1.5em;
  color: rgb(31, 56, 100);
  font-family: "Heebo";
}
.answer-button {
  width: 80%;
  padding: 10px;
  margin-top: 2vh;
  background-color: rgb(255, 253, 253);
  color: rgb(89, 89, 89);
  border: solid black;
  border-radius: 50px;
  font-size: 1.2em;
  font-family: "Heebo";
  z-index: 0;
}
.selected-answer {
  background-color: rgb(116, 142, 172);
  color: white;
}

#navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20vh; /* Adjusted top margin */
  margin-bottom: 3vh; /* Add a bottom margin for spacing */
  position: absolute;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
}

#prev-button {
  background-color: rgb(255, 140, 0);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 1.2em;
  font-family: "Heebo";
}
#next-button {
  background-color: rgb(28, 180, 227);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 1.2em;
  font-family: "Heebo";
  margin-top: 5%;
}
#prev-button:disabled,
#next-button:disabled {
  background-color: grey;
}
#question {
  font-size: 1.4em;
  font-family: "Heebo";
  color: rgb(31, 56, 100);
  font-weight: bold;
  top: 35vh;
  direction: rtl;
}
#page-header {
  position: absolute;
  top: 8vh;
  right: 50%;
  transform: translateX(50%);
  font-size: 2em;
  width: 90vw;
  text-overflow: none;
  color: rgb(31, 56, 100);
}
.grey-big {
  font-size: 1.5em;
  margin-bottom: 2vh;
  direction: rtl;
  font-family: "Heebo";
  color: rgb(89, 89, 89);
}
.progress-bar {
  position: relative;
  margin-top: 20%;
  background-color: #c0c0c0;
  height: 0.5rem;
  width: 90%;
  left: 5%;
  border-radius: 1.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.progress-bar-inner {
  position: absolute;
  z-index: 1;
  height: 100%;
  background-color: rgb(28, 180, 227);
  border-radius: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transition: width 0.3s ease;
}
.quetion-number {
  font-family: "Karantina";
  font-size: 3.5em;
  margin-bottom: 0%;
}
.final-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.name-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.name-input input {
  padding: 10px;
  margin: 5px 0;
  font-size: 1em;
  font-size: 1.5em;
  border-radius: 50px;
  width: 60vw;
  height: 6vh;
  border: 1px solid #ccc;
  background-color: rgb(71, 71, 71);
  color:white;
  font-family: "heebo";
  text-align: center;
}
.name-input input:focus {
  outline: none;
  background-color: rgb(28, 180, 227);
}
.final-screen button {
  padding: 10px 20px;
  background-color: rgb(28, 180, 227);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 10px;
}
.name-input input::placeholder {
  text-align: center;
  font-size: 1.3em;
  color: rgba(255, 255, 255, 0.5);
  font-family: "heebo";
}
.final-screen button:hover {
  background-color: rgb(20, 140, 180);
}
.grey-bold {
  font-size: 1.5em;
  margin-bottom: 2vh;
  direction: rtl;
  text-align: center;
  width: 80vw;
  font-family: "Heebo-Black";
  color: rgb(89, 89, 89);
}
.blue-title {
  font-family: "karantina";
  color: rgb(20, 140, 180);
  font-size: 3.7em;
  margin-bottom: 0%;
}
.question-number{
  position: absolute;
  font-family: "karantina";
  color:rgb(89,89,89);
  font-size:4.5em;
  top:-45%;
  right:50%;
  transform: translateX(50%);
}

</style>