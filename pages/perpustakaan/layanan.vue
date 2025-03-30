<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header Section -->
    <section
      class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12"
    >
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Layanan Perpustakaan
        </h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto">
          Beragam layanan dan promosi untuk mendukung literasi dan kebutuhan
          informasi masyarakat Kota Tasikmalaya.
        </p>
      </div>
    </section>

    <!-- Layanan Section -->
    <section class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto space-y-12">
        <!-- Layanan Perpustakaan -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">
            Layanan Perpustakaan
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Layanan Keanggotaan
                </h3>
                <p class="text-gray-700 mt-1">
                  Pembuatan kartu anggota perpustakaan. Formulir dapat diunduh
                  <a
                    href="https://drive.google.com/drive/folders/1eG4EtkgzWo_znDNiYKjl_EzrxMDqvthV?usp=sharing"
                    target="_blank"
                    class="text-blue-500 hover:underline"
                    >di sini</a
                  >.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Layanan Sirkulasi
                </h3>
                <p class="text-gray-700 mt-1">
                  Peminjaman dan pengembalian buku untuk pemustaka.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
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
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Layanan Rujukan (Referensi)
                </h3>
                <p class="text-gray-700 mt-1">
                  Akses ke koleksi referensi untuk kebutuhan penelitian.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 14v6m-3-6v6m-6-6v6m9-11a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Perpustakaan Keliling
                </h3>
                <p class="text-gray-700 mt-1">
                  Layanan mobile untuk menjangkau sekolah dan desa.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Layanan Bulk Loan
                </h3>
                <p class="text-gray-700 mt-1">
                  Peminjaman paket buku untuk kelompok atau komunitas.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Penelusuran Informasi
                </h3>
                <p class="text-gray-700 mt-1">
                  Bantuan pencarian bahan perpustakaan.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Selective Dissemination of Information
                </h3>
                <p class="text-gray-700 mt-1">
                  Penyebaran informasi terpilih untuk pemustaka.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Informasi Mutakhir
                </h3>
                <p class="text-gray-700 mt-1">
                  Penyebaran informasi terbaru kepada masyarakat.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Story Telling
                </h3>
                <p class="text-gray-700 mt-1">
                  Kegiatan bercerita untuk anak-anak dan pemustaka.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
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
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Pendidikan Pemustaka
                </h3>
                <p class="text-gray-700 mt-1">
                  Pelatihan untuk meningkatkan kemampuan pemustaka.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Internet & Hot Spot
                </h3>
                <p class="text-gray-700 mt-1">
                  Akses internet gratis untuk pemustaka.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Audio Visual
                </h3>
                <p class="text-gray-700 mt-1">
                  Fasilitas audio-visual untuk pembelajaran.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
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
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Layanan Membaca
                </h3>
                <p class="text-gray-700 mt-1">
                  Ruang baca nyaman untuk pemustaka.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Promosi Perpustakaan -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">
            Promosi Perpustakaan
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
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
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Bimbingan Teknis
                </h3>
                <p class="text-gray-700 mt-1">
                  Pelatihan pengelolaan perpustakaan.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 7.714 15.714 11.571l2.286 6.857L12 14.571 6.714 18.429l2.286-6.857L3 7.714 8.286 3.857z"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Pameran & Lomba
                </h3>
                <p class="text-gray-700 mt-1">
                  Pameran dan lomba bercerita tingkat kota.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 14v6m-3-6v6m-6-6v6m9-11a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Perpustakaan Keliling Hari Minggu
                </h3>
                <p class="text-gray-700 mt-1">
                  Layanan di Taman Kota setiap hari Minggu.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Pemilihan Pemustaka Terbaik
                </h3>
                <p class="text-gray-700 mt-1">
                  Penghargaan untuk pemustaka aktif.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Media Cetak</h3>
                <p class="text-gray-700 mt-1">
                  Brosur, spanduk, leaflet, buku kecil, baligo, stiker, banner,
                  surat kabar.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l4-4h-.586A1.994 1.994 0 019 12.414"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Tatap Muka</h3>
                <p class="text-gray-700 mt-1">
                  Pameran, talk show, seminar, diskusi, bedah buku, road show,
                  perpustakaan keliling.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <svg
                class="w-8 h-8 text-blue-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">
                  Media Elektronik
                </h3>
                <p class="text-gray-700 mt-1">
                  Talk show dan interaktif melalui TV.
                </p>
              </div>
            </div>
          </div>
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
