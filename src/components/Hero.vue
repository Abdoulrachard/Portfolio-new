<template>
  <section id="home" class="min-h-screen pt-28 lg:pt-20 px-4 flex items-center bg-gray-50 dark:bg-dark transition-colors">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <!-- Contenu texte -->
        <div class="w-full lg:w-1/2 text-center lg:text-left">
          <div class="text-[#4ECCA3] font-mono mb-4">&lt;Hello&gt;</div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-mono mb-4">
            Je suis <span class="text-[#4ECCA3]">LAWINGNI A.Rachard</span>
          </h1>
          <div class="text-xl md:text-2xl mb-6">
            Je suis un <span class="text-[#4ECCA3]">{Développeur Web}</span>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
            Passionné par le <span class="text-gray-900 dark:text-white">développement web</span> et les nouvelles 
            <span class="text-gray-900 dark:text-white">technologies</span>, je crée des solutions web innovantes et performantes
          </p>

          <div class="flex justify-center lg:justify-start space-x-4 mb-8">
            <a href="https://github.com/abdoulrachard" 
               target="_blank"
               class="text-gray-400 hover:text-[#4ECCA3] transition-colors">
              <i class="fab fa-github text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/rachard-lawingni/" 
               target="_blank"
               class="text-gray-400 hover:text-[#4ECCA3] transition-colors">
              <i class="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://twitter.com/Abdoulrachard" 
               target="_blank"
               class="text-gray-400 hover:text-[#4ECCA3] transition-colors">
              <i class="fab fa-twitter text-2xl"></i>
            </a>
            <a href="https://wa.me/22991112763"
               target="_blank"
               class="text-gray-400 hover:text-[#4ECCA3] transition-colors">
              <i class="fab fa-whatsapp text-2xl"></i>
            </a>
          </div>

          <div class="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button class="bg-[#4ECCA3] px-6 py-2 rounded-md text-[#0B1121] flex items-center justify-center"><a href="#contact">
              <i class="fas fa-paper-plane mr-2"></i>
              Contact </a>
            </button>
            <button class="border border-gray-600 px-6 py-2 rounded-md text-gray-300 
                         hover:border-[#4ECCA3] hover:text-[#4ECCA3] 
                         flex items-center justify-center transition-colors">
              <i class="fas fa-download mr-2"></i>
              Télécharger CV
            </button>
          </div>
        </div>

        <!-- Code Editor -->
        <div class="w-full lg:w-[450px] mt-8 lg:mt-0">
          <div class="bg-[#151F32] rounded-lg p-4 md:p-6 overflow-hidden">
            <div class="flex gap-4 mb-4 text-sm overflow-x-auto pb-2">
              <div class="flex items-center gap-2 border-b-2 border-[#4ECCA3] pb-2 whitespace-nowrap">
                <i class="fab fa-js text-yellow-400"></i>
                <span class="text-gray-300">start.js</span>
              </div>
              <div class="flex items-center gap-2 text-gray-500 pb-2 whitespace-nowrap">
                <i class="fab fa-python text-blue-400"></i>
                <span>master.py</span>
              </div>
            </div>

            <pre class="font-mono text-sm overflow-x-auto">
<span class="text-gray-400">// Code Newbie's Learning Path</span>
<span class="text-[#4ECCA3]">const</span> <span class="text-yellow-300">learningPath</span> = {
  <span class="text-blue-400">frontend</span>: [<span class="text-orange-300">'HTML'</span>, 
            <span class="text-orange-300">'CSS'</span>, 
            <span class="text-orange-300">'Tailwind'</span>,
            <span class="text-orange-300">'Vue.js'</span>],
  <span class="text-blue-400">backend</span>: [<span class="text-orange-300">'Node.js'</span>,
           <span class="text-orange-300">'Express'</span>,
           <span class="text-orange-300">'MongoDB'</span>],
  <span class="text-blue-400">languages</span>: [<span class="text-orange-300">'Python'</span>,
              <span class="text-orange-300">'Bash'</span>],
  <span class="text-blue-400">security</span>: [<span class="text-orange-300">'Ethical hacking'</span>]
};</pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>