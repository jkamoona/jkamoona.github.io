

<template>
  <div class="about-page w-full py-16 md:py-24 min-h-screen bg-white">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12 lg:mb-20">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-gray-900 mb-6 lg:mb-8 leading-tight">
          About Me
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <!-- Main Content -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24 max-w-6xl mx-auto">
        <!-- Text Content -->
        <div class="space-y-6 lg:space-y-8">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 lg:mb-8 leading-tight">
            Passionate about creating digital experiences
          </h2>
          
          <div class="space-y-6 text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            <p>
              I'm a software engineer with a passion for building thoughtful, user-centered applications. 
              My journey in tech began with curiosity about how things work, and has evolved into a career 
              focused on creating meaningful digital experiences.
            </p>
            
            <p>
              I believe in the power of clean code, beautiful design, and the importance of understanding 
              both the technical and human sides of software development. Whether I'm working on a complex 
              web application or a simple utility tool, I approach each project with attention to detail 
              and a commitment to quality.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open source 
              projects, reading about design and psychology, or enjoying time outdoors.
            </p>
          </div>
        </div>

        <!-- Visual Element -->
        <div class="relative max-w-md mx-auto lg:max-w-full">
          <div class="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl relative overflow-hidden">
            <!-- Placeholder for profile image -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20"></div>
            </div>
            <div class="absolute bottom-6 left-6 right-6 text-center">
              <p class="text-gray-500 text-sm">Profile Image</p>
            </div>
          </div>
          
          <!-- Floating decorative elements -->
          <div class="absolute -top-6 -right-6 w-24 h-24 bg-yellow-200 rounded-full opacity-60 blur-xl"></div>
          <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-200 rounded-full opacity-60 blur-lg"></div>
        </div>
      </div>

      <!-- Section Divider -->
      <div class="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-16 lg:mb-24"></div>

      <!-- Skills & Experience -->
      <div class="space-y-16 lg:space-y-24">
        <!-- Skills -->
        <div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 lg:mb-12 text-center leading-tight">
            Skills & Technologies
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
            <div 
              v-for="(skill, index) in skills" 
              :key="skill.name"
              class="text-center p-4 lg:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <div class="text-2xl lg:text-3xl mb-3">{{ skill.icon }}</div>
              <h3 class="font-medium text-gray-900 mb-2 text-sm lg:text-base">{{ skill.name }}</h3>
              <p class="text-xs lg:text-sm text-gray-600">{{ skill.level }}</p>
            </div>
          </div>
        </div>

        <!-- Section Divider -->
        <div class="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <!-- Values -->
        <div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 lg:mb-12 text-center leading-tight">
            What I Value
          </h2>
          <div class="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div 
              v-for="value in values" 
              :key="value.title"
              class="text-center p-6 lg:p-8"
            >
              <div class="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <span class="text-white text-2xl lg:text-3xl">{{ value.icon }}</span>
              </div>
              <h3 class="text-xl lg:text-2xl font-medium text-gray-900 mb-3 lg:mb-4">{{ value.title }}</h3>
              <p class="text-gray-600 text-base lg:text-lg leading-relaxed">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16 lg:mt-24">
        <div class="bg-gray-50 rounded-2xl p-8 lg:p-12 max-w-3xl mx-auto">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 lg:mb-6">
            Let's work together
          </h2>
          <p class="text-gray-600 text-base md:text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed">
            I'm always interested in hearing about new opportunities and exciting projects.
          </p>
          <router-link 
            to="/contact"
            class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-medium text-lg lg:text-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  { name: 'Frontend', icon: '🎨', level: 'Expert' },
  { name: 'Backend', icon: '⚙️', level: 'Advanced' },
  { name: 'Mobile', icon: '📱', level: 'Intermediate' },
  { name: 'Design', icon: '✨', level: 'Intermediate' },
  { name: 'Vue.js', icon: '🚀', level: 'Expert' },
  { name: 'TypeScript', icon: '💻', level: 'Advanced' },
  { name: 'Node.js', icon: '🌿', level: 'Advanced' },
  { name: 'Python', icon: '🐍', level: 'Intermediate' }
]

const values = [
  {
    title: 'Quality',
    icon: '⭐',
    description: 'I believe in writing clean, maintainable code and creating polished user experiences that stand the test of time.'
  },
  {
    title: 'Growth',
    icon: '🌱',
    description: 'Continuous learning and improvement are at the core of my approach to both technology and personal development.'
  },
  {
    title: 'Impact',
    icon: '🎯',
    description: 'Every project is an opportunity to create something meaningful that makes a positive difference in people\'s lives.'
  }
]
</script>

<style scoped>
/* Smooth animations for skills cards */
.grid > div {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Performance optimizations */
.grid > div {
  will-change: transform, opacity;
}

@media (prefers-reduced-motion: reduce) {
  .grid > div {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  * {
    transition-duration: 0.01ms !important;
  }
}
</style>