<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/NavBar.vue';
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-50 text-gray-900">
    <Navbar />
    
    <!-- Page transitions -->
    <main>
      <router-view v-slot="{ Component }">
        <transition 
          name="page" 
          mode="out-in"
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style src="./assets/tailwind.css"></style>

<style>
/* FORCE FULL WIDTH LAYOUT */
* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: auto 1fr;
}

main {
  width: 100vw;
  margin: 0;
  padding: 0;
}

/* FORCE ALL SECTIONS TO BE FULL WIDTH */
.homepage {
  width: 100vw !important;
  margin: 0 !important;
  padding: 0 !important;
}

section {
  width: 100vw !important;
  margin: 0 !important;
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
