<template>
    <div class="bg-gray-50 min-h-screen">
      <!-- Header Section -->
      <section class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12">
        <div class="container mx-auto px-6 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Visi dan Misi</h1>
          <p class="text-lg md:text-xl max-w-2xl mx-auto">
            Komitmen Dinas Perpustakaan dan Kearsipan Daerah Kota Tasikmalaya untuk masyarakat.
          </p>
        </div>
      </section>
  
      <!-- Visi dan Misi Section -->
      <section class="container mx-auto px-6 py-12">
        <div class="max-w-4xl mx-auto space-y-12">
          <!-- Visi -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-semibold text-blue-600 mb-3">Visi</h2>
                <p class="text-gray-700 text-lg leading-relaxed">
                  “KOTA TASIKMALAYA YANG RELIGIUS, MAJU DAN MADANI”
                </p>
              </div>
            </div>
          </div>
  
          <!-- Misi -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-semibold text-blue-600 mb-3">Misi</h2>
                <ul class="list-decimal pl-6 text-gray-700 text-lg leading-relaxed space-y-2">
                  <li>Meningkatkan budaya literasi informasi masyarakat melalui pembinaan dan pengembangan perpustakaan.</li>
                  <li>Meningkatkan kualitas pengelolaan dan pelayanan kearsipan berbasis teknologi informasi.</li>
                  <li>Meningkatkan kompetensi sumber daya manusia perpustakaan dan kearsipan.</li>
                  <li>Mengembangkan jejaring kerja sama perpustakaan dan kearsipan.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: 'default',
  });
  </script>
  
  <style scoped>
  .animate-fade-in {
    animation: fadeIn 1s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>