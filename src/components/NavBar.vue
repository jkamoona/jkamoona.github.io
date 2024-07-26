<template>
  <nav class="bg-gray-800 p-4">
    <div class="flex items-center justify-between">
      <div class="flex space-x-4">
        <router-link to="/" class="text-white">Welcome</router-link>
        <router-link to="/projects" class="text-white">Projects</router-link>
        <router-link to="/about" class="text-white">About Me</router-link>
        <router-link to="/contact" class="text-white">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Navbar'
};
</script>

<style scoped>
/* Optional: Style your navbar here */
</style>
