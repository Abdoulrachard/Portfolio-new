<template>
  <section id="about" class="py-20 px-4 bg-gray-50 dark:bg-dark transition-colors">
    <div class="container mx-auto">
      <h2 class="text-[#4ECCA3] font-mono mb-4">&lt;About&gt;</h2>
      
      <div class="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div class="w-full lg:max-w-2xl order-2 lg:order-1">
          <!-- Description avec glassmorphism -->
          <div class="border border-[#151F32] rounded-lg p-6 
                      bg-gray-50/5 dark:bg-[#151F32]/30 backdrop-blur-sm mb-8">
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-center lg:text-left">
              Je suis un développeur web passionné et polyvalent, toujours prêt à relever de nouveaux défis. 
              Motivé par l'apprentissage continu et l'innovation, je m'investis pleinement dans chaque projet 
              pour créer des solutions web performantes et intuitives. Ma solide formation en développement web, 
              combinée à ma curiosité technique, me permet d'apporter une valeur ajoutée significative à chaque réalisation.
            </p>
          </div>

          <!-- Skills tags -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-4">
            <span class="px-4 py-2 bg-gray-50 dark:bg-[#151F32] rounded-lg 
                       border border-[#4ECCA3]/20 text-[#4ECCA3]
                       transition-transform hover:scale-105">
              Développement Front-End
            </span>
            <span class="px-4 py-2 bg-gray-50 dark:bg-[#151F32] rounded-lg 
                       border border-[#4ECCA3]/20 text-[#4ECCA3]
                       transition-transform hover:scale-105">
              Développement Back-End
            </span>
            <span class="px-4 py-2 bg-gray-50 dark:bg-[#151F32] rounded-lg 
                       border border-[#4ECCA3]/20 text-[#4ECCA3]
                       transition-transform hover:scale-105">
              Problem Solving
            </span>
          </div>
        </div>

        <!-- Image profile avec animation -->
        <div class="w-full max-w-[280px] h-[280px] lg:w-80 lg:h-80 relative order-1 lg:order-2">
          <div class="absolute inset-0 bg-[#4ECCA3] rounded-lg transform rotate-6 
                      transition-transform group-hover:rotate-12"></div>
          <div class="absolute inset-0 border-2 border-[#4ECCA3] rounded-lg transform -rotate-3 
                      transition-transform group-hover:rotate-0"></div>
          <img 
            src="../assets/profile.jpg" 
            alt="Profile" 
            class="w-full h-full object-cover rounded-lg relative z-10 
                   transition-transform hover:scale-105 duration-300"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group:hover .group-hover\:rotate-12 {
  transform: rotate(12deg);
}

.group:hover .group-hover\:rotate-0 {
  transform: rotate(0deg);
}
</style>