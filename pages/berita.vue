<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header Section -->
    <section
      class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12"
    >
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Berita
        </h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto">
          Informasi Terbaru dari Dinas Perpustakaan dan Kearsipan Daerah Kota
          Tasikmalaya.
        </p>
      </div>
    </section>

    <!-- Berita Content -->
    <section class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto space-y-8">
        <div v-if="pending" class="text-center text-gray-600">
          Memuat berita...
        </div>
        <div v-else-if="error" class="text-center text-red-600">
          {{ error.message }}
        </div>
        <div v-else-if="berita.length === 0" class="text-center text-gray-600">
          Tidak ada berita yang ditemukan untuk saat ini.
        </div>
        <div
          v-else
          v-for="(item, index) in berita"
          :key="index"
          class="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4"
        >
          <img
            v-if="item.img !== 'Gambar tidak tersedia'"
            :src="item.img"
            alt="Gambar Berita"
            class="w-32 h-32 object-cover rounded-md"
          />
          <svg
            v-else
            class="w-32 h-32 text-gray-400 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <div>
            <h2 class="text-xl font-semibold text-gray-800">
              {{ item.judul }}
            </h2>
            <p class="text-gray-600 text-sm mt-1">
              {{ item.tanggal }} - {{ item.sumber }}
            </p>
            <p class="text-gray-700 text-md leading-5 mt-2">
              {{ item.deskripsi }}
            </p>
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
const { data: berita, pending, error } = useFetch("/api/berita");

console.log("Data berita:", berita);
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
