<script setup>
import { ref, onMounted  } from 'vue'
import { getObjectsFromTSV } from '../assets/data.js'

const props = defineProps({
  title: String,
  dataUrl: String,
})

const items = ref([]);
const count = ref(0);

onMounted(()=>{  
  getObjectsFromTSV(props.dataUrl , (result) => {   
    items.value = result;
  });
}) 

</script>

<template lang="pug">
div
  h1 {{ title }}  
center
  div.mainContainer
    div.card(v-for="item in items")
      h3 {{ item.name }}
      h5 {{ item.price }}
      img(:src="item.image" ) 
      br
      a {{ item.description }}
</template>

<style scoped>
a {
  color: #42b983;
}
img {
  width: 45%;
  height: auto;
}
.mainContainer {
  width: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
</style>
