<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header Section -->
    <section class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Layanan Kearsipan</h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto">
          Layanan Kearsipan Dinas Perpustakaan dan Kearsipan Daerah Kota Tasikmalaya.
        </p>
      </div>
    </section>

    <!-- Layanan Kearsipan Content -->
    <section class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto space-y-8">
        <!-- Deskripsi Umum -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">Tentang Layanan Kearsipan</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Dalam upaya mewujudkan Gerakan Nasional Sadar Tertib Arsip sebagaimana diamanatkan Peraturan Kepala ANRI Nomor 17 Tahun 2017, Dinas Perpustakaan dan Kearsipan Daerah Kota Tasikmalaya mengelola beberapa unit layanan kearsipan dengan tujuan:
          </p>
          <ul class="list-disc pl-6 mt-2 text-gray-700 text-lg leading-relaxed">
            <li>Memberikan kesempatan bagi masyarakat dan institusi selaku pencipta arsip untuk menyimpan arsip yang sifatnya statis atau meminjam koleksi arsip yang dikelola DIPUSIPDA selaku Lembaga Kearsipan Daerah sesuai dengan klasifikasinya.</li>
            <li>Menyediakan sumber informasi kearsipan dan dokumentasi daerah khususnya Kota Tasikmalaya.</li>
          </ul>
          <p class="text-gray-700 text-lg leading-relaxed mt-4">
            Guna mendukung terkelolanya arsip Kota Tasikmalaya, Dinas Perpustakaan dan Kearsipan menyediakan berbagai layanan sebagai berikut:
          </p> 
          <img src="@/assets/img/sop.png" alt="SOP" >
        </div>

        <!-- Daftar Layanan -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">Jenis Layanan Kearsipan</h2>
          <div class="space-y-6">
            <!-- Layanan Informasi Kearsipan -->
            <div class="flex items-start space-x-4">
              <svg class="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Layanan Informasi Kearsipan</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  Memberikan layanan informasi kearsipan kepada masyarakat pengguna arsip baik secara langsung maupun tidak langsung.
                </p>
              </div>
            </div>

            <!-- Layanan Konsultasi Kearsipan -->
            <div class="flex items-start space-x-4">
              <svg class="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m-2 0V6a2 2 0 012-2h2a2 2 0 012 2v2" />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Layanan Konsultasi Kearsipan</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  Memberikan konsultasi kepada masyarakat pengguna arsip terkait pengelolaan arsip.
                </p>
              </div>
            </div>

            <!-- Layanan Pembenahan Arsip -->
            <div class="flex items-start space-x-4">
              <svg class="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Layanan Pembenahan Arsip</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  Memberikan jasa pembenahan arsip kepada masyarakat pengguna arsip.
                </p>
              </div>
            </div>

            <!-- Layanan Audio Visual (Wisata Arsip) -->
            <div class="flex items-start space-x-4">
              <svg class="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-7-6h8v8H8V8z" />
              </svg>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Layanan Audio Visual (Wisata Arsip)</h3>
                <p class="text-gray-700 text-lg leading-relaxed">
                  Memberikan layanan wisata arsip kepada masyarakat pengguna arsip melalui media audio visual.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Jam Layanan -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">Jam Layanan</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Seluruh layanan di Unit Layanan Arsip Dinas Perpustakaan dan Kearsipan Daerah Kota Tasikmalaya berlangsung dengan jam layanan:
          </p>
          <ul class="list-disc pl-6 mt-2 text-gray-700 text-lg leading-relaxed">
            <li>Senin – Kamis: 07.30 – 16.00 WIB</li>
            <li>Jumat: 07.30 – 16.30 WIB</li>
          </ul>
        </div>

        <!-- Prosedur Layanan -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">Prosedur Layanan</h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Pemohon layanan kearsipan diharuskan:
          </p>
          <ul class="list-disc pl-6 mt-2 text-gray-700 text-lg leading-relaxed">
            <li>Mengisi buku tamu.</li>
            <li>Menyampaikan surat pengantar/tugas serta kartu identitas diri.</li>
          </ul>
        </div>
        
        <!-- Data Layanan -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-blue-600 mb-4">Data Layanan</h2>
          <img src="@/assets/img/kunjungan.png" alt="Kunjungan" >
          <img src="@/assets/img/penggunaanarsip.png" alt="Penggunaan Arsip" >
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