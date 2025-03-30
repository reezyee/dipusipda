import axios from "axios";
import * as cheerio from "cheerio";

export default defineEventHandler(async (event) => {
  try {
    const { data } = await axios.get("https://dipusipda.tasikmalayakota.go.id/site/galeri");
    const $ = cheerio.load(data);
    const galeriList = [];

    $(".gallery-item").each((i, elem) => {
      if (i >= 20) return false; // Ambil maksimal 10 item

      let imgSrc = $(elem).attr("href") || "";
      let title = $(elem).attr("title") || "Judul tidak tersedia";

      galeriList.push({
        img: imgSrc,
        title: title,
      });
    });

    return galeriList;
  } catch (error) {
    console.error("Error scraping galeri:", error);
    return { error: "Gagal mengambil data galeri" };
  }
});
