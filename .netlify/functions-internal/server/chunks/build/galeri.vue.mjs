import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "galeri",
  __ssrInlineRender: true,
  setup(__props) {
    const galeriItems = ref([]);
    const loading = ref(true);
    const error = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50 min-h-screen" }, _attrs))} data-v-7ec59ab5><section class="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-12" data-v-7ec59ab5><div class="container mx-auto px-6 text-center" data-v-7ec59ab5><h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" data-v-7ec59ab5> Galeri Kegiatan </h1><p class="text-lg md:text-xl max-w-2xl mx-auto" data-v-7ec59ab5> Dokumentasi kegiatan Dinas Perpustakaan dan Kearsipan Daerah Kota Tasikmalaya. </p></div></section><section class="container mx-auto px-6 py-12" data-v-7ec59ab5>`);
      if (loading.value) {
        _push(`<div class="text-center text-gray-600" data-v-7ec59ab5> Memuat galeri... </div>`);
      } else if (error.value) {
        _push(`<div class="text-center text-red-600" data-v-7ec59ab5>${ssrInterpolate(error.value)}</div>`);
      } else if (galeriItems.value.length === 0) {
        _push(`<div class="text-center text-gray-600" data-v-7ec59ab5> Tidak ada data galeri yang ditemukan untuk saat ini. </div>`);
      } else {
        _push(`<div class="grid grid-cols-5" data-v-7ec59ab5><!--[-->`);
        ssrRenderList(galeriItems.value, (item, index) => {
          _push(`<div class="relative group" data-v-7ec59ab5><img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", item.title)} class="w-full h-40 object-cover rounded-lg shadow-md pt-1 px-1" data-v-7ec59ab5><div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center" data-v-7ec59ab5>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.href,
            class: "text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/galeri.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const galeri = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7ec59ab5"]]);

export { galeri as default };
//# sourceMappingURL=galeri.vue.mjs.map
