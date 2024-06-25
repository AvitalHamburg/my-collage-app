<template>
    <div id="page">
      <img class="game-board" src="../assets/imgs/collageMap.jpeg">
      <div class="container">
        <div
          v-for="item in currentItem"
          :key="item.id"
          :id="item.id"
          class="draggable-item"
          draggable="true"
          @dragstart="dragStart"
          @dragend="dragEnd"
          @touchstart="touchStart"
          @touchend="touchEnd"
        >
          {{ item.name }}
        </div>
      </div>
  
      <div class="container1">
        <div
          v-for="(container, index) in containers"
          :key="container.id"
          :id="container.id"
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
    data() {
      return {
        items: [
          { id: 'item1', name: 'מכללה' },
          { id: 'item2', name: 'לשכת אלוף' },
          { id: 'item3', name: 'כוורת' },
          { id: 'item4', name: 'מאמ"פ' },
          { id: 'item5', name: 'אולם פיקודי' },
          { id: 'item6', name: 'גן אירועים' },
          { id: 'item7', name: 'חדר אוכל פיקודי' },
          { id: 'item8', name: 'הוצל"א' }
        ],
        containers: [
          { id: 'container1' },
          { id: 'container2' },
          { id: 'container3' },
          { id: 'container4' },
          { id: 'container5' },
          { id: 'container6' },
          { id: 'container7' },
          { id: 'container8' }
        ],
        currentItemIndex: 0
      };
    },
    computed: {
      currentItem() {
        return [this.items[this.currentItemIndex]];
      }
    },
    methods: {
      dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
      },
      dragEnd(event) {
        event.target.classList.remove('dragging');
      },
      drop(event) {
    event.preventDefault();
    const itemId = event.dataTransfer.getData('text/plain');
    const draggedItem = document.getElementById(itemId);
    const dropZoneId = event.target.id;
  
    // Check if the dragged item can be dropped into the target container
    if (itemId === `item${dropZoneId.slice(-1)}`) {
      // Remove the element from its original parent
      draggedItem.parentNode.removeChild(draggedItem);
      // Append the element to the drop zone
      event.target.appendChild(draggedItem.cloneNode(true));
  
      // Increment the current item index
      this.currentItemIndex++;
  
      // If all items have been dropped, alert "Awsam" and reset the game
      if (this.currentItemIndex === 8) {
        this.$emit('game-over'); // Ensure this is emitted correctly
        console.log('game-over');
        }
    }
  },
      dragEnter(event) {
        event.target.classList.add('dragover');
      },
      dragLeave(event) {
        event.target.classList.remove('dragover');
      },
      touchStart(event) {
        this.dragStart(event);
      },
      touchEnd(event) {
        this.dragEnd(event);
      },
      touchMove(event) {
        event.preventDefault();
        this.dragEnter(event);
      }
    }
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
    top: 10%;
  }
  
  .draggable-item {
    padding: 20px; /* Increased padding for larger touch target */
    background-color: rgb(28, 180, 227);
    border: 1px solid #0d0d0d;
    border-radius: 500px;
    width: 20vw; /* Increased width for larger touch target */
    cursor: grab;
    margin-bottom: 15px; /* Increased margin for separation */
    color: white;
  }
  
  .dropzone {
    padding-bottom: 12px;
    background-color: orange;
    border: 2px dashed black;
    border-radius: 500px;
    width: 23vw; /* Increased width for larger touch target */
    height: 5vh; /* Increased height for larger touch target */
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
    gap: 2%;
    z-index: 10;
    justify-content: center;
  }
  
  .container1 {
    position: absolute;
    width: 30%; /* Adjusted width for smaller screens */
    right: 5%; /* Adjusted right position */
    top: 10%; /* Adjusted top position */
    z-index: 10;
  }
  
  @media screen and (max-width: 768px) {
    /* Additional adjustments for smaller screens */
    .container {
      position: absolute;
      top: 8%;
      z-index: 10;
      display: flex;
      flex-wrap: wrap;
      align-items: right;
      width: 100vw;
    }
  
    .container1 {
      position: absolute;
      width: 30%; /* Adjusted width for smaller screens */
      right: 7%; /* Adjusted right position */
      top: 0%; /* Adjusted top position */
      z-index: 10;
    }
  
    .game-board {
      top: 25%;
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
  
    /* Adjust positions of containers */
    #container1 {
      position:relative;
      right:7vw;
      top: 28vh;
    }
    #container2 {
      position:relative;
      right:15vw;
      top: 32vh;
    }
    #container3 {
      position:relative;
      left: -62vw;
      top: 25vh;
  
    }
    #container4 {
      position:relative;
      left: -42vw;
      top:60vh;
      
    }
    #container5 {
      position:relative;
      left: -42vw;
      top: 25vh;
    
    }
    #container6 {
      position:relative;
      left: -2vw;
      top:35vh;
      
    }
    #container7 {
      position:relative;
      left: -42vw;
      top: 20vh;
    }
    #container8 {
      left: 0%;
      top: 300%;
    }
  }
  </style>
  
  