<template>
    <div class="scrollable-text-box">
      <div class="content" ref="content">
        <p class="main-text">{{ innerText }}</p>
        <img class="image-content" :src="imageSrc" alt="Collage Image">
        <p class="image-description">{{ innerText2 }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, watchEffect } from 'vue';
  
  export default {
    props: {
      innerText: String,
      innerText2: String,
      imageNumber: Number
    },
    setup(props) {
      const content = ref(null);
      const imageSrc = ref('');
  
      // Watch for changes in text content to adjust scroll
      watchEffect(() => {
        const el = content.value;
        if (el) {
          el.scrollTop = el.scrollHeight;
        }
      });
  
      // Load the image dynamically based on the image number prop
      watchEffect(() => {
        try {
          const imgSrc = `../assets/imgs/collageImg${props.imageNumber}.png`;
          import(imgSrc).then(module => {
            imageSrc.value = module.default;
          });
        } catch (error) {
          console.error('Error loading image:', error);
        }
      });
  
      return {
        content,
        imageSrc
      };
    }
  };
  
  </script>
  <style scoped>
  .scrollable-text-box {
    width: 90vw;
    height: 60vh;
    overflow-y: auto;
    border: 1px solid #ccc;
    direction: ltr; /* Set text direction to left-to-right */
    font-size: 24px;
    border: solid;
    border-radius: 9px;
  }
  
  .content {
    padding: 10px;
  }
  
  .main-text {
    text-align:center ;
    margin-bottom: 5vh; /* Add margin of 20px below the main text */
  }
  
  .image-description {
    margin-top: 5vh;
     /* Add margin of 20px above the image description */
  }
  .image-content {
    width: 100%; /* Set width to 100% to fill the container */
    height: auto; /* Set height to auto for dynamic height */
    object-fit: cover; /* Ensure the image covers the entire container */
  }
  
  /* Customize scrollbar */
  ::-webkit-scrollbar {
    width: 12px; /* Width of the scrollbar */
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Color of the scrollbar track */
    border-radius: 50px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: RGB(31,56,100); /* Color of the scrollbar thumb */
    border-radius: 50px; /* Make the scrollbar thumb elliptical */
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555555; 
  }
  
  
  
  
  </style>