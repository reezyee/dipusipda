<template>
  <header
    class="bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-lg sticky top-0 z-20"
  >
    <div class="container mx-auto px-6 py-2 flex justify-between items-center">
      <!-- Logo dan Nama -->
      <div class="flex items-center space-x-4">
        <img
          src="~/assets/img/logo.png"
          alt="Logo DIPUSIPDA"
          class="h-12 w-auto backdrop-shadow-md"
        />
      </div>

      <!-- Navigasi Desktop -->
      <nav class="hidden md:flex items-center space-x-6">
        <NuxtLink to="/" class="nav-link">Beranda</NuxtLink>
        <div class="relative group">
          <span class="nav-link cursor-pointer flex items-center space-x-1">
            <span>Profil</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#e8eaed"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </span>
          <!-- This invisible bridge element helps maintain hover state -->
          <div class="absolute h-3 w-full left-0 top-full"></div>
          <div
            class="absolute left-0 mt-0 hidden group-hover:flex flex-col bg-white text-gray-800 shadow-md rounded-lg w-52 py-2 opacity-0 transform scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 z-10"
            style="top: calc(100% + 0.75rem)"
          >
            <NuxtLink
              to="/profil/sambutan"
              class="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >Sambutan</NuxtLink
            >
            <NuxtLink
              to="/profil/sejarah"
              class="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >Sejarah</NuxtLink
            >
            <NuxtLink
              to="/profil/visi-misi"
              class="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >Visi dan Misi</NuxtLink
            >
          </div>
        </div>

        <!-- Dropdown Perpustakaan -->
        <div class="relative group">
          <span class="nav-link cursor-pointer flex items-center space-x-1">
            <span>Perpustakaan</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#e8eaed"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </span>
          <!-- This invisible bridge element helps maintain hover state -->
          <div class="absolute h-3 w-full left-0 top-full"></div>
          <div
            class="absolute left-0 mt-0 hidden group-hover:flex flex-col bg-white text-gray-800 shadow-md rounded-lg w-52 py-2 opacity-0 transform scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 z-10"
            style="top: calc(100% + 0.75rem)"
          >
            <NuxtLink
              to="/perpustakaan"
              class="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >Profil Perpustakaan</NuxtLink
            >
            <NuxtLink
              to="/perpustakaan/layanan"
              class="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >Layanan Perpustakaan</NuxtLink
            >
          </div>
        </div>

        <!-- Dropdown Kearsipan -->
        <div class="relative group">
          <span class="nav-link cursor-pointer flex items-center space-x-1">
            <span>Kearsipan</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#e8eaed"
            >
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </span>
          <!-- This invisible bridge element helps maintain hover state -->
          <div class="absolute h-3 w-full left-0 top-full"></div>
          <div
            class="absolute left-0 mt-0 hidden group-hover:flex flex-col bg-white text-gray-800 shadow-md rounded-lg w-52 py-2 opacity-0 transform scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 z-10"
            style="top: calc(100% + 0.75rem)"
          >
            <NuxtLink
              to="/kearsipan"
              class="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >Profil Kearsipan</NuxtLink
            >
            <NuxtLink
              to="/kearsipan/layanan"
              class="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >Layanan Kearsipan</NuxtLink
            >
          </div>
        </div>

        <NuxtLink to="/galeri" class="nav-link">Galeri</NuxtLink>
        <NuxtLink to="/berita" class="nav-link">Berita</NuxtLink>
      </nav>

      <!-- Rest of the code remains the same -->
      <!-- Tombol Hamburger untuk Mobile -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none p-2">
        <svg
          class="w-7 h-7 transition-transform duration-300"
          :class="{ 'rotate-90': isMenuOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>

    <!-- Menu Mobile -->
    <transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-blue-700 px-6 py-4">
        <ul class="space-y-3">
          <li>
            <NuxtLink to="/" @click="toggleMenu" class="mobile-link"
              >Home</NuxtLink
            >
          </li>
          <li>
            <div class="flex flex-col">
              <span
                @click="toggleSubMenu('profil')"
                class="mobile-link cursor-pointer flex items-center justify-between"
              >
                Profil
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#e8eaed"
                  :class="{ 'rotate-180': subMenu.profil }"
                  class="transition-transform duration-300"
                >
                  <path
                    d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
                  />
                </svg>
              </span>
              <transition
                enter-active-class="transition-all duration-200"
                leave-active-class="transition-all duration-200"
                enter-from-class="opacity-0 max-h-0"
                leave-to-class="opacity-0 max-h-0"
              >
                <ul v-if="subMenu.profil" class="pl-4 space-y-2 mt-2">
                  <li>
                    <NuxtLink
                      to="/profil/sejarah"
                      @click="toggleMenu"
                      class="mobile-sub-link"
                      >Sejarah</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/profil/visi-misi"
                      @click="toggleMenu"
                      class="mobile-sub-link"
                      >Visi dan Misi</NuxtLink
                    >
                  </li>
                </ul>
              </transition>
            </div>
          </li>

          <li>
            <div class="flex flex-col">
              <span
                @click="toggleSubMenu('perpustakaan')"
                class="mobile-link cursor-pointer flex items-center justify-between"
              >
                Perpustakaan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#e8eaed"
                  :class="{ 'rotate-180': subMenu.perpustakaan }"
                  class="transition-transform duration-300"
                >
                  <path
                    d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
                  />
                </svg>
              </span>
              <transition
                enter-active-class="transition-all duration-200"
                leave-active-class="transition-all duration-200"
                enter-from-class="opacity-0 max-h-0"
                leave-to-class="opacity-0 max-h-0"
              >
                <ul v-if="subMenu.perpustakaan" class="pl-4 space-y-2 mt-2">
                  <li>
                    <NuxtLink
                      to="/perpustakaan"
                      @click="toggleMenu"
                      class="mobile-sub-link"
                      >Profil Perpustakaan</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/perpustakaan/layanan"
                      @click="toggleMenu"
                      class="mobile-sub-link"
                      >Layanan Perpustakaan</NuxtLink
                    >
                  </li>
                </ul>
              </transition>
            </div>
          </li>
          <li>
            <div class="flex flex-col">
              <span
                @click="toggleSubMenu('kearsipan')"
                class="mobile-link cursor-pointer flex items-center justify-between"
              >
                Kearsipan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#e8eaed"
                  :class="{ 'rotate-180': subMenu.kearsipan }"
                  class="transition-transform duration-300"
                >
                  <path
                    d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
                  />
                </svg>
              </span>
              <transition
                enter-active-class="transition-all duration-200"
                leave-active-class="transition-all duration-200"
                enter-from-class="opacity-0 max-h-0"
                leave-to-class="opacity-0 max-h-0"
              >
                <ul v-if="subMenu.kearsipan" class="pl-4 space-y-2 mt-2">
                  <li>
                    <NuxtLink
                      to="/kearsipan"
                      @click="toggleMenu"
                      class="mobile-sub-link"
                      >Profil Kearsipan</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/kearsipan/layanan"
                      @click="toggleMenu"
                      class="mobile-sub-link"
                      >Layanan Kearsipan</NuxtLink
                    >
                  </li>
                </ul>
              </transition>
            </div>
          </li>
          <li>
            <NuxtLink to="/galeri" @click="toggleMenu" class="mobile-link"
              >Galeri</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/berita" @click="toggleMenu" class="mobile-link"
              >Berita</NuxtLink
            >
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, reactive } from "vue";

const isMenuOpen = ref(false);
const subMenu = reactive({
  perpustakaan: false,
  kearsipan: false,
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleSubMenu = (menu) => {
  subMenu[menu] = !subMenu[menu];
};
</script>

<style scoped>
.nav-link {
  @apply relative px-3 py-2 text-base md:text-lg font-medium hover:text-blue-100 transition-colors duration-200 rounded-md;
}

.nav-link::after {
  @apply content-[''] absolute bottom-1 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 transform -translate-x-1/2;
}

.nav-link:hover::after {
  @apply w-3/4;
}

.mobile-link {
  @apply block py-2 text-lg font-medium hover:text-blue-100 transition-colors duration-200;
}

.mobile-sub-link {
  @apply block py-1 text-base hover:text-blue-100 transition-colors duration-200;
}
</style>
