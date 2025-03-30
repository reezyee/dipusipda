import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { ref, watch, mergeProps, withCtx, createTextVNode, createBlock, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './server.mjs';
import 'vue-router';

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};

/* empty css            */
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const newsItems = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const currentSlide = ref(0);
    const galleryItems = ref([]);
    const galleryLoading = ref(true);
    const galleryError = ref(null);
    const lightboxActive = ref(false);
    const currentLightboxIndex = ref(0);
    let carouselInterval;
    const startCarouselInterval = () => {
      carouselInterval = setInterval();
    };
    const stopCarouselInterval = () => {
      clearInterval(carouselInterval);
    };
    watch(currentSlide, () => {
      stopCarouselInterval();
      startCarouselInterval();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50" }, _attrs))}><section class="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 overflow-hidden"><div class="absolute inset-0 bg-pattern opacity-20"></div><div class="absolute inset-0 overflow-hidden"></div><div class="container mx-auto px-6 text-center relative z-10"><h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in"> Selamat Datang di DIPUSIPDA </h1><p class="text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"> Dinas Perpustakaan dan Kearsipan Daerah Kota Tasikmalaya - <span class="font-medium italic">Mengelola literasi dan arsip untuk masa depan yang lebih baik.</span></p><div class="space-x-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/profil/sambutan",
        class: "inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profil Kami `);
          } else {
            return [
              createTextVNode(" Profil Kami ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/perpustakaan/layanan",
        class: "inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Layanan Perpus `);
          } else {
            return [
              createTextVNode(" Layanan Perpus ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/kearsipan/layanan",
        class: "inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Layanan Kearsipan `);
          } else {
            return [
              createTextVNode(" Layanan Kearsipan ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="container mx-auto px-6 py-16 -mt-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 border-t-4 border-blue-600"><div class="flex items-center justify-center mb-4"><svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg></div><h3 class="text-5xl font-bold text-blue-600 mb-2 text-center counter" data-target="28000"> 28K+ </h3><p class="text-gray-600 mt-2 text-center font-medium">Judul Buku</p></div><div class="bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 border-t-4 border-blue-600"><div class="flex items-center justify-center mb-4"><svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><h3 class="text-5xl font-bold text-blue-600 mb-2 text-center counter" data-target="10000"> 10K+ </h3><p class="text-gray-600 mt-2 text-center font-medium"> Dokumen Arsip </p></div><div class="bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 border-t-4 border-blue-600"><div class="flex items-center justify-center mb-4"><svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div><h3 class="text-5xl font-bold text-blue-600 mb-2 text-center counter" data-target="50000"> 50K+ </h3><p class="text-gray-600 mt-2 text-center font-medium"> Pengunjung Tahunan </p></div></div></section><section class="py-16 bg-gradient-to-b from-white to-gray-100"><div class="container mx-auto px-6"><div class="text-center mb-12"><h2 class="text-4xl font-bold mb-3 text-gray-800">Layanan Kami</h2><div class="h-1 w-20 bg-blue-600 mx-auto"></div><p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"> Kami menyediakan berbagai layanan berkualitas untuk kebutuhan literasi dan kearsipan Anda </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"><div class="h-3 bg-blue-600"></div><div class="p-8"><div class="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-300"><svg class="w-12 h-12 text-blue-600 group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg></div><h3 class="text-2xl font-bold text-blue-600 mb-4 text-center"> Perpustakaan </h3><p class="text-gray-600 text-center mb-6"> Koleksi buku lengkap, ruang baca nyaman, dan akses digital untuk literasi masyarakat. </p><div class="text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/perpustakaan/layanan",
        class: "inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lihat Layanan `);
          } else {
            return [
              createTextVNode(" Lihat Layanan ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"><div class="h-3 bg-blue-600"></div><div class="p-8"><div class="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-300"><svg class="w-12 h-12 text-blue-600 group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><h3 class="text-2xl font-bold text-blue-600 mb-4 text-center"> Kearsipan </h3><p class="text-gray-600 text-center mb-6"> Pengelolaan arsip profesional, penyimpanan aman, dan digitalisasi dokumen. </p><div class="text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/kearsipan/layanan",
        class: "inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lihat Layanan `);
          } else {
            return [
              createTextVNode(" Lihat Layanan ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"><div class="h-3 bg-blue-600"></div><div class="p-8"><div class="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-300"><svg class="w-12 h-12 text-blue-600 group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h3 class="text-2xl font-bold text-blue-600 mb-4 text-center"> Informasi &amp; Berita </h3><p class="text-gray-600 text-center mb-6"> Update kegiatan, pameran, dan informasi penting lainnya. </p><div class="text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/berita",
        class: "inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Baca Berita `);
          } else {
            return [
              createTextVNode(" Baca Berita ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></section><section class="py-16 bg-white"><div class="container mx-auto px-6"><div class="text-center mb-12"><h2 class="text-4xl font-bold mb-3 text-gray-800">Berita Terbaru</h2><div class="h-1 w-20 bg-blue-600 mx-auto"></div><p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"> Dapatkan informasi terbaru dari kegiatan dan program DIPUSIPDA </p></div>`);
      if (loading.value) {
        _push(`<div class="flex justify-center items-center h-64"><div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div></div>`);
      } else if (error.value) {
        _push(`<div class="text-center py-12 bg-red-50 rounded-xl"><svg class="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><p class="text-red-600 text-lg font-medium">${ssrInterpolate(error.value)}</p></div>`);
      } else {
        _push(`<div class="relative"><div class="overflow-hidden rounded-xl shadow-xl"><div class="flex transition-transform duration-500 ease-in-out" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value * 100}%)` })}"><!--[-->`);
        ssrRenderList(newsItems.value, (news, index) => {
          _push(`<div class="min-w-full"><div class="bg-white p-8 flex md:flex-row flex-col items-center md:items-start gap-6"><img${ssrRenderAttr("src", news.img)} alt="Berita" class="w-full md:w-64 h-48 object-cover rounded-lg shadow-md"><div class="flex-1"><span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">${ssrInterpolate(news.tanggal)}</span><h3 class="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">${ssrInterpolate(news.judul)}</h3><p class="text-gray-600 mb-4 line-clamp-3">${ssrInterpolate(news.excerpt || "Baca selengkapnya untuk mengetahui lebih detail tentang berita ini.")}</p><div class="flex items-center justify-between"><span class="text-sm text-gray-500">Sumber: ${ssrInterpolate(news.sumber)}</span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/berita",
            class: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Baca Selengkapnya <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"${_scopeId}></path></svg>`);
              } else {
                return [
                  createTextVNode(" Baca Selengkapnya "),
                  (openBlock(), createBlock("svg", {
                    class: "w-4 h-4 ml-2",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M14 5l7 7m0 0l-7 7m7-7H3"
                    })
                  ]))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div></div>`);
        });
        _push(`<!--]--></div></div><div class="flex justify-center mt-6 space-x-2"><!--[-->`);
        ssrRenderList(newsItems.value, (_, index) => {
          _push(`<button class="${ssrRenderClass([
            currentSlide.value === index ? "bg-blue-600 w-6" : "bg-gray-300",
            "w-3 h-3 rounded-full transition-all duration-300"
          ])}"></button>`);
        });
        _push(`<!--]--></div><button class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white shadow-lg transition-all duration-300" aria-label="Previous slide"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button><button class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white shadow-lg transition-all duration-300" aria-label="Next slide"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div>`);
      }
      _push(`</div></section><section class="py-16 bg-gray-100"><div class="container mx-auto px-6"><div class="text-center mb-12"><h2 class="text-4xl font-bold mb-3 text-gray-800">Galeri Kegiatan</h2><div class="h-1 w-20 bg-blue-600 mx-auto"></div><p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"> Lihat dokumentasi kegiatan terbaru dari DIPUSIPDA Kota Tasikmalaya </p></div>`);
      if (galleryLoading.value) {
        _push(`<div class="flex justify-center items-center h-64"><div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div></div>`);
      } else if (galleryError.value) {
        _push(`<div class="text-center py-12 bg-red-50 rounded-xl"><p class="text-red-600">${ssrInterpolate(galleryError.value)}</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"><!--[-->`);
        ssrRenderList(galleryItems.value, (item, index) => {
          _push(`<div class="group relative rounded-xl overflow-hidden shadow-lg h-64 cursor-pointer"><img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", item.title)} class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"><div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="absolute bottom-0 left-0 right-0 p-4"><h3 class="text-white font-medium text-lg">${ssrInterpolate(item.title)}</h3></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`<div class="text-center mt-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/galeri",
        class: "inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lihat Semua Galeri `);
          } else {
            return [
              createTextVNode(" Lihat Semua Galeri ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (lightboxActive.value) {
        _push(`<div class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"><button class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button><div class="max-w-5xl max-h-[80vh] relative"><img${ssrRenderAttr("src", galleryItems.value[currentLightboxIndex.value].img)}${ssrRenderAttr("alt", galleryItems.value[currentLightboxIndex.value].title)} class="max-w-full max-h-[80vh] object-contain"><div class="absolute bottom-0 left-0 right-0 bg-black/70 p-4"><h3 class="text-white font-medium text-xl">${ssrInterpolate(galleryItems.value[currentLightboxIndex.value].title)}</h3></div></div><button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button><button class="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
