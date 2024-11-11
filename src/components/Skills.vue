<template>
  <section id="skills" class="py-20 px-4 bg-gray-50 dark:bg-dark transition-colors">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-[#4ECCA3] font-mono mb-2">&lt;Skills&gt;</h2>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white">Compétences et Expertises</h3>
        <p class="text-gray-600 dark:text-gray-400 mt-2">Maîtrise des Technologies et Outils de Développement</p>
      </div>

      <!-- Technologies de base avec barres de progression -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <!-- HTML -->
        <div class="bg-gray-50 dark:bg-[#151F32] rounded-lg p-6 border border-[#4ECCA3]/10 
                    transition-all duration-300 hover:border-[#4ECCA3]/30 hover:transform hover:scale-[1.02]">
          <div class="flex items-center mb-4">
            <i class="fab fa-html5 text-[#E34F26] text-2xl mr-3"></i>
            <span class="font-mono text-gray-800 dark:text-gray-300">start.html</span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-[#0B1121] rounded-full h-1.5 border border-[#4ECCA3]/10">
            <div class="bg-[#E34F26] h-1.5 rounded-full transition-all duration-500" style="width: 90%"></div>
          </div>
        </div>

        <!-- CSS -->
        <div class="bg-gray-50 dark:bg-[#151F32] rounded-lg p-6 border border-[#4ECCA3]/10 
                    transition-all duration-300 hover:border-[#4ECCA3]/30 hover:transform hover:scale-[1.02]">
          <div class="flex items-center mb-4">
            <i class="fab fa-css3-alt text-[#264DE4] text-2xl mr-3"></i>
            <span class="font-mono text-gray-800 dark:text-gray-300">styles.css</span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-[#0B1121] rounded-full h-1.5 border border-[#4ECCA3]/10">
            <div class="bg-[#264DE4] h-1.5 rounded-full transition-all duration-500" style="width: 85%"></div>
          </div>
        </div>

        <!-- JavaScript -->
        <div class="bg-gray-50 dark:bg-[#151F32] rounded-lg p-6 border border-[#4ECCA3]/10 
                    transition-all duration-300 hover:border-[#4ECCA3]/30 hover:transform hover:scale-[1.02]">
          <div class="flex items-center mb-4">
            <i class="fab fa-js text-[#F7DF1E] text-2xl mr-3"></i>
            <span class="font-mono text-gray-800 dark:text-gray-300">script.js</span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-[#0B1121] rounded-full h-1.5 border border-[#4ECCA3]/10">
            <div class="bg-[#F7DF1E] h-1.5 rounded-full transition-all duration-500" style="width: 80%"></div>
          </div>
        </div>
      </div>

      <!-- Technologies principales -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="tech in mainTech" 
             :key="tech.name"
             class="group bg-gray-50 dark:bg-[#151F32] rounded-lg p-6 border border-[#4ECCA3]/10 
                    transition-all duration-300 hover:border-[#4ECCA3]/30 hover:transform hover:scale-[1.02]">
          <img :src="tech.icon" 
               :alt="tech.name" 
               class="w-12 h-12 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
          <h4 class="text-[#4ECCA3] mb-2 text-center font-medium">{{ tech.name }}</h4>
          <p class="text-sm text-gray-600 dark:text-gray-400 text-center">{{ tech.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const mainTech = [
  {
    name: 'TailwindCss',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    description: 'Framework CSS pour un développement rapide et efficace'
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    description: 'Framework JavaScript progressif pour les interfaces utilisateur'
  },
  // {
  //   name: 'Node.js',
  //   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  //   description: 'Environnement d\'exécution JavaScript côté serveur'
  // },
  {
    name: 'Laravel',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    description: "Framework PHP côté backend avec une syntaxe élégante. Utilisé pour le développement d'applications web robustes et sécurisées."
  },
  {
    name:'Django',
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    description:"Framework Python côté backend avec une syntaxe élégante. Utilisé pour le développement d'applications web robustes et sécurisées."
  },
  {
    name:'NestJs',
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    description:"Framework TypeScript côté backend avec une syntaxe élégante. Utilisé pour le développement d'applications web robustes et sécurisées."
  },
  {
    name:'MySQL',
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    description:"Système de gestion de base de données relationnelle."
  },
  {
    name:"MongoDB",
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    description:"Base de données NoSQL performante et flexible."
  },
  {
    name:'Postman',
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    description:"Outil de test et de documentation pour les API."
  },
  {
    name:'Git',
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    description:"Outil de gestion de version."
  },
  {
    name:'GitHub',
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    description:"Outil de gestion de code source."
  },
  {
    name:'Visual Studio Code',
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    description:"Outil de développement intégré."
  },
  {
    name:'Trello',
    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg",
    description:"Outil de gestion de projet."
  }


]
</script>