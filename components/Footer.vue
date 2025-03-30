<template>
  <!-- Enhanced Footer -->
  <footer
    class="bg-gradient-to-r from-blue-800 to-indigo-800 text-white pt-12 pb-6"
  >
    <!-- Main Footer Content -->
    <div class="container mx-auto px-6">
      <!-- Logo and Info Section -->
      <div class="flex flex-col md:flex-row justify-between mb-12">
        <!-- Brand Section -->
        <div class="mb-8 md:mb-0 md:w-1/3">
          <div class="flex items-center mb-4">
              <img src="@/assets/img/logo.png" alt="Logo" class="w-fit h-20 mr-2" />
          </div>
          <p class="text-gray-300 mb-6 leading-relaxed">
            Dinas Perpustakaan dan Kearsipan Daerah Kota Tasikmalaya - Mengelola
            literasi dan arsip untuk masa depan yang lebih baik.
          </p>

          <!-- Social Media Icons -->
          <div class="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              class="bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              class="bg-blue-400 hover:bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.013 10.013 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              class="bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              class="bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="mb-8 md:mb-0 md:w-1/4">
          <h3
            class="text-xl font-bold mb-6 relative pl-3 border-l-4 border-blue-600"
          >
            Tautan Cepat
          </h3>
          <ul class="space-y-3">
            <li
              class="transform hover:-translate-y-1 transition-transform duration-300"
            >
              <NuxtLink
                to="/profil/sejarah"
                class="text-gray-300 hover:text-white flex items-center"
              >
                <svg
                  class="w-4 h-4 mr-2 text-blue-400"
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
                Profil
              </NuxtLink>
            </li>
            <li
              class="transform hover:-translate-y-1 transition-transform duration-300"
            >
              <NuxtLink
                to="/perpustakaan/layanan"
                class="text-gray-300 hover:text-white flex items-center"
              >
                <svg
                  class="w-4 h-4 mr-2 text-blue-400"
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
                Layanan Perpustakaan
              </NuxtLink>
            </li>
            <li
              class="transform hover:-translate-y-1 transition-transform duration-300"
            >
              <NuxtLink
                to="/kearsipan/layanan"
                class="text-gray-300 hover:text-white flex items-center"
              >
                <svg
                  class="w-4 h-4 mr-2 text-blue-400"
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
                Layanan Kearsipan
              </NuxtLink>
            </li>
            <li
              class="transform hover:-translate-y-1 transition-transform duration-300"
            >
              <NuxtLink
                to="/berita"
                class="text-gray-300 hover:text-white flex items-center"
              >
                <svg
                  class="w-4 h-4 mr-2 text-blue-400"
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
                Berita
              </NuxtLink>
            </li>
            <li
              class="transform hover:-translate-y-1 transition-transform duration-300"
            >
              <NuxtLink
                to="/galeri"
                class="text-gray-300 hover:text-white flex items-center"
              >
                <svg
                  class="w-4 h-4 mr-2 text-blue-400"
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
                Galeri
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info and Hours -->
        <div
          class="md:w-1/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8"
        >
          <!-- Contact Info -->
          <div>
            <h3
              class="text-xl font-bold mb-6 relative pl-3 border-l-4 border-blue-600"
            >
              Kontak Kami
            </h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="bg-blue-700 rounded-full p-2 mr-3 mt-1">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-gray-300">Komplek Perkantoran, Jl. Ir. H. Juanda, Sukamulya, Bungursari, Tasikmalaya, Jawa Barat 46151</p>
                </div>
              </li>
              <li class="flex items-center">
                <div class="bg-blue-700 rounded-full p-2 mr-3">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498.913a1 1 0 01.684.949l.003 5.499-.006 3.267A1 1 0 0111 17H6.007A1.54 1.54 0 014.5 15.5L3 14V5z"
                    />
                  </svg>
                </div>
                <p class="text-gray-300">(0265)-342610</p>
              </li>
              <li class="flex items-center">
                <div class="bg-blue-700 rounded-full p-2 mr-3">
                  <svg
                    class="w-4 h-4"
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
                </div>
                <a href="mailto:dipusipdatasikmalayakota@gmail.com" class="text-gray-300">dipusipdatasikmalayakota@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="container mx-auto px-6">
      <div class="border-t border-gray-700 my-8"></div>
    </div>

    <!-- Bottom Footer -->
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; 2025 DIPUSIPDA Kota Tasikmalaya. Hak Cipta Dilindungi.
        </p>
      </div>
    </div>
  </footer>
</template>
