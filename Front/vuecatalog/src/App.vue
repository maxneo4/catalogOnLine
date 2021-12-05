<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Products from './components/Products.vue'
</script>

<template>
  <img alt="Company logo" src="./assets/logoVectorial.svg" class="logo" />
  <Products title="Productos a la venta (311 522 3485)" dataUrl="https://docs.google.com/spreadsheets/d/e/2PACX-1vR1DpwzN7gPMWzalj4DVpZRx83sA4dcf7KkopyCzBe7sEW-H5moE3d7CwMHj7ALJE7ZC4X5ID0nTglh/pub?output=tsv" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
.logo {
  width: 45%;
}
</style>
