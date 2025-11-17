

<template>
  <div class="contact-page w-full py-16 md:py-24 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12 lg:mb-20">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-gray-900 mb-6 lg:mb-8 leading-tight">
          Let's Connect
        </h1>
        <p class="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and design.
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 lg:mt-12 rounded-full"></div>
      </div>

      <!-- Contact Options -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-24 max-w-6xl mx-auto">
        <!-- Contact Info -->
        <div class="space-y-8 lg:space-y-10">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-6 lg:mb-8">Get in Touch</h2>
          
          <div class="space-y-6">
            <div 
              v-for="contact in contactMethods" 
              :key="contact.type"
              class="flex items-center space-x-4 p-4 lg:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-white text-xl lg:text-2xl">{{ contact.icon }}</span>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="font-medium text-gray-900 text-base lg:text-lg">{{ contact.type }}</h3>
                <a 
                  :href="contact.link" 
                  class="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm lg:text-base break-all"
                  :target="contact.external ? '_blank' : '_self'"
                >
                  {{ contact.value }}
                </a>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="pt-8">
            <h3 class="text-lg lg:text-xl font-medium text-gray-900 mb-4 lg:mb-6">Find me online</h3>
            <div class="flex space-x-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                class="w-12 h-12 lg:w-14 lg:h-14 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                :title="social.name"
              >
                <span class="text-xl lg:text-2xl">{{ social.icon }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
          <h2 class="text-2xl lg:text-3xl font-light text-gray-900 mb-6 lg:mb-8">Send a Message</h2>
          
          <form @submit.prevent="sendMessage" class="space-y-6">
            <div>
              <label for="name" class="block text-sm lg:text-base font-medium text-gray-700 mb-2">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 lg:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base lg:text-lg"
                placeholder="Your name"
              >
            </div>
            
            <div>
              <label for="email" class="block text-sm lg:text-base font-medium text-gray-700 mb-2">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 lg:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base lg:text-lg"
                placeholder="your.email@example.com"
              >
            </div>
            
            <div>
              <label for="subject" class="block text-sm lg:text-base font-medium text-gray-700 mb-2">Subject</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-3 lg:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base lg:text-lg"
                placeholder="What's this about?"
              >
            </div>
            
            <div>
              <label for="message" class="block text-sm lg:text-base font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                class="w-full px-4 py-3 lg:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-base lg:text-lg"
                placeholder="Tell me about your project or just say hello!"
              ></textarea>
            </div>
            
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-gray-900 text-white py-3 lg:py-4 px-6 rounded-lg font-medium text-base lg:text-lg hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              :class="{ 'hover:scale-105': !isSubmitting }"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            </button>
          </form>
          
          <!-- Success/Error Messages -->
          <div v-if="submitMessage" class="mt-4 p-4 rounded-lg" :class="submitMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
            {{ submitMessage.text }}
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <div class="bg-white rounded-2xl p-8 lg:p-12 shadow-lg max-w-3xl mx-auto">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 lg:mb-6">Ready to work together?</h2>
          <p class="text-gray-600 text-base md:text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed">
            I'm currently available for freelance projects and full-time opportunities. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <a 
            href="mailto:your.email@example.com" 
            class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-medium text-lg lg:text-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)
const submitMessage = ref<{ type: 'success' | 'error', text: string } | null>(null)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const contactMethods = [
  {
    type: 'Email',
    icon: '📧',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com',
    external: false
  },
  {
    type: 'LinkedIn',
    icon: '💼',
    value: 'linkedin.com/in/yourprofile',
    link: 'https://linkedin.com/in/yourprofile',
    external: true
  },
  {
    type: 'GitHub',
    icon: '👨‍💻',
    value: 'github.com/yourusername',
    link: 'https://github.com/yourusername',
    external: true
  }
]

const socialLinks = [
  { name: 'GitHub', icon: '📱', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/yourprofile' },
  { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/yourusername' },
  { name: 'Instagram', icon: '📷', url: 'https://instagram.com/yourusername' }
]

const sendMessage = async () => {
  isSubmitting.value = true
  submitMessage.value = null
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real app, you'd send the form data to your backend
    console.log('Form submitted:', form)
    
    submitMessage.value = {
      type: 'success',
      text: 'Thank you for your message! I\'ll get back to you soon.'
    }
    
    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    
  } catch (error) {
    submitMessage.value = {
      type: 'error',
      text: 'Sorry, there was an error sending your message. Please try again.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Form focus animations */
input:focus,
textarea:focus {
  transform: scale(1.02);
}

/* Button hover effects */
button:not(:disabled):hover {
  transform: translateY(-1px);
}

/* Card hover effects */
.grid > div:hover {
  transform: translateY(-2px);
}

/* Performance optimizations */
input,
textarea,
button,
.grid > div {
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
  
  input:focus,
  textarea:focus,
  button:not(:disabled):hover,
  .grid > div:hover {
    transform: none;
  }
}
</style>