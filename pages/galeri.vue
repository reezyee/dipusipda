<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header Section -->
    <section
      class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12"
    >
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Galeri Kegiatan
        </h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto">
          Dokumentasi kegiatan Dinas Perpustakaan dan Kearsipan Daerah Kota
          Tasikmalaya.
        </p>
      </div>
    </section>

    <!-- Galeri Content -->
    <section class="container mx-auto px-6 py-12">
      <div v-if="loading" class="text-center text-gray-600">
        Memuat galeri...
      </div>
      <div v-else-if="error" class="text-center text-red-600">{{ error }}</div>
      <div
        v-else-if="galeriItems.length === 0"
        class="text-center text-gray-600"
      >
        Tidak ada data galeri yang ditemukan untuk saat ini.
      </div>
      <div v-else class="grid grid-cols-5">
        <div
          v-for="(item, index) in galeriItems"
          :key="index"
          class="relative group"
        >
          <img
            :src="item.img"
            :alt="item.title"
            class="w-full h-40 object-cover rounded-lg shadow-md pt-1 px-1"
            @error="item.img = '/default-image.jpg'"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center"
          >
            <NuxtLink
              :to="item.href"
              class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4"
            >
              {{ item.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

definePageMeta({
  layout: "default",
});

const galeriItems = ref([]);
const loading = ref(true);
const error = ref(null);

// Fungsi untuk mengambil data galeri dari API kustom
const fetchGaleri = async () => {
  try {
    const response = await $fetch("/api/galeri");
    if (response.error) {
      throw new Error(response.error);
    }
    galeriItems.value = response;
  } catch (err) {
    error.value = `Gagal memuat galeri: ${err.message}`;
    console.error("Error fetching galeri:", err);
    galeriItems.value = [
      {
        img: "/default-image.jpg",
        title: "Kegiatan Tidak Tersedia",
        href: "#",
      },
    ];
  } finally {
    loading.value = false;
  }
};

onMounted(fetchGaleri);
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
