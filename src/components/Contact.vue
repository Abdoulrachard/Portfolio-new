<template>
  <section id="contact" class="py-20 px-4 bg-gray-50 dark:bg-dark transition-colors">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row justify-between gap-12">
        <!-- Info de contact -->
        <div class="lg:w-1/3">
          <h2 class="text-[#4ECCA3] font-mono mb-2">&lt;Contact&gt;</h2>
          <h3 class="text-3xl text-gray-800 dark:text-white mb-6">
            Discutons de vos <span class="text-[#4ECCA3]">projets</span>
          </h3>
          
          <!-- Informations de contact -->
          <div class="space-y-6 text-gray-600 dark:text-gray-400">
            <div class="flex items-center group">
              <div class="w-12 h-12 rounded-lg bg-gray-50 dark:bg-[#151F32] 
                          flex items-center justify-center mr-4 
                          border border-[#4ECCA3]/10 group-hover:border-[#4ECCA3]/30
                          transition-all duration-300">
                <i class="far fa-envelope text-[#4ECCA3]"></i>
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <a href="mailto:abdoulrachard@gmail.com" 
                   class="hover:text-[#4ECCA3] transition-colors">
                  abdoulrachard@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-center group">
              <div class="w-12 h-12 rounded-lg bg-gray-50 dark:bg-[#151F32] 
                          flex items-center justify-center mr-4 
                          border border-[#4ECCA3]/10 group-hover:border-[#4ECCA3]/30
                          transition-all duration-300">
                <i class="fas fa-phone text-[#4ECCA3]"></i>
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Téléphone</p>
                <a href="tel:+22901911127" 
                   class="hover:text-[#4ECCA3] transition-colors">
                  +229 01 91 11 27 63
                </a>
              </div>
            </div>

            <div class="flex items-center group">
              <div class="w-12 h-12 rounded-lg bg-gray-50 dark:bg-[#151F32] 
                          flex items-center justify-center mr-4 
                          border border-[#4ECCA3]/10 group-hover:border-[#4ECCA3]/30
                          transition-all duration-300">
                <i class="fas fa-map-marker-alt text-[#4ECCA3]"></i>
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Localisation</p>
                <span>Cotonou, Bénin</span>
              </div>
            </div>
          </div>

          <!-- Réseaux sociaux -->
          <div class="flex space-x-4 mt-8">
            <a v-for="social in socials" 
               :key="social.icon"
               :href="social.link"
               target="_blank" 
               class="w-10 h-10 rounded-lg bg-gray-50 dark:bg-[#151F32] 
                      flex items-center justify-center text-[#4ECCA3] 
                      border border-[#4ECCA3]/10 hover:border-[#4ECCA3]/30
                      transition-all duration-300 hover:transform hover:scale-110">
              <i :class="`fab fa-${social.icon}`"></i>
            </a>
          </div>
        </div>

        <!-- Formulaire de contact -->
        <form @submit.prevent="handleSubmit" 
              class="lg:w-1/2 space-y-6 bg-gray-50 dark:bg-[#151F32] p-6 rounded-lg 
                     border border-[#4ECCA3]/10">
          <!-- Messages de succès/erreur -->
          <div v-if="successMessage" 
               class="p-4 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg">
            {{ successMessage }}
          </div>
          
          <div v-if="errorMessage" 
               class="p-4 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
            {{ errorMessage }}
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-1">
              <label class="text-sm text-gray-600 dark:text-gray-400">Nom Complet*</label>
              <input type="text" 
                     v-model="form.name"
                     required
                     class="w-full bg-white dark:bg-[#0B1121] rounded-lg p-3 
                            border border-[#4ECCA3]/10 focus:border-[#4ECCA3]
                            text-gray-800 dark:text-gray-300 outline-none
                            transition-colors">
            </div>
            <div class="space-y-1">
              <label class="text-sm text-gray-600 dark:text-gray-400">Email*</label>
              <input type="email" 
                     v-model="form.email"
                     required
                     class="w-full bg-white dark:bg-[#0B1121] rounded-lg p-3 
                            border border-[#4ECCA3]/10 focus:border-[#4ECCA3]
                            text-gray-800 dark:text-gray-300 outline-none
                            transition-colors">
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-1">
              <label class="text-sm text-gray-600 dark:text-gray-400">Téléphone</label>
              <input type="tel" 
                     v-model="form.phone"
                     class="w-full bg-white dark:bg-[#0B1121] rounded-lg p-3 
                            border border-[#4ECCA3]/10 focus:border-[#4ECCA3]
                            text-gray-800 dark:text-gray-300 outline-none
                            transition-colors">
            </div>
            <div class="space-y-1">
              <label class="text-sm text-gray-600 dark:text-gray-400">Sujet*</label>
              <input type="text" 
                     v-model="form.subject"
                     required
                     class="w-full bg-white dark:bg-[#0B1121] rounded-lg p-3 
                            border border-[#4ECCA3]/10 focus:border-[#4ECCA3]
                            text-gray-800 dark:text-gray-300 outline-none
                            transition-colors">
            </div>
          </div>

          <div class="space-y-1">
            <label class="text-sm text-gray-600 dark:text-gray-400">Message*</label>
            <textarea v-model="form.message"
                      required
                      rows="6" 
                      class="w-full bg-white dark:bg-[#0B1121] rounded-lg p-3 
                             border border-[#4ECCA3]/10 focus:border-[#4ECCA3]
                             text-gray-800 dark:text-gray-300 outline-none
                             transition-colors resize-none"></textarea>
          </div>

          <button type="submit" 
                  class="w-full bg-[#4ECCA3] text-white px-6 py-3 rounded-lg
                         hover:bg-[#3db892] transition-colors
                         flex items-center justify-center gap-2
                         disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="isSubmitting">
            <i class="fas fa-paper-plane"></i>
            {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message' }}
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-6 bg-white dark:bg-dark transition-colors border-t border-gray-200 dark:border-gray-800">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-600 dark:text-gray-400 text-center md:text-left">
          &copy; {{ new Date().getFullYear() }} Lawingni A.Rachard. Tous droits réservés.
        </p>
        <div class="flex items-center gap-4">
          <a v-for="social in socials" 
             :key="social.icon"
             :href="social.link"
             target="_blank" 
             class="text-gray-600 dark:text-gray-400 hover:text-[#4ECCA3] transition-colors">
            <i :class="`fab fa-${social.icon}`"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// Ajout des réseaux sociaux
const socials = [
  { icon: 'github', link: 'https://github.com/abdoulrachard' },
  { icon: 'linkedin', link: 'https://www.linkedin.com/in/rachard-lawingni/' },
  { icon: 'twitter', link: 'https://twitter.com/Abdoulrachard' },
  { icon: 'instagram', link: 'https://www.instagram.com/ola_rash007/' },
  { icon: 'whatsapp', link: 'https://wa.me/22991112763' }
]

// Vérifions que les variables d'environnement sont bien chargées
console.log('Service ID:', import.meta.env.VITE_EMAIL_SERVICE_ID)
console.log('Template ID:', import.meta.env.VITE_EMAIL_TEMPLATE_ID)
console.log('Public Key:', import.meta.env.VITE_EMAIL_PUBLIC_KEY)

const handleSubmit = async () => {
  isSubmitting.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    // Initialisation d'EmailJS
    emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY)

    const templateParams = {
      from_name: form.value.name,
      from_email: form.value.email,
      from_phone: form.value.phone,
      subject: form.value.subject,
      message: form.value.message,
      to_name: "Lawingni A.Rachard",
      reply_to: form.value.email
    }

    console.log('Sending email with params:', templateParams)

    const response = await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      templateParams
    )

    console.log('SUCCESS!', response.status, response.text)
    successMessage.value = 'Message envoyé avec succès!'
    
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    console.error('FAILED...', error)
    errorMessage.value = `Erreur: ${error.message}`
  } finally {
    isSubmitting.value = false
  }
}
</script>