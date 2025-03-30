<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header Section -->
    <section
      class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12"
    >
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Profil Perpustakaan
        </h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto">
          Gedung Layanan Perpustakaan Umum Daerah Kota Tasikmalaya.
        </p>
      </div>
    </section>

    <!-- Profil Content -->
    <section class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto space-y-8">
        <!-- Pengertian -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">Pengertian</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Menurut <strong>Undang-Undang Nomor 43 Tahun 2007</strong> tentang
            Perpustakaan, perpustakaan adalah institusi pengelola koleksi karya
            tulis, karya cetak, dan/atau karya rekam secara profesional dengan
            sistem yang baku guna memenuhi kebutuhan pendidikan, penelitian,
            pelestarian, informasi, dan rekreasi para pemustaka. Pengelolaan
            koleksi meliputi pengadaan, pengolahan, pemeliharaan, pelestarian,
            dan pelayanan koleksi. Selain itu, perpustakaan sebagai institusi
            layanan jasa juga harus melakukan pemasaran atau promosi terhadap
            jasa yang disediakan.
          </p>
          <p class="text-gray-700 text-lg leading-relaxed mt-4">
            Perpustakaan terdiri dari berbagai jenis, yaitu: Perpustakaan
            Nasional, Perpustakaan Umum, Perpustakaan Sekolah/Madrasah,
            Perpustakaan Perguruan Tinggi, dan Perpustakaan Khusus. Perpustakaan
            Umum adalah perpustakaan yang diperuntukkan bagi masyarakat luas
            sebagai sarana pembelajaran sepanjang hayat tanpa membedakan umur,
            jenis kelamin, suku, ras, agama, dan status sosial-ekonomi.
          </p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">Identitas</h2>
          <img src="@/assets/img/identitas.png" alt="Identitas">
        </div>
        
        <!-- Dasar Hukum -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">Dasar Hukum</h2>
          <ul
            class="list-disc pl-6 text-gray-700 text-lg leading-relaxed space-y-2"
          >
            <li>
              <strong>UU No. 10 Tahun 2001</strong> tentang Pembentukan Kota
              Tasikmalaya.
            </li>
            <li>
              <strong>UU No. 20 Tahun 2003</strong> tentang Sistem Pendidikan
              Nasional.
            </li>
            <li><strong>UU No. 43 Tahun 2007</strong> tentang Perpustakaan.</li>
            <li>
              <strong>UU No. 14 Tahun 2008</strong> tentang Keterbukaan
              Informasi Publik.
            </li>
            <li><strong>UU No. 44 Tahun 2008</strong> tentang Pornografi.</li>
            <li>
              <strong>UU No. 25 Tahun 2009</strong> tentang Pelayanan Publik.
            </li>
            <li>
              <strong>UU No. 23 Tahun 2014</strong> tentang Pemerintahan Daerah.
            </li>
            <li>
              <strong>PP No. 61 Tahun 2010</strong> tentang Pelaksanaan UU No.
              14 Tahun 2008.
            </li>
            <li>
              <strong>PP No. 96 Tahun 2012</strong> tentang Pelaksanaan UU No.
              25 Tahun 2009.
            </li>
            <li>
              <strong>PP No. 24 Tahun 2014</strong> tentang Pelaksanaan UU No.
              43 Tahun 2007.
            </li>
            <li>
              <strong>Perda Kota Tasikmalaya No. 7 Tahun 2017</strong> tentang
              Pembentukan Organisasi Perangkat Daerah.
            </li>
            <li>
              <strong>Perwal Tasikmalaya No. 40 Tahun 2016</strong> tentang
              Susunan Organisasi, Kedudukan, Tugas Pokok, Fungsi, dan Tata Kerja
              Perangkat Daerah.
            </li>
            <li>
              <strong>Perwal Tasikmalaya No. 67 Tahun 2016</strong> tentang
              Tugas Pokok dan Rincian Tugas Unit Dinas Perpustakaan dan
              Kearsipan Daerah.
            </li>
          </ul>
        </div>

        <!-- Indikator Pemetaan Kelembagaan -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">
            Indikator Pemetaan Kelembagaan
          </h2>
          <div class="space-y-6">
            <!-- Jumlah Penduduk -->
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800 text-center">
                  Jumlah Penduduk Kota Tasikmalaya Berdasarkan Kelompok Umur
                </h3>
                <img src="@/assets/img/indikatorpemetaan.png" alt="">
                <p class="text-gray-700 mt-1 text-center">
                  Data berdasarkan <em>Kota Tasikmalaya Dalam Angka 2016</em>.
                </p>
              </div>
            </div>
            <!-- Jumlah Pemustaka -->
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7v-2a3 3 0 105.356-1.857M17 20v-6m-10 6v-6m-3-6h16"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800 text-center">
                  Jumlah Pemustaka per Bulan
                </h3>
                <img src="@/assets/img/jumlahpemustaka.png" alt="">
                <p class="text-gray-700 mt-1 text-center">
                  Jumlah pengunjung perpustakaan milik Pemerintah Daerah Kota
                  Tasikmalaya per bulan.
                </p>
              </div>
            </div>
            <!-- Jumlah Koleksi -->
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
                <h3 class="text-lg font-semibold text-gray-800 text-center">
                  Jumlah Koleksi (Judul) Buku
                </h3>
                <img src="@/assets/img/jumlahjudul.png" alt="">
                <p class="text-gray-700 mt-1 text-center">
                  Jumlah judul buku yang dimiliki perpustakaan, termasuk satuan
                  pendidikan milik kota.
                </p>
              </div>
            </div>
            <!-- Jumlah Perpustakaan yang Dibina -->
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800 text-center">
                  Jumlah Perpustakaan yang Dibina
                </h3>
                <img src="@/assets/img/jumlahperpustakaan.png" alt="">
                <p class="text-gray-700 mt-1 text-center">
                  Meliputi SD/MI, SMP/MTs, perpustakaan masyarakat,
                  desa/kelurahan, kecamatan, dan khusus.
                </p>
              </div>
            </div>
            <!-- Jumlah Promosi -->
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
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800 text-center">
                  Jumlah Promosi Gemar Membaca
                </h3>
                <img src="@/assets/img/jumlahpromosi.png" alt="">
                <p class="text-gray-700 mt-1 text-center">
                  Kegiatan promosi dalam 1 tahun oleh Pemerintah Kota
                  Tasikmalaya.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Kerjasama Perpustakaan -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">
            Kerjasama Perpustakaan
          </h2>
          <ul
            class="list-disc pl-6 text-gray-700 text-lg leading-relaxed space-y-2"
          >
            <li>
              Kerjasama layanan dengan Perpustakaan Universitas Perjuangan.
            </li>
            <li>
              Kerjasama layanan dengan Perpustakaan Universitas Muhammadiyah
              Tasikmalaya.
            </li>
            <li>
              Kerjasama layanan dengan Perpustakaan Universitas Siliwangi.
            </li>
            <li>
              Kerjasama layanan dengan Perpustakaan Politeknik Kesehatan Depkes
              RI.
            </li>
          </ul>
        </div>

        <!-- Layanan Perpustakaan -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">
            Layanan Perpustakaan
          </h2>
          <ul
            class="list-disc pl-6 text-gray-700 text-lg leading-relaxed space-y-2"
          >
            <li>Layanan Keanggotaan</li>
            <li>Layanan Sirkulasi (Peminjaman dan Pengembalian Buku)</li>
            <li>Layanan Rujukan (Referensi)</li>
            <li>Layanan Perpustakaan Keliling</li>
            <li>Layanan Bulk Loan (Paket Buku)</li>
            <li>Layanan Penelusuran Informasi/Bahan Perpustakaan</li>
            <li>
              Layanan Penyebaran Informasi Terseleksi (Selective Dissemination
              of Information)
            </li>
            <li>Layanan Penyebaran Informasi Mutakhir</li>
            <li>Layanan Story Telling</li>
            <li>Layanan Pendidikan Pemustaka</li>
            <li>Layanan Internet</li>
            <li>Layanan Hot Spot</li>
            <li>Layanan Audio Visual</li>
            <li>Layanan Membaca</li>
          </ul>
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
