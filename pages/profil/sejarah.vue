<template>
    <div class="bg-gray-50 min-h-screen">
      <!-- Header Section -->
      <section
        class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12"
      >
        <div class="container mx-auto px-6 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Sejarah Lembaga
          </h1>
          <p class="text-lg md:text-xl max-w-2xl mx-auto">
            Perjalanan panjang Dinas Perpustakaan dan Kearsipan Daerah Kota
            Tasikmalaya.
          </p>
        </div>
      </section>
  
      <!-- Timeline Sejarah -->
      <section class="container mx-auto px-6 py-12">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-semibold text-gray-800 mb-12 text-center">
            Linimasa Sejarah
          </h2>
          <div class="space-y-12 relative">
            <!-- Garis Tengah Timeline (hanya untuk desktop) -->
            <div
              class="hidden md:block absolute w-1 bg-blue-400 h-[calc(100%-3rem)] top-12 left-1/2 transform -translate-x-1/2"
            ></div>
  
            <!-- Item Timeline 1976 -->
            <div class="relative flex items-start">
              <div
                class="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10"
              >
                1976
              </div>
              <div class="ml-6 bg-white p-6 rounded-lg shadow-md w-full">
                <h3 class="text-xl font-semibold text-blue-600 mb-2">
                  Pembentukan Kota Administratif
                </h3>
                <p class="text-gray-600">
                  Kota Administratif Tasikmalaya diresmikan melalui
                  <strong>PP No. 22 Tahun 1976</strong>. Peresmian ditandai oleh
                  Menteri Dalam Negeri H. Amir Machmud, dengan Drs. H. Oman
                  Roosman sebagai Walikota pertama.
                </p>
              </div>
              <div
                class="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-5 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2"
              ></div>
            </div>
  
            <!-- Item Timeline 2003 -->
            <div class="relative flex items-start">
              <div
                class="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10"
              >
                2003
              </div>
              <div class="ml-6 bg-white p-6 rounded-lg shadow-md w-full">
                <h3 class="text-xl font-semibold text-blue-600 mb-2">
                  Kantor Arsip dan Perpustakaan
                </h3>
                <p class="text-gray-600">
                  Dibentuk melalui <strong>Perda No. 16 Tahun 2003</strong> pada
                  21 Oktober 2003, sesuai UU No. 10 Tahun 2001 Pasal 13. Tanggal
                  ini menjadi hari jadi lembaga.
                </p>
              </div>
              <div
                class="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-5 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2"
              ></div>
            </div>
  
            <!-- Item Timeline 2016 -->
            <div class="relative flex items-start">
              <div
                class="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10"
              >
                2016
              </div>
              <div class="ml-6 bg-white p-6 rounded-lg shadow-md w-full">
                <h3 class="text-xl font-semibold text-blue-600 mb-2">
                  Transformasi menjadi DIPUSIPDA
                </h3>
                <p class="text-gray-600">
                  Bertransformasi menjadi <strong>DIPUSIPDA</strong> berdasarkan
                  <strong>Perda No. 7 Tahun 2016</strong> dan UU No. 23 Tahun
                  2014, dengan tugas membantu Walikota di bidang perpustakaan dan
                  kearsipan.
                </p>
              </div>
              <div
                class="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-5 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2"
              ></div>
            </div>
          </div>
  
          <!-- Ringkasan -->
          <div class="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">
              Fungsi DIPUSIPDA
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Sebagai bagian dari fungsinya, DIPUSIPDA menyelenggarakan kebijakan,
              pelaksanaan, serta evaluasi di bidang perpustakaan dan kearsipan
              untuk mendukung literasi masyarakat dan pengelolaan arsip yang
              profesional di Kota Tasikmalaya.
            </p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: "default",
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
  