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
      <div v-if="galeriItems.length === 0" class="text-center text-gray-600">
        Tidak ada data galeri yang ditemukan untuk saat ini.
      </div>
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        <div
          v-for="(item, index) in galeriItems"
          :key="index"
          class="relative group"
        >
          <img
            :src="item.img"
            :alt="item.title"
            class="w-full h-40 object-cover rounded-lg shadow-md pt-1 px-1"
            @error="handleImageError(item, index)"
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
import { ref } from "vue";

definePageMeta({
  layout: "default",
});

// Data statis untuk galeri
const galeriItems = ref([
  {
    img: "https://imgur.com/CvL6SI8.jpg",
    title: "Juara Lomba Bercerita Tingkat SD",
    href: "#",
  },
  {
    img: "https://imgur.com/ksh4JkF.jpg",
    title: "Lomba Bercerita Tingkat SD",
    href: "#",
  },
  {
    img: "https://imgur.com/IULdcJ6.jpg",
    title: "Musrenbang 2020",
    href: "#",
  },
  {
    img: "https://imgur.com/D0k8IDJ.jpg",
    title: "Foto bersama setelah acara selesai",
    href: "#",
  },
  {
    img: "https://imgur.com/fZkfk6CY.jpg",
    title: "Pembagian bingkisan setelah bercerita",
    href: "#",
  },
  {
    img: "https://imgur.com/6poZ2KF.jpg",
    title:
      "Ibu Dra. Norng Rosmayati selaku Sekretaris Dinas sedang memberikan sosialisasi tentang literasi",
    href: "#",
  },
  {
    img: "https://imgur.com/4CnIzLK.jpg",
    title:
      "Pak Hasriadi selaku seksi pembinaan perpustakaan dan pengelolaan budaya baca sedang memberikan sosialisasi tentang literasi",
    href: "#",
  },
  {
    img: "https://imgur.com/q5M8EYW.jpg",
    title: "Ketika mendengarkan cerita berasal kasitel imaji",
    href: "#",
  },
  {
    img: "https://imgur.com/BtFQ0BQ.jpg",
    title: "Ketika mendengarkan cerita berasal kasitel imaji",
    href: "#",
  },
  {
    img: "https://imgur.com/kGUjTjG.jpg",
    title: "Rombongan TK Paud mengikuti kegiatan bercerita",
    href: "#",
  },
  {
    img: "https://imgur.com/qRj2EPG.jpg",
    title: "Rombongan TK Paud mengikuti kegiatan bercerita",
    href: "#",
  },
  {
    img: "https://imgur.com/jDWDmAF.jpg",
    title: "Foto bersama setelah Kegiatan story telling",
    href: "#",
  },
  {
    img: "https://imgur.com/M7zQI40.jpg",
    title: "Foto bersama setelah Kegiatan story telling",
    href: "#",
  },
  {
    img: "https://imgur.com/7D5fVWN.jpg",
    title:
      "Ibu Sekretaris Dinas Perpustakaan dan Kearsipan Derah Kota Tasikmalaya menyampaikan tentang literasi",
    href: "#",
  },
  {
    img: "https://imgur.com/pvN7VDK.jpg",
    title: "Kegiatan story telling",
    href: "#",
  },
  {
    img: "https://imgur.com/0KR0IZD.jpg",
    title: "Kegiatan story telling",
    href: "#",
  },
]);

// Fungsi untuk menangani error saat gambar gagal dimuat
const handleImageError = (item, index) => {
  console.log(`Gambar gagal dimuat untuk item ${index}: ${item.title}`);
  item.img = "https://via.placeholder.com/300x200?text=Gambar+Tidak+Tersedia";
};
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
