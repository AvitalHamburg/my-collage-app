<template>
    <div>
      <div class="drop-zone" 
           @drop="onDrop($event, 1)"
           @dragenter.prevent 
           @dragover.prevent>
        <div v-for="item in getList(1)" :key="item.id" class="drag-el" 
             draggable="true" 
             @dragstart="startDrag($event, item)">
          {{ item.title }}
        </div>
      </div>
      <div class="drop-zone" 
           @drop="onDrop($event, 2)"
           @dragenter.prevent 
           @dragover.prevent>
        <div v-for="item in getList(2)" :key="item.id" class="drag-el" 
             draggable="true" 
             @dragstart="startDrag($event, item)">
          {{ item.title }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const items = ref([
        { id: 0, title: 'ItemA', list: 1 },
        { id: 1, title: 'ItemB', list: 1 },
        { id: 2, title: 'ItemC', list: 2 },
      ]);
  
      const getList = (list) => {
        return items.value.filter((item) => item.list === list);
      };
  
      const startDrag = (event, item) => {
        event.dataTransfer.setData('text/plain', item.id.toString());
      };
  
      const onDrop = (event, list) => {
        event.preventDefault();
        const itemId = event.dataTransfer.getData('text/plain');
        const draggedItem = items.value.find(item => item.id.toString() === itemId);
        if (draggedItem) {
          draggedItem.list = list;
        }
      };
  
      return {
        getList,
        startDrag,
        onDrop
      };
    }
  };
  </script>
  
  <style scoped>
  .drop-zone {
    width: 80%;
    margin: 50px auto;
    background-color: rgba(92, 95, 97, 0.27);
    padding: 10px;
    min-height: 10px;
  }
  
  .drag-el {
    background-color: cadetblue;
    color: white;
    padding: 5px;
    margin-bottom: 10px;
  }
  
  .drag-el:last-of-type {
    margin-bottom: 0;
  }
  </style>
  