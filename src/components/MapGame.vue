<template>
    <div id="page">
      <img class="game-board" src="../assets/imgs/collageMap.jpeg">
      <div class="container">
        <div
          v-for="index in 8"
          :key="'item' + index"
          :id="'item' + index"
          class="draggable-item"
          draggable="true"
          @dragstart="dragStart"
          @dragend="dragEnd"
          @touchstart="touchStart"
          @touchend="touchEnd"
          @touchmove="touchMove"
        >
          Item {{ index }}
        </div>
      </div>
  
      <div class="container1">
        <div
          v-for="index in 8"
          :key="'container' + index"
          :id="'container' + index"
          class="dropzone"
          @dragover.prevent
          @drop="drop"
          @dragenter="dragEnter"
          @dragleave="dragLeave"
        >
          <!-- Adjust content as needed -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
        event.target.classList.add('dragging');
      },
      dragEnd(event) {
        event.target.classList.remove('dragging');
      },
      touchStart(event) {
        // Store initial touch position
        this.startX = event.touches[0].clientX - event.target.getBoundingClientRect().left;
        this.startY = event.touches[0].clientY - event.target.getBoundingClientRect().top;
        
        // Store the dragged element's ID in data transfer
        event.dataTransfer.setData('text/plain', event.target.id);
        event.target.classList.add('dragging');
      },
      touchMove(event) {
        // Calculate new position based on touch movement
        const offsetX = event.touches[0].clientX - this.startX;
        const offsetY = event.touches[0].clientY - this.startY;
        
        // Apply the new position to the dragged element
        event.target.style.left = offsetX + 'px';
        event.target.style.top = offsetY + 'px';
      },
      touchEnd(event) {
        event.target.classList.remove('dragging');
      },
      drop(event) {
        event.preventDefault();
        const itemId = event.dataTransfer.getData('text/plain');
        const draggedItem = document.getElementById(itemId);
        const dropZoneId = event.target.id;
        
        if (itemId === `item${dropZoneId.slice(-1)}`) {
          draggedItem.parentNode.removeChild(draggedItem);
          event.target.appendChild(draggedItem);
        }
      },
      dragEnter(event) {
        event.target.classList.add('dragover');
      },
      dragLeave(event) {
        event.target.classList.remove('dragover');
      },
    },
  };
  </script>
  
  <style scoped>
  #page {
    background-color: aliceblue;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .game-board {
    width: 100%;
    height: auto;
    position: absolute;
    z-index: 0;
    right: 0;
    top: 30%;
  }
  
  .draggable-item {
    padding: 5px;
    background-color: rgb(89, 89, 89);
    border: 1px solid #0d0d0d;
    border-radius: 500px;
    width: 15vw;
    cursor: grab;
    margin-bottom: 10px;
    color: white;
  }
  
  .dropzone {
    padding-bottom: 12px;
    background-color: #e0e0e0;
    border: 2px dashed black;
    border-radius: 500px;
    width: 20vw;
    height: 3vh;
    cursor: pointer;
  }
  
  .dragging {
    opacity: 0.5;
  }
  
  .dragover {
    background-color: #c0c0c0;
  }
  
  .container {
    position: absolute;
    left: 6%;
    top: 25%;
    gap: 5%;
    z-index: 10;
    justify-content: center;
  }
  
  .container1 {
    position: absolute;
    left: 30%;
    top: 20%;
    z-index: 10;
  }
  
  @media screen and (max-width: 768px) {
    /* Additional adjustments for smaller screens */
    .container {
    position: absolute;
    left: 2%;
    top: 20%;
    gap: 5%;
    z-index: 10;
    
  }
  
    .game-board {
      top: 20%;
      width: 100%;
      height: auto;
      position: absolute;
      z-index: 0;
      right: 0;
    }
  
    .dropzone {
      width: 35vw;
      height: 5vh;
    }
  
    .draggable-item {
      width: 30vw;
    }
    #container1{
      position:absolute;
      left:80%;
      top:25%;
    }
  
  
  }
  </style>
  