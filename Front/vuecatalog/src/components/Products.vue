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
const categories = ref(["todas", "osos", "navidad"]);
const selectedCategory = ref("todas");

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
  div
    b Categorias: 
    div.caja
      select(v-model="selectedCategory")
        option(v-for="item in categories" v-bind:value="item") {{ item }}
center
  div.mainContainer
    div.card(v-for="item in items" v-show="selectedCategory ==  'todas' || selectedCategory == item.category")
      h3 {{ item.name }}
      h5 {{ item.price }}
      img(:src="item.miniature" @click="showLargeImage(item.image)") 
      div
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
  width: 70%;
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
  grid-template-columns: 1fr 1fr 1fr;
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
  width:  40px;
  height: auto;
  margin-left: 30%;
}

a {
  font-size: large;
}

.caja {
   margin:20px auto 40px auto;	
   border:1px solid #d9d9d9;
   height:30px;
   overflow: hidden;
   width: 230px;
   position:relative;
}
select {
   background: transparent;
   border: none;
   font-size: large;
   height: 30px;
   padding: 5px;
   width: 250px;
}
select:focus{ outline: none;}

.caja::after{
	content:"\025be";
	display:table-cell;
	padding-top:7px;
	text-align:center;
	width:30px;
	height:30px;
	background-color:#d9d9d9;
	position:absolute;
	top:0;
	right:0px;	
	pointer-events: none;
}

@media only screen and (max-width: 1980px){
  .mainContainer {
    width: 80%;    
    grid-template-columns: 1fr 1fr 1fr 1fr;    
    grid-gap: 15px;
  }
  
  .wasap {      
      width: 45px;
      height: auto;
    }
}

@media only screen and (max-width: 1560px){
  .mainContainer {
    width: 85%;    
    grid-template-columns: 1fr 1fr 1fr;    
    grid-gap: 15px;
  }
  
  .wasap {      
      width: 40px;
      height: auto;
    }
}

@media only screen and (max-width: 1268px){
  .mainContainer {
    width: 90%;    
    grid-template-columns: 1fr 1fr;    
    grid-gap: 10px;
  }
  
  .wasap {      
      width:35px;
      height: auto;
  }
}

@media only screen and (max-width: 980px) {
  .mainContainer {
    width: 95%;    
    grid-template-columns: 1fr;    
    grid-gap: =5px;
  }
  
  .wasap {
      width:10%;
      height: auto;
  }
  
  select {
    font-size: 4vw;
    height:50px;
  }
  
  .caja {
    height:50px;
  }
  
  a, b {
    font-size: 3vw;
  }
}
</style>
