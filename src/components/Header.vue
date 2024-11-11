<template>
  <nav class="fixed w-full top-0 z-50">
    <!-- Barre de navigation -->
    <div class="bg-white/80 dark:bg-[#0B1121]/80 backdrop-blur-sm p-6">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="text-[#4ECCA3] flex items-center">
            <div class="w-5 h-5 bg-[#4ECCA3] mr-2 personalize"></div>
            <span class="font-mono">LAWINGNI A.<span class="dark:text-white text-gray-900">Rachard</span></span>
          </div>
        </div>

        <!-- Menu Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <a v-for="item in menuItems" 
             :key="item"
             :href="`#${item.toLowerCase()}`"
             class="text-gray-600 dark:text-gray-300 hover:text-[#4ECCA3] transition-colors">
            {{ item }}
          </a>
          <button @click="toggleTheme" 
                  class="text-[#4ECCA3] hover:text-[#3db892] transition-colors">
            <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
        </div>

        <!-- Bouton Menu Mobile -->
        <button @click="toggleMenu" 
                class="md:hidden w-10 h-10 flex items-center justify-center
                       bg-[#4ECCA3] text-white rounded-lg z-50 relative
                       hover:bg-[#3db892] transition-colors">
          <i :class="isMenuOpen ? 'fas fa-times text-xl' : 'fas fa-bars text-xl'"></i>
        </button>
      </div>
    </div>

    <!-- Menu Mobile Overlay -->
    <div v-if="isMenuOpen" 
         class="fixed inset-0 bg-white/95 dark:bg-[#0B1121]/95 z-40 md:hidden
                flex flex-col items-center justify-center">
      <!-- Bouton de fermeture en haut à droite -->
      <button @click="closeMenu"
              class="absolute top-6 right-6 w-10 h-10
                     bg-[#4ECCA3] text-white rounded-lg
                     flex items-center justify-center
                     hover:bg-[#3db892] transition-colors">
        <i class="fas fa-times text-xl"></i>
      </button>

      <!-- Liens du menu -->
      <div class="flex flex-col items-center space-y-8">
        <a v-for="item in menuItems" 
           :key="item"
           :href="`#${item.toLowerCase()}`"
           @click="handleLinkClick"
           class="text-2xl font-medium text-gray-800 dark:text-white 
                  hover:text-[#4ECCA3] transition-colors">
          {{ item }}
        </a>
        <button @click="toggleTheme" 
                class="text-2xl text-[#4ECCA3] hover:text-[#3db892] 
                       transition-colors mt-4">
          <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.isDark)
const isMenuOpen = ref(false)
const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

const toggleTheme = () => {
  themeStore.toggleTheme()
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Empêcher le scroll quand le menu est ouvert
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

// Fermer le menu quand on clique sur un lien
const handleLinkClick = () => {
  closeMenu()
}

// Fermer le menu quand on redimensionne l'écran
onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isMenuOpen.value) {
      closeMenu()
    }
  })
})
</script>

<style scoped>
/* Animation pour le menu mobile */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Style pour le bouton mobile */
button {
  -webkit-tap-highlight-color: transparent;
}

/* Empêcher le scroll sur iOS */
.overflow-hidden {
  position: fixed;
  width: 100%;
}
</style>