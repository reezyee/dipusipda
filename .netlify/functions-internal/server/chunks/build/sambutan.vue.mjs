import { unref, useSSRContext } from 'vue';
import { ssrRenderAttr } from 'vue/server-renderer';
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

const sambutanImage = "" + __buildAssetsURL("sambutan.BzmLfW1z.png");

const _sfc_main = {
  __name: "sambutan",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12" data-v-f8fa0362><div class="container mx-auto px-6 text-center" data-v-f8fa0362><h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" data-v-f8fa0362> Sambutan Kepala Dinas </h1><p class="text-lg md:text-xl max-w-2xl mx-auto" data-v-f8fa0362> Dokumentasi kegiatan Dinas Perpustakaan dan Kearsipan Daerah Kota Tasikmalaya. </p></div></section><section class="container mx-auto flex flex-col items-center py-8" data-v-f8fa0362><img${ssrRenderAttr("src", unref(sambutanImage))} alt="Sambutan" class="max-w-xl w-full rounded-lg shadow-lg object-cover" data-v-f8fa0362></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profil/sambutan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sambutan = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f8fa0362"]]);

export { sambutan as default };
//# sourceMappingURL=sambutan.vue.mjs.map
