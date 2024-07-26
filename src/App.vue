<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/NavBar.vue';

</script>


<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>


<style src="./assets/tailwind.css"></style>
