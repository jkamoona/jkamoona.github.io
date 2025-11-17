
<template>
  <div class="projects-page w-full py-16 md:py-24 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12 lg:mb-20">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-gray-900 mb-6 lg:mb-8 leading-tight">
          My Projects
        </h1>
        <p class="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
          A collection of my work showcasing web applications, mobile experiences, and creative coding experiments
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 lg:mt-12 rounded-full"></div>
      </div>

      <!-- Filter Tabs -->
      <div class="flex justify-center mb-12 lg:mb-16">
        <div class="bg-white rounded-full p-2 shadow-lg max-w-full overflow-x-auto">
          <div class="flex space-x-2">
            <button
              v-for="category in categories"
              :key="category"
              @click="activeFilter = category"
              :class="[
                'px-4 md:px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 focus:outline-none whitespace-nowrap',
                activeFilter === category
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="project-card group cursor-pointer w-full"
          :style="{ animationDelay: `${index * 100}ms` }"
          @click="openProject(project)"
        >
          <!-- Card Container -->
          <div class="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 h-full flex flex-col">
            <!-- Project Image/Preview -->
            <div class="relative h-48 md:h-56 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden flex-shrink-0">
              <!-- Placeholder for project image -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-white text-lg md:text-xl font-medium text-center px-4">{{ project.title }}</div>
              </div>
              
              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-white text-center">
                  <div class="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                  <span class="text-sm font-medium">View Project</span>
                </div>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6 flex-grow flex flex-col">
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight flex-grow mr-3">
                  {{ project.title }}
                </h3>
                <span class="px-3 py-1 bg-blue-100 text-blue-600 text-xs md:text-sm font-medium rounded-full flex-shrink-0">
                  {{ project.category }}
                </span>
              </div>
              
              <p class="text-gray-600 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                {{ project.description }}
              </p>
              
              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 text-gray-700 text-xs md:text-sm rounded-md"
                >
                  {{ tech }}
                </span>
              </div>
              
              <!-- Links -->
              <div class="flex space-x-3 pt-2">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  @click.stop
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span class="text-sm">Code</span>
                </a>
                
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  class="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  @click.stop
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  <span class="text-sm">Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-16">
        <div class="text-gray-400 text-xl md:text-2xl mb-4">No projects found</div>
        <p class="text-gray-500 text-lg">Try selecting a different category</p>
      </div>
    </div>

    <!-- Project Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click="selectedProject = null"
    >
      <div
        class="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="flex justify-between items-start mb-6">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 pr-4">{{ selectedProject.title }}</h2>
          <button
            @click="selectedProject = null"
            class="text-gray-400 hover:text-gray-600 transition-colors duration-200 flex-shrink-0"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <p class="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">{{ selectedProject.description }}</p>
        
        <div class="space-y-4">
          <div>
            <h3 class="font-semibold text-gray-900 mb-2 text-lg">Technologies Used</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in selectedProject.technologies"
                :key="tech"
                class="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <a
              v-if="selectedProject.github"
              :href="selectedProject.github"
              target="_blank"
              class="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-center"
            >
              View Code
            </a>
            <a
              v-if="selectedProject.demo"
              :href="selectedProject.demo"
              target="_blank"
              class="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200 text-center"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Project {
  id: number
  title: string
  description: string
  category: string
  technologies: string[]
  github?: string
  demo?: string
  image?: string
}

const activeFilter = ref('All')
const selectedProject = ref<Project | null>(null)

const categories = ['All', 'Web Apps', 'Mobile', 'Creative']

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A modern admin dashboard for managing online stores with real-time analytics and inventory management.',
    category: 'Web Apps',
    technologies: ['Vue.js', 'TypeScript', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    category: 'Web Apps',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 3,
    title: 'Weather Mobile App',
    description: 'A beautiful weather app with location-based forecasts and interactive weather maps.',
    category: 'Mobile',
    technologies: ['React Native', 'TypeScript', 'API Integration'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 4,
    title: 'Interactive Data Visualization',
    description: 'An interactive dashboard for visualizing complex datasets with custom charts and animations.',
    category: 'Creative',
    technologies: ['D3.js', 'Vue.js', 'Python', 'WebGL'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website with smooth animations and modern design principles.',
    category: 'Web Apps',
    technologies: ['Vue.js', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 6,
    title: 'Generative Art Tool',
    description: 'A creative coding tool for generating algorithmic art and interactive visual experiences.',
    category: 'Creative',
    technologies: ['p5.js', 'WebGL', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === activeFilter.value)
})

const openProject = (project: Project) => {
  selectedProject.value = project
}
</script>

<style scoped>
.project-card {
  opacity: 0;
  transform: translateY(20px);
  animation: slideInUp 0.6s ease-out forwards;
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Enhance card hover effects */
.project-card .bg-white {
  transform-origin: center;
  backface-visibility: hidden;
}

/* Smooth modal animations */
.fixed {
  backdrop-filter: blur(4px);
}

/* Performance optimizations */
.project-card * {
  will-change: transform, opacity;
}

@media (prefers-reduced-motion: reduce) {
  .project-card {
    animation: none;
    opacity: 1;
    transform: none;
  }
  
  * {
    transition-duration: 0.01ms !important;
  }
}
</style>