<template>
  <div class="bg-gray-50">
    <!-- Hero Section with Background Image and Animation -->
    <section
      class="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 overflow-hidden"
    >
      <div class="absolute inset-0 bg-pattern opacity-20"></div>
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute inset-0 bg-[url('/images/library-bg.jpg')] bg-cover bg-center opacity-20"
        ></div>
      </div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Selamat Datang di DIPUSIPDA
        </h1>
        <p class="text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Dinas Perpustakaan dan Kearsipan Daerah Kota Tasikmalaya -
          <span class="font-medium italic"
            >Mengelola literasi dan arsip untuk masa depan yang lebih
            baik.</span
          >
        </p>
        <div class="space-x-4">
          <NuxtLink
            to="/profil/sambutan"
            class="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Profil Kami
          </NuxtLink>
          <NuxtLink
            to="/perpustakaan/layanan"
            class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Layanan Perpus
          </NuxtLink>
          <NuxtLink
            to="/kearsipan/layanan"
            class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Layanan Kearsipan
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Statistik with Animation -->
    <section class="container mx-auto px-6 py-16 -mt-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 border-t-4 border-blue-600"
        >
          <div class="flex items-center justify-center mb-4">
            <svg
              class="w-12 h-12 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3
            class="text-5xl font-bold text-blue-600 mb-2 text-center counter"
            data-target="28000"
          >
            28K+
          </h3>
          <p class="text-gray-600 mt-2 text-center font-medium">Judul Buku</p>
        </div>
        <div
          class="bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 border-t-4 border-blue-600"
        >
          <div class="flex items-center justify-center mb-4">
            <svg
              class="w-12 h-12 text-blue-600"
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
          </div>
          <h3
            class="text-5xl font-bold text-blue-600 mb-2 text-center counter"
            data-target="10000"
          >
            10K+
          </h3>
          <p class="text-gray-600 mt-2 text-center font-medium">
            Dokumen Arsip
          </p>
        </div>
        <div
          class="bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 border-t-4 border-blue-600"
        >
          <div class="flex items-center justify-center mb-4">
            <svg
              class="w-12 h-12 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3
            class="text-5xl font-bold text-blue-600 mb-2 text-center counter"
            data-target="50000"
          >
            50K+
          </h3>
          <p class="text-gray-600 mt-2 text-center font-medium">
            Pengunjung Tahunan
          </p>
        </div>
      </div>
    </section>

    <!-- Layanan Kami with Enhanced UI -->
    <section class="py-16 bg-gradient-to-b from-white to-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-3 text-gray-800">Layanan Kami</h2>
          <div class="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan berkualitas untuk kebutuhan
            literasi dan kearsipan Anda
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div class="h-3 bg-blue-600"></div>
            <div class="p-8">
              <div
                class="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-300"
              >
                <svg
                  class="w-12 h-12 text-blue-600 group-hover:text-white transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-blue-600 mb-4 text-center">
                Perpustakaan
              </h3>
              <p class="text-gray-600 text-center mb-6">
                Koleksi buku lengkap, ruang baca nyaman, dan akses digital untuk
                literasi masyarakat.
              </p>
              <div class="text-center">
                <NuxtLink
                  to="/perpustakaan/layanan"
                  class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
                >
                  Lihat Layanan
                </NuxtLink>
              </div>
            </div>
          </div>
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div class="h-3 bg-blue-600"></div>
            <div class="p-8">
              <div
                class="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-300"
              >
                <svg
                  class="w-12 h-12 text-blue-600 group-hover:text-white transition-all duration-300"
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
              </div>
              <h3 class="text-2xl font-bold text-blue-600 mb-4 text-center">
                Kearsipan
              </h3>
              <p class="text-gray-600 text-center mb-6">
                Pengelolaan arsip profesional, penyimpanan aman, dan
                digitalisasi dokumen.
              </p>
              <div class="text-center">
                <NuxtLink
                  to="/kearsipan/layanan"
                  class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
                >
                  Lihat Layanan
                </NuxtLink>
              </div>
            </div>
          </div>
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div class="h-3 bg-blue-600"></div>
            <div class="p-8">
              <div
                class="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-300"
              >
                <svg
                  class="w-12 h-12 text-blue-600 group-hover:text-white transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-blue-600 mb-4 text-center">
                Informasi & Berita
              </h3>
              <p class="text-gray-600 text-center mb-6">
                Update kegiatan, pameran, dan informasi penting lainnya.
              </p>
              <div class="text-center">
                <NuxtLink
                  to="/berita"
                  class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
                >
                  Baca Berita
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Carousel Berita Terbaru (Improved) -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-3 text-gray-800">Berita Terbaru</h2>
          <div class="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Dapatkan informasi terbaru dari kegiatan dan program DIPUSIPDA
          </p>
        </div>

        <div v-if="loading" class="flex justify-center items-center h-64">
          <div
            class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"
          ></div>
        </div>

        <div v-else-if="error" class="text-center py-12 bg-red-50 rounded-xl">
          <svg
            class="w-16 h-16 text-red-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="text-red-600 text-lg font-medium">{{ error }}</p>
        </div>

        <div v-else class="relative">
          <div class="overflow-hidden rounded-xl shadow-xl">
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                v-for="(news, index) in newsItems"
                :key="index"
                class="min-w-full"
              >
                <div
                  class="bg-white p-8 flex md:flex-row flex-col items-center md:items-start gap-6"
                >
                  <img
                    :src="news.img"
                    alt="Berita"
                    class="w-full md:w-64 h-48 object-cover rounded-lg shadow-md"
                    @error="news.img = '/default-image.jpg'"
                  />
                  <div class="flex-1">
                    <span
                      class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3"
                      >{{ news.tanggal }}</span
                    >
                    <h3
                      class="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors"
                    >
                      {{ news.judul }}
                    </h3>
                    <p class="text-gray-600 mb-4 line-clamp-3">
                      {{
                        news.excerpt ||
                        "Baca selengkapnya untuk mengetahui lebih detail tentang berita ini."
                      }}
                    </p>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-500"
                        >Sumber: {{ news.sumber }}</span
                      >
                      <NuxtLink
                        to="/berita"
                        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
                      >
                        Baca Selengkapnya
                        <svg
                          class="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation dots -->
          <div class="flex justify-center mt-6 space-x-2">
            <button
              v-for="(_, index) in newsItems"
              :key="index"
              @click="currentSlide = index"
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="
                currentSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
              "
            ></button>
          </div>

          <!-- Prev/Next buttons -->
          <button
            @click="prevSlide"
            class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white shadow-lg transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            @click="nextSlide"
            class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white shadow-lg transition-all duration-300"
            aria-label="Next slide"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Galeri Kegiatan (Improved with API data) -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-3 text-gray-800">Galeri Kegiatan</h2>
          <div class="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Lihat dokumentasi kegiatan terbaru dari DIPUSIPDA Kota Tasikmalaya
          </p>
        </div>

        <div
          v-if="galleryLoading"
          class="flex justify-center items-center h-64"
        >
          <div
            class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"
          ></div>
        </div>

        <div
          v-else-if="galleryError"
          class="text-center py-12 bg-red-50 rounded-xl"
        >
          <p class="text-red-600">{{ galleryError }}</p>
        </div>

        <div
          v-else
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <div
            v-for="(item, index) in galleryItems"
            :key="index"
            class="group relative rounded-xl overflow-hidden shadow-lg h-64 cursor-pointer"
            @click="openLightbox(index)"
          >
            <img
              :src="item.img"
              :alt="item.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <h3 class="text-white font-medium text-lg">{{ item.title }}</h3>
              </div>
            </div>
          </div>
        </div>

        <!-- View All Button -->
        <div class="text-center mt-10">
          <NuxtLink
            to="/galeri"
            class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            Lihat Semua Galeri
          </NuxtLink>
        </div>

        <!-- Lightbox Modal -->
        <div
          v-if="lightboxActive"
          class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          @click="closeLightbox"
        >
          <button
            @click.stop="prevLightboxImage"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div class="max-w-5xl max-h-[80vh] relative" @click.stop>
            <img
              :src="galleryItems[currentLightboxIndex].img"
              :alt="galleryItems[currentLightboxIndex].title"
              class="max-w-full max-h-[80vh] object-contain"
            />
            <div class="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
              <h3 class="text-white font-medium text-xl">
                {{ galleryItems[currentLightboxIndex].title }}
              </h3>
            </div>
          </div>

          <button
            @click.stop="nextLightboxImage"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <button
            @click.stop="closeLightbox"
            class="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

definePageMeta({
  layout: "default",
});

// News
const newsItems = ref([]);
const loading = ref(true);
const error = ref(null);
const currentSlide = ref(0);

// Gallery
const galleryItems = ref([]);
const galleryLoading = ref(true);
const galleryError = ref(null);
const lightboxActive = ref(false);
const currentLightboxIndex = ref(0);

// Counter Animation
const animateCounters = () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / speed;
    let count = 0;

    const updateCount = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count).toLocaleString() + "+";
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target.toLocaleString() + "+";
      }
    };

    updateCount();
  });
};

// Fetch news data
const fetchNews = async () => {
  try {
    const response = await $fetch("/api/berita");
    if (response.error) {
      throw new Error(response.error);
    }

    // Add excerpt for each news item
    newsItems.value = response.slice(0, 5).map((item) => ({
      ...item,
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat arcu sed libero feugiat, non fermentum urna dictum. Donec vel purus in dolor molestie.",
    }));
  } catch (err) {
    error.value = `Gagal memuat berita: ${err.message}`;
    console.error("Error fetching news:", err);

    // Fallback data if API fails
    newsItems.value = [
      {
        img: "/images/news1.jpg",
        judul: "Peningkatan Kompetensi Pengelola Perpustakaan",
        tanggal: "13 Maret 2025",
        sumber: "DIPUSIPDA Tasikmalaya",
        excerpt:
          "Program peningkatan kompetensi bagi pengelola perpustakaan yang diselenggarakan oleh DIPUSIPDA Kota Tasikmalaya telah berhasil melatih 50 pustakawan dari berbagai institusi.",
      },
      {
        img: "/images/news2.jpg",
        judul: "Pameran Buku dan Literasi 2025",
        tanggal: "28 Februari 2025",
        sumber: "DIPUSIPDA Tasikmalaya",
        excerpt:
          "DIPUSIPDA menggelar pameran buku dan literasi terbesar di Kota Tasikmalaya yang menghadirkan puluhan penerbit dan ribuan judul buku terbaru.",
      },
      {
        img: "/images/news3.jpg",
        judul: "Digitalisasi Arsip Daerah Tahap II",
        tanggal: "15 Februari 2025",
        sumber: "DIPUSIPDA Tasikmalaya",
        excerpt:
          "Tahap kedua program digitalisasi arsip daerah telah mencapai 70% dari target total. Program ini bertujuan untuk melestarikan dan memudahkan akses dokumen penting.",
      },
    ];
  } finally {
    loading.value = false;
  }
};

const fetchGallery = async () => {
  try {
    const response = await $fetch("/api/galeri");
    if (response.error) {
      throw new Error(response.error);
    }

    galleryItems.value = response.slice(0, 8);
  } catch (err) {
    galleryError.value = `Gagal memuat galeri: ${err.message}`;
    console.error("Error fetching gallery:", err);

    // Fallback data if API fails
    galleryItems.value = [
      {
        img: "/images/gallery1.jpg",
        title: "Seminar Literasi Digital 2025",
      },
      {
        img: "/images/gallery2.jpg",
        title: "Kunjungan Sekolah ke Perpustakaan",
      },
      {
        img: "/images/gallery3.jpg",
        title: "Workshop Pengelolaan Arsip",
      },
      {
        img: "/images/gallery4.jpg",
        title: "Pelatihan Pustakawan Daerah",
      },
      {
        img: "/images/gallery5.jpg",
        title: "Pameran Buku Tahunan",
      },
      {
        img: "/images/gallery6.jpg",
        title: "Lomba Bercerita Anak",
      },
      {
        img: "/images/gallery7.jpg",
        title: "Bedah Buku dengan Penulis Lokal",
      },
      {
        img: "/images/gallery8.jpg",
        title: "Hari Arsip Nasional",
      },
    ];
  } finally {
    galleryLoading.value = false;
  }
};

// Carousel functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % newsItems.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + newsItems.value.length) % newsItems.value.length;
};

// Lightbox functions
const openLightbox = (index) => {
  currentLightboxIndex.value = index;
  lightboxActive.value = true;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightboxActive.value = false;
  document.body.style.overflow = "auto";
};

const nextLightboxImage = () => {
  currentLightboxIndex.value =
    (currentLightboxIndex.value + 1) % galleryItems.value.length;
};

const prevLightboxImage = () => {
  currentLightboxIndex.value =
    (currentLightboxIndex.value - 1 + galleryItems.value.length) %
    galleryItems.value.length;
};

// Auto rotate carousel
let carouselInterval;
const startCarouselInterval = () => {
  carouselInterval = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopCarouselInterval = () => {
  clearInterval(carouselInterval);
};

onMounted(() => {
  // Fetch data
  fetchNews();
  fetchGallery();

  // Start carousel
  startCarouselInterval();

  // Animate counters on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  const counterSection = document.querySelector(".counter");
  if (counterSection) {
    observer.observe(counterSection);
  }
});

// Clean up intervals when component unmounts
onUnmounted(() => {
  stopCarouselInterval();
});

// Reset carousel interval when slide changes manually
watch(currentSlide, () => {
  stopCarouselInterval();
  startCarouselInterval();
});
</script>

<style>
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
