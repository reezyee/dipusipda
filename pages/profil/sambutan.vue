<template>
    <section class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Sambutan Kepala Dinas
        </h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto">
          Dokumentasi kegiatan Dinas Perpustakaan dan Kearsipan Daerah Kota
          Tasikmalaya.
        </p>
      </div>
    </section>
  
    <section class="container mx-auto flex flex-col items-center py-8">
      <img
        :src="sambutanImage"
        alt="Sambutan"
        class="max-w-xl w-full rounded-lg shadow-lg object-cover"
      />
    </section>
  </template>
  
  <script setup>
  import sambutanImage from "@/assets/img/sambutan.png";
  
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
  