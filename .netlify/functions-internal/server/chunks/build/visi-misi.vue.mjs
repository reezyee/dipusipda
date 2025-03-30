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
  __name: "visi-misi",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 min-h-screen" }, _attrs))} data-v-64fae309><section class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12" data-v-64fae309><div class="container mx-auto px-6 text-center" data-v-64fae309><h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" data-v-64fae309>Visi dan Misi</h1><p class="text-lg md:text-xl max-w-2xl mx-auto" data-v-64fae309> Komitmen Dinas Perpustakaan dan Kearsipan Daerah Kota Tasikmalaya untuk masyarakat. </p></div></section><section class="container mx-auto px-6 py-12" data-v-64fae309><div class="max-w-4xl mx-auto space-y-12" data-v-64fae309><div class="bg-white p-6 rounded-lg shadow-md" data-v-64fae309><div class="flex items-start space-x-4" data-v-64fae309><div class="flex-shrink-0" data-v-64fae309><svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-64fae309><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-v-64fae309></path></svg></div><div data-v-64fae309><h2 class="text-2xl font-semibold text-blue-600 mb-3" data-v-64fae309>Visi</h2><p class="text-gray-700 text-lg leading-relaxed" data-v-64fae309> “KOTA TASIKMALAYA YANG RELIGIUS, MAJU DAN MADANI” </p></div></div></div><div class="bg-white p-6 rounded-lg shadow-md" data-v-64fae309><div class="flex items-start space-x-4" data-v-64fae309><div class="flex-shrink-0" data-v-64fae309><svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-64fae309><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-64fae309></path></svg></div><div data-v-64fae309><h2 class="text-2xl font-semibold text-blue-600 mb-3" data-v-64fae309>Misi</h2><ul class="list-decimal pl-6 text-gray-700 text-lg leading-relaxed space-y-2" data-v-64fae309><li data-v-64fae309>Meningkatkan budaya literasi informasi masyarakat melalui pembinaan dan pengembangan perpustakaan.</li><li data-v-64fae309>Meningkatkan kualitas pengelolaan dan pelayanan kearsipan berbasis teknologi informasi.</li><li data-v-64fae309>Meningkatkan kompetensi sumber daya manusia perpustakaan dan kearsipan.</li><li data-v-64fae309>Mengembangkan jejaring kerja sama perpustakaan dan kearsipan.</li></ul></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profil/visi-misi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const visiMisi = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-64fae309"]]);

export { visiMisi as default };
//# sourceMappingURL=visi-misi.vue.mjs.map
