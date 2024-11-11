<template>
  <section id="projects" class="py-20 px-4 bg-gray-50 dark:bg-[#0B1121] transition-colors">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-[#4ECCA3] font-mono mb-2">&lt;Projects&gt;</h2>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white">Mes Réalisations</h3>
        <p class="text-gray-600 dark:text-gray-400 mt-2">Découvrez mes derniers projets</p>
      </div>

      <!-- Grille de projets avec plus de colonnes et cartes plus petites -->
      <div class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        <div v-for="project in projects" 
             :key="project.id" 
             class=" group bg-gray-50 dark:bg-[#151F32] rounded-lg overflow-hidden
                    border border-[#4ECCA3]/10 transition-all duration-300 
                    hover:border-[#4ECCA3]/30 hover:transform hover:scale-[1.02]
                    flex flex-col">
          <!-- Image container plus petite -->
          <div class="relative overflow-hidden h-40">
            <img :src="project.image" 
                 :alt="project.title" 
                 class="w-full h-full object-cover transition-transform duration-500 
                        group-hover:scale-110">
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-[#4ECCA3]/20 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300"></div>
          </div>

          <!-- Content plus compact -->
          <div class="p-4 flex-1 flex flex-col">
            <h4 class="text-[#4ECCA3] text-lg mb-2 font-medium line-clamp-1">{{ project.title }}</h4>
            <p class="text-gray-600 dark:text-gray-300 mb-3 text-sm line-clamp-2">{{ project.description }}</p>
            
            <!-- Technologies avec scrollbar horizontale si nécessaire -->
            <div class="flex-1">
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span v-for="tech in project.technologies" 
                      :key="tech"
                      class="text-xs px-2 py-0.5 bg-white/5 dark:bg-[#0B1121] 
                             text-[#4ECCA3] rounded-full border border-[#4ECCA3]/10
                             whitespace-nowrap">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Links -->
            <div class="flex gap-3 pt-2 border-t border-[#4ECCA3]/10">
              <a :href="project.github" 
                 target="_blank"
                 class="text-[#4ECCA3] hover:text-gray-800 dark:hover:text-white 
                        transition-colors flex items-center gap-1.5 text-sm">
                <i class="fab fa-github"></i> Code
              </a>
              <a :href="project.demo" 
                 target="_blank"
                 class="text-[#4ECCA3] hover:text-gray-800 dark:hover:text-white 
                        transition-colors flex items-center gap-1.5 text-sm">
                <i class="fas fa-external-link-alt"></i> Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: "Campustimes",
    description: "Application de gestion des emplois du temps d'une unuversité.",
    image: "src/assets/dash.png",
    technologies: ["Vue.js", "Bootstrap CSS", "Laravel", "MySql"],
    github: "https://github.com/abdoulrachard/campustimes",
    demo: "https://webp2ms.username-blakvghost.com/"
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Tableau de bord administratif avec visualisation de données et rapports en temps réel",
    image: "/projects/dashboard.jpg",
    technologies: ["Vue.js", "Chart.js", "Firebase", "Tailwind"],
    github: "https://github.com/votre-compte/dashboard",
    demo: "https://demo-dashboard.com"
  },
  {
    id: 3,
    title: "Application de Gestion",
    description: "Système de gestion de projets avec suivi des tâches et collaboration en temps réel",
    image: "/projects/gestion.jpg",
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/votre-compte/gestion",
    demo: "https://demo-gestion.com"
  }
]
</script>

<style scoped>
/* Animation smooth pour les hover states */
.group {
  transform: translateZ(0);
  backface-visibility: hidden;
}

.group:hover {
  box-shadow: 0 10px 30px -15px rgba(78, 204, 163, 0.2);
}

/* Pour éviter que le texte ne déborde */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>