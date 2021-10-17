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
  //img(src="https://dl3.pushbulletusercontent.com/opm9lmfoq1aGD0Mrk2l8vRWALeaUohY7/IMG-20211002-WA0049.jpg")
div
  img(v-for="item in items" :src="item.image" ) 
</template>

<style scoped>
a {
  color: #42b983;
}
img {
  width: 75%;
  height: auto;
}
</style>
