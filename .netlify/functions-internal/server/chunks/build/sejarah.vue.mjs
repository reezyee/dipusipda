import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';

const _sfc_main = {
  __name: "sejarah",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 min-h-screen" }, _attrs))} data-v-eac80521><section class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12" data-v-eac80521><div class="container mx-auto px-6 text-center" data-v-eac80521><h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" data-v-eac80521> Sejarah Lembaga </h1><p class="text-lg md:text-xl max-w-2xl mx-auto" data-v-eac80521> Perjalanan panjang Dinas Perpustakaan dan Kearsipan Daerah Kota Tasikmalaya. </p></div></section><section class="container mx-auto px-6 py-12" data-v-eac80521><div class="max-w-4xl mx-auto" data-v-eac80521><h2 class="text-3xl font-semibold text-gray-800 mb-12 text-center" data-v-eac80521> Linimasa Sejarah </h2><div class="space-y-12 relative" data-v-eac80521><div class="hidden md:block absolute w-1 bg-blue-400 h-[calc(100%-3rem)] top-12 left-1/2 transform -translate-x-1/2" data-v-eac80521></div><div class="relative flex items-start" data-v-eac80521><div class="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10" data-v-eac80521> 1976 </div><div class="ml-6 bg-white p-6 rounded-lg shadow-md w-full" data-v-eac80521><h3 class="text-xl font-semibold text-blue-600 mb-2" data-v-eac80521> Pembentukan Kota Administratif </h3><p class="text-gray-600" data-v-eac80521> Kota Administratif Tasikmalaya diresmikan melalui <strong data-v-eac80521>PP No. 22 Tahun 1976</strong>. Peresmian ditandai oleh Menteri Dalam Negeri H. Amir Machmud, dengan Drs. H. Oman Roosman sebagai Walikota pertama. </p></div><div class="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-5 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2" data-v-eac80521></div></div><div class="relative flex items-start" data-v-eac80521><div class="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10" data-v-eac80521> 2003 </div><div class="ml-6 bg-white p-6 rounded-lg shadow-md w-full" data-v-eac80521><h3 class="text-xl font-semibold text-blue-600 mb-2" data-v-eac80521> Kantor Arsip dan Perpustakaan </h3><p class="text-gray-600" data-v-eac80521> Dibentuk melalui <strong data-v-eac80521>Perda No. 16 Tahun 2003</strong> pada 21 Oktober 2003, sesuai UU No. 10 Tahun 2001 Pasal 13. Tanggal ini menjadi hari jadi lembaga. </p></div><div class="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-5 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2" data-v-eac80521></div></div><div class="relative flex items-start" data-v-eac80521><div class="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10" data-v-eac80521> 2016 </div><div class="ml-6 bg-white p-6 rounded-lg shadow-md w-full" data-v-eac80521><h3 class="text-xl font-semibold text-blue-600 mb-2" data-v-eac80521> Transformasi menjadi DIPUSIPDA </h3><p class="text-gray-600" data-v-eac80521> Bertransformasi menjadi <strong data-v-eac80521>DIPUSIPDA</strong> berdasarkan <strong data-v-eac80521>Perda No. 7 Tahun 2016</strong> dan UU No. 23 Tahun 2014, dengan tugas membantu Walikota di bidang perpustakaan dan kearsipan. </p></div><div class="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-5 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2" data-v-eac80521></div></div></div><div class="mt-12 bg-white p-6 rounded-lg shadow-md" data-v-eac80521><h3 class="text-2xl font-semibold text-gray-800 mb-4" data-v-eac80521> Fungsi DIPUSIPDA </h3><p class="text-gray-600 leading-relaxed" data-v-eac80521> Sebagai bagian dari fungsinya, DIPUSIPDA menyelenggarakan kebijakan, pelaksanaan, serta evaluasi di bidang perpustakaan dan kearsipan untuk mendukung literasi masyarakat dan pengelolaan arsip yang profesional di Kota Tasikmalaya. </p></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profil/sejarah.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sejarah = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eac80521"]]);

export { sejarah as default };
//# sourceMappingURL=sejarah.vue.mjs.map
