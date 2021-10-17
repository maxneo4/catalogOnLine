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
    console.log("result getted");
    console.log(result);
    items.value = result;
  });
}) 


</script>

<template>
  <h1>{{ title }}</h1>
  
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
