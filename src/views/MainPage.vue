<template>
  <div class="homepage">
    <!-- Full Width Hero Section -->
    <section class="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      <!-- Floating elements for visual interest -->
      <div class="floating-shapes absolute inset-0 pointer-events-none">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      
      <div class="relative z-10 text-center px-8">
        <!-- Animated greeting -->
        <div 
          class="greeting mb-8 lg:mb-12"
          :class="{ 'animate-in': isVisible }"
        >
          <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-thin tracking-tight text-gray-900 mb-6 leading-tight">
            Hi, I'm 
            <span class="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block sm:inline">
              Jude
            </span>
          </h1>
        </div>
        
        <!-- Animated subtitle -->
        <div 
          class="subtitle mb-10 lg:mb-16"
          :class="{ 'animate-in': isVisible }"
        >
          <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-light max-w-5xl mx-auto leading-relaxed px-4">
            I craft digital experiences that blend innovative engineering with thoughtful design
          </p>
        </div>
        
        <!-- Animated CTA --> 
        <div 
          class="cta mb-16"
          :class="{ 'animate-in': isVisible }"
        >
          <button 
            @click="scrollToAbout"
            class="cta-button group relative px-8 py-4 md:px-10 md:py-5 bg-gray-900 text-white rounded-full text-lg md:text-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            <span class="relative z-10">Explore My Work</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        
        <!-- Scroll indicator -->
        <div class="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div class="scroll-arrow"></div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

    <!-- About Section -->
    <section 
      id="about" 
      class="about-section py-16 md:py-24 lg:py-32 bg-white relative"
      ref="aboutSection"
    >
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <!-- Section title -->
        <div 
          class="section-header mb-12 lg:mb-20 text-center"
          :class="{ 'animate-in': aboutVisible }"
        >
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-gray-900 mb-6 lg:mb-8">
            About Me
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <!-- Content grid -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <!-- Text content -->
          <div 
            class="about-text space-y-6 lg:space-y-8"
            :class="{ 'animate-in': aboutVisible }"
          >
            <h3 class="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
              Passionate about creating digital experiences
            </h3>
            
            <p class="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              I'm a passionate software engineer who believes in the power of clean code and beautiful design. 
              With expertise spanning full-stack development, I enjoy turning complex problems into elegant solutions.
            </p>
            
            <p class="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or experimenting with the latest design trends.
            </p>
            
            <!-- Skills -->
            <div class="skills-section pt-6 lg:pt-8">
              <h4 class="text-lg md:text-xl font-semibold text-gray-900 mb-6">Core Technologies</h4>
              <div class="skills-grid grid grid-cols-2 gap-4">
                <div 
                  v-for="(skill, index) in skills" 
                  :key="skill"
                  class="skill-item p-3 md:p-4 bg-gray-50 rounded-xl text-center transition-all duration-300 hover:bg-gray-100 hover:scale-105"
                  :style="{ animationDelay: `${index * 100}ms` }"
                  :class="{ 'animate-in': aboutVisible }"
                >
                  <span class="text-sm md:text-base text-gray-700 font-medium">{{ skill }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Visual element -->
          <div 
            class="about-visual"
            :class="{ 'animate-in': aboutVisible }"
          >
            <div class="relative max-w-md mx-auto">
              <!-- Placeholder for profile image or graphic -->
              <div class="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20"></div>
                </div>
                <!-- You can replace this with an actual image later -->
                <div class="absolute bottom-6 left-6 right-6 text-center">
                  <p class="text-gray-500 text-sm">Profile Image</p>
                </div>
              </div>
              
              <!-- Floating accent -->
              <div class="absolute -top-6 -right-6 w-24 h-24 bg-yellow-200 rounded-full opacity-60 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider with Gradient -->
    <div class="w-full h-24 bg-gradient-to-b from-white to-gray-50"></div>

    <!-- Projects Preview Section -->
    <section class="projects-preview w-full py-16 md:py-24 bg-gray-50">
      <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-thin text-gray-900 mb-6 lg:mb-8">Featured Projects</h2>
        <p class="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 lg:mb-16 max-w-3xl mx-auto leading-relaxed">
          A showcase of my recent work in web development, mobile apps, and creative coding
        </p>
        
        <router-link 
          to="/projects"
          class="inline-block px-8 py-4 md:px-10 md:py-5 border-2 border-gray-900 text-gray-900 rounded-full text-lg md:text-xl font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          View All Projects
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const aboutVisible = ref(false)
const aboutSection = ref<HTMLElement | null>(null)

const skills = [
  'Vue.js', 'TypeScript', 'Node.js', 'Python',
  'React', 'MongoDB', 'PostgreSQL', 'AWS'
]

const scrollToAbout = () => {
  document.getElementById('about')?.scrollIntoView({ 
    behavior: 'smooth' 
  })
}

const handleScroll = () => {
  if (aboutSection.value) {
    const rect = aboutSection.value.getBoundingClientRect()
    const isInViewport = rect.top < window.innerHeight * 0.8
    if (isInViewport && !aboutVisible.value) {
      aboutVisible.value = true
    }
  }
}

onMounted(() => {
  // Trigger hero animations
  setTimeout(() => {
    isVisible.value = true
  }, 100)
  
  // Add scroll listener for about section
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial state
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Hero Animations */
.greeting {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.subtitle {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
}

.cta {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
}

.greeting.animate-in,
.subtitle.animate-in,
.cta.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* About Section Animations */
.section-header {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.about-text {
  opacity: 0;
  transform: translateX(-40px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
}

.about-visual {
  opacity: 0;
  transform: translateX(40px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
}

.skill-item {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.section-header.animate-in,
.about-text.animate-in,
.about-visual.animate-in {
  opacity: 1;
  transform: translateX(0) translateY(0);
}

.skill-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Floating Shapes */
.floating-shapes {
  z-index: 1;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 60%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

/* Scroll Indicator */
.scroll-indicator {
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 24px;
  height: 24px;
  border-right: 2px solid #6b7280;
  border-bottom: 2px solid #6b7280;
  transform: rotate(45deg);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-10px) translateX(-50%);
  }
  60% {
    transform: translateY(-5px) translateX(-50%);
  }
}

/* CTA Button Enhancement */
.cta-button {
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.cta-button:hover::before {
  left: 100%;
}

/* Performance optimizations */
.homepage * {
  will-change: transform, opacity;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>

