<script setup>
import { ref, onMounted  } from 'vue'
import { getObjectsFromTSV } from '../assets/data.js'

const props = defineProps({
  title: String,
  dataUrl: String,
})

const items = ref([]);
const modalOpen = ref(false);
const modalImage = ref(null);

onMounted(()=>{  
  getObjectsFromTSV(props.dataUrl , (result) => {   
    items.value = result;
  });
}) 

const showLargeImage = (image) => {
  modalImage.value = image;
  modalOpen.value = true;
}

const hideLargeImage = () => {
  modalImage.value = null;
  modalOpen.value = false;
} 

const getWasapLink = (item) => {
  return `https://api.whatsapp.com/send?phone=${item.wasap}&text=Me%20interesa%20comprar%20el%20producto%20${item.name}`
}

</script>

<template lang="pug">
div
  h1 {{ title }}  
center
  div.mainContainer
    div.card(v-for="item in items")
      h3 {{ item.name }}
      h5 {{ item.price }}
      img(:src="item.image" @click="showLargeImage(item.image)") 
      br
      a {{ item.description }}  
      a(:href="getWasapLink(item)" target="_blank")
        img.wasap(alt="Pedir producto" src="../assets/wasap.png")
  div.modal(v-if="modalOpen" @click="hideLargeImage()")    
    img(:src="modalImage")
</template>

<style scoped>
a {
  color: #42b983;
}
img {
  width: 45%;
  height: auto;
  cursor: pointer;
}
.modal img {
  width: auto;
  height: 100%;  
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
}
.mainContainer {
  width: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 10px;
}
.card{
  border-style: dotted;
  border-radius: 10px;
  border-color: black;
  border-width: 1px;
  padding: 5px;
  position: relative;
  overflow: hidden;
}
.modal{  
  background-color:rgba(15,15,15,0.75);
  overflow-x: hidden;
  overflow-y: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  margin: 10px;
  padding: 10px;
}

.wasap{
  width: 50px;
  height: auto;
}
</style>
