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

const galeri = defineEventHandler(async (event) => {
  try {
    const { data } = await axios.get("https://dipusipda.tasikmalayakota.go.id/site/galeri");
    const $ = cheerio.load(data);
    const galeriList = [];
    $(".gallery-item").each((i, elem) => {
      if (i >= 20) return false;
      let imgSrc = $(elem).attr("href") || "";
      let title = $(elem).attr("title") || "Judul tidak tersedia";
      galeriList.push({
        img: imgSrc,
        title
      });
    });
    return galeriList;
  } catch (error) {
    console.error("Error scraping galeri:", error);
    return { error: "Gagal mengambil data galeri" };
  }
});

export { galeri as default };
//# sourceMappingURL=galeri.mjs.map
