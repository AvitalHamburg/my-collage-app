<template>
    <div id="page">
        <div id="map"></div>
        <div id="first" >
            <p class="white-circle" id="1">1</p>
        </div>
    </div>
</template>
<script setup>
  
</script>
  
  <style scoped>
 @font-face { 
    font-family: "Heebo";
    font-weight: normal;
    src: url("/assets/fonts/Heebo-VariableFont_wght.woff"), 
         format("woff");
}
  #map {
    background-image: url("../assets/imgs/collageMap.png");
    width: 90vw;
    height: 60vh;
    background-size: cover;
    position: absolute;
    top: 10%;
    left: 50%; /* Added left property */
    transform: translateX(-50%); /* Adjusted transform to center horizontally */
    z-index: 0;
}

#first {
    position: absolute;
    background-color: rgb(244,176,129);
    width: 10vw;
    height: 5vh;
    top: 11%; /* Adjusted top position */
    left: 50%; /* Added left property */
    transform: translateX(-50%); /* Adjusted transform to center horizontally */
    z-index: 100;
    border-radius: 5000000px;
}
.white-circle{
    background-color: rgb(255, 255, 255);
    border-radius: 5000000px;
    width: 10vw;
    height: 5vh;
    position: absolute;


}

  
  </style>
