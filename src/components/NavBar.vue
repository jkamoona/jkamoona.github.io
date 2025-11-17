<template>
  <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200/50 transition-all duration-300">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Brand -->
        <router-link 
          to="/" 
          class="text-xl lg:text-2xl font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300"
        >
          Jude
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8 lg:space-x-12">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="nav-link relative py-2 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 text-base lg:text-lg"
            :class="{ 'text-gray-900': $route.path === link.path }"
          >
            {{ link.name }}
            <span 
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 rounded-full"
              :class="{ 'w-full': $route.path === link.path }"
            ></span>
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          <svg 
            class="w-6 h-6 transition-transform duration-300"
            :class="{ 'rotate-90': mobileMenuOpen }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition
        name="mobile-menu"
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-64"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 max-h-64"
        leave-to-class="opacity-0 max-h-0"
      >
        <div v-show="mobileMenuOpen" class="md:hidden overflow-hidden">
          <div class="py-4 space-y-2 border-t border-gray-200/50">
            <router-link
              v-for="link in navLinks"
              :key="link.name"
              :to="link.path"
              @click="closeMobileMenu"
              class="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
              :class="{ 'text-gray-900 bg-gray-50': $route.path === link.path }"
            >
              {{ link.name }}
            </router-link>
          </div>
        </div>
      </transition>
    </div>
  </nav>

  <!-- Spacer to prevent content from going under fixed navbar -->
  <div class="h-16"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Close mobile menu when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as Element
  if (mobileMenuOpen.value && !target?.closest('nav')) {
    closeMobileMenu()
  }
}

// Close mobile menu on route change
const handleRouteChange = () => {
  closeMobileMenu()
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Watch for route changes
import { watch } from 'vue'
watch(() => route.path, handleRouteChange)
</script>

<style scoped>
/* Enhance nav link hover effects */
.nav-link:hover span {
  width: 100%;
}

/* Mobile menu animations */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  overflow: hidden;
}

/* Smooth backdrop blur transition */
nav {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Performance optimizations */
.nav-link span {
  will-change: width;
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
  }
}
</style>
