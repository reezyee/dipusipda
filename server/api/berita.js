import axios from "axios";
import * as cheerio from "cheerio";

export default defineEventHandler(async (event) => {
  try {
    const { data } = await axios.get(
      "https://dipusipda.tasikmalayakota.go.id/site/berita"
    );
    const $ = cheerio.load(data);
    const beritaList = [];

    $(".media").each((i, elem) => {
      // Ambil URL gambar dari dalam class "media-left"
      let imgSrc = $(elem).find(".media-left img").attr("src") || "";

      // Jika URL gambar relatif, ubah ke absolut
      if (imgSrc && !imgSrc.startsWith("http")) {
        imgSrc = `https://dipusipda.tasikmalayakota.go.id/${imgSrc.replace(
          /^\/+/,
          ""
        )}`;
      }

      beritaList.push({
        img: imgSrc || "Gambar tidak tersedia",
        judul:
          $(elem).find(".media-heading").text().trim() ||
          "Judul tidak tersedia",
        tanggal:
          $(elem).find(".label").text().trim() || "Tanggal tidak tersedia",
        deskripsi:
          $(elem).find("p span").text().trim() || "Deskripsi tidak tersedia",
        sumber: "DIPUSIPDA Tasikmalaya",
      });
    });

    return beritaList;
  } catch (error) {
    console.error("Error scraping berita:", error);
    return { error: "Gagal mengambil berita" };
  }
});
