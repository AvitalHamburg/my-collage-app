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
          @touchmove.prevent="touchMove"
        >
          <!-- Adjust content as needed -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      // Mouse drag events
      dragStart(event) {
        this.handleDragStart(event);
      },
      dragEnd(event) {
        this.handleDragEnd(event);
      },
      drop(event) {
        event.preventDefault();
        this.handleDrop(event);
      },
      dragEnter(event) {
        this.handleDragEnter(event);
      },
      dragLeave(event) {
        this.handleDragLeave(event);
      },
      
      // Touch events
      touchStart(event) {
        this.handleDragStart(event.changedTouches[0]);
      },
      touchEnd(event) {
        this.handleDragEnd(event.changedTouches[0]);
      },
      touchMove(event) {
        event.preventDefault(); // Prevent scrolling on touch devices
        this.handleDragEnter(event.changedTouches[0]);
      },
  
      // Common drag-and-drop logic
      handleDragStart(event) {
        const itemId = event.target.id;
        event.dataTransfer.setData('text/plain', itemId);
        event.target.classList.add('dragging');
      },
      handleDragEnd(event) {
        event.target.classList.remove('dragging');
      },
      handleDrop(event) {
        const itemId = event.dataTransfer.getData('text/plain');
        const draggedItem = document.getElementById(itemId);
        const dropZoneId = event.target.id;
  
        // Check if the dragged item can be dropped into the target container
        if (itemId === `item${dropZoneId.slice(-1)}`) {
          // Remove the element from its original parent
          draggedItem.parentNode.removeChild(draggedItem);
          // Append the element to the drop zone
          event.target.appendChild(draggedItem);
        }
      },
      handleDragEnter(event) {
        event.target.classList.add('dragover');
      },
      handleDragLeave(event) {
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
  