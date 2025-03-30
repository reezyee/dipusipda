import { d as defineEventHandler } from '../../_/nitro.mjs';
import axios from 'axios';
import * as cheerio from 'cheerio';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const berita = defineEventHandler(async (event) => {
  try {
    const { data } = await axios.get(
      "https://dipusipda.tasikmalayakota.go.id/site/berita"
    );
    const $ = cheerio.load(data);
    const beritaList = [];
    $(".media").each((i, elem) => {
      let imgSrc = $(elem).find(".media-left img").attr("src") || "";
      if (imgSrc && !imgSrc.startsWith("http")) {
        imgSrc = `https://dipusipda.tasikmalayakota.go.id/${imgSrc.replace(
          /^\/+/,
          ""
        )}`;
      }
      beritaList.push({
        img: imgSrc || "Gambar tidak tersedia",
        judul: $(elem).find(".media-heading").text().trim() || "Judul tidak tersedia",
        tanggal: $(elem).find(".label").text().trim() || "Tanggal tidak tersedia",
        deskripsi: $(elem).find("p span").text().trim() || "Deskripsi tidak tersedia",
        sumber: "DIPUSIPDA Tasikmalaya"
      });
    });
    return beritaList;
  } catch (error) {
    console.error("Error scraping berita:", error);
    return { error: "Gagal mengambil berita" };
  }
});

export { berita as default };
//# sourceMappingURL=berita.mjs.map
