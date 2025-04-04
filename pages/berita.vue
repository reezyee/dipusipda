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
        <!-- Animasi Loading -->
        <div v-if="isLoading" class="space-y-8">
          <div
            v-for="i in 3"
            :key="i"
            class="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 animate-pulse"
          >
            <div class="w-32 h-32 bg-gray-300 rounded-md"></div>
            <div class="flex-1">
              <div class="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div class="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
              <div class="h-4 bg-gray-300 rounded w-full"></div>
              <div class="h-4 bg-gray-300 rounded w-5/6 mt-1"></div>
            </div>
          </div>
        </div>

        <!-- Daftar Berita -->
        <div v-else class="space-y-8">
          <div
            v-for="news in newsList"
            :key="news.id"
            class="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              :src="news.image"
              alt="News Image"
              class="w-32 h-32 object-cover rounded-md"
            />
            <div class="flex-1">
              <h2 class="text-xl font-semibold text-gray-800">
                <nuxt-link :to="`/berita/${news.id}`" class="hover:underline">
                  {{ news.title }}
                </nuxt-link>
              </h2>
              <p class="text-gray-600 text-sm mt-1">
                {{ news.date }} - Dinas Perpustakaan dan Kearsipan
              </p>
              <p class="text-gray-700 text-md leading-5 mt-2">
                {{ news.excerpt }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// State untuk loading dan daftar berita
const isLoading = ref(true);
const newsList = ref([
{
    id: "102722",
    title: "PERCEPATAN PERTUMBUHAN EKONOMI DAN PENINGKATAN PELAYANAN DASAR UNTUK KEMAJUAN DAN KESEJAHTERAAN MASYARAKAT",
    image: "https://dipusipda.tasikmalayakota.go.id/frontend/web/upload/_berita.jpeg",
    date: "Sabtu, 01 Maret 2025 - 09:05:21",
    excerpt: "Staf Ahli Wali Kota Tasikmalaya, Elly Suminar mengatakan Dinas Perpustakaan dan Kearsipan Daerah Kota Tasikmalaya memegang peranan krusial...",
  },
  {
    id: "102723",
    title: "RAKORNAS BIDANG PERPUSTAKAAN 2025, MENTERI DIKDASMEN: PENINGKATAN BUDAYA BACA DAN KECAKAPAN LITERASI UNTUK MEMBANGUN PERADABAN BANGSA",
    image: "https://dipusipda.tasikmalayakota.go.id/frontend/web/upload/_berita.jpg",
    date: "Minggu, 02 Maret 2025 - 10:15:30",
    excerpt: "Menteri Pendidikan Dasar dan Menengah (Dikdasmen) Abdul Mu’ti menyatakan komitmennya untuk terus meningkatkan buda...",
  },
  {
    id: "102724",
    title: "LAUNCHING APLIKASI SRIKANDI DI LINGKUNGAN PEMERINTAH KOTA TASIKMALAYA",
    image: "https://dipusipda.tasikmalayakota.go.id/frontend/web/upload/102269_gambar.png",
    date: "Senin, 03 Maret 2025 - 08:30:45",
    excerpt: "Dinas Perpustakaan dan Kearsipan Daerah Kota Tasikmalaya resmi meluncurkan aplikasi Sistem Informasi Kearsipan Dinamis Terintegrasi (SRIKANDI)...",
  },
  {
    id: "102725",
    title: "WORKSHOP NASIONAL LITERASI DIGITAL 2025",
    image: "https://dipusipda.tasikmalayakota.go.id/frontend/web/upload/102270_gambar.png",
    date: "Selasa, 04 Maret 2025 - 13:45:00",
    excerpt: "Pemerintah Kota Tasikmalaya menyelenggarakan Workshop Nasional Literasi Digital untuk meningkatkan kesadaran dan pemanfaatan teknologi...",
  },
]);

// Simulasi loading selama 2 detik
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
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
