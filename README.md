# Project Akhir PPV - Kalkulator IPK Mahasiswa

Aplikasi web sederhana untuk membantu mahasiswa menghitung dan merencanakan target Indeks Prestasi Kumulatif (IPK) secara instan dan akurat.

* **Masalah Utama:** Kesulitan menghitung IPK dan bobot SKS secara manual tanpa alat bantu yang ringkas.

## Cara Menjalankan

1. Buka folder proyek di VS Code.
2. Klik kanan `index.html`, pilih **Open with Live Server**.
3. Aplikasi memakai modul ES, jadi harus dibuka lewat server lokal. Membuka `index.html` langsung dari berkas tidak akan memuat modulnya.

## Fitur MVP dan Status

| Fitur | Status |
| :--- | :--- |
| Input mata kuliah (nama, SKS, nilai) | Selesai |
| Daftar mata kuliah dan tombol hapus | Selesai |
| Perhitungan IPK, total SKS, dan total bobot | Selesai |
| Progres SKS terhadap target | Selesai |
| Tiga tab tampilan: Input Matakuliah, Ringkasan IPK, Statistik Progres | Selesai |
| Penyimpanan otomatis ke `localStorage` (data tetap ada setelah dimuat ulang) | Selesai (Sprint 4) |

## Struktur Modul

Semua kode ada di `src/`. Arah ketergantungan satu arah: `main.js` memakai `state.js`, `storage.js`, dan `ui.js`; `ui.js` memakai `hitung.js` dan `komponen.js`.

* `hitung.js`: aturan nilai dan perhitungan IPK (tanpa tampilan).
* `state.js`: pemilik daftar mata kuliah (`semua`, `muatDari`, `tambah`, `hapus`).
* `storage.js`: satu-satunya modul yang menyentuh `localStorage` (`KUNCI`, `muat`, `simpan`).
* `komponen.js`: potongan tampilan reusable (`BarisMatkul`, `PesanKosong`).
* `ui.js`: menggambar halaman dan berpindah tab (`gambar`, `pasangTab`).
* `main.js`: titik masuk, menghubungkan semuanya lewat event.

## Kontrak Komponen

* `BarisMatkul(item, huruf)` mengembalikan `HTMLLIElement`. `item` berbentuk `{ id: angka, nama: teks, sks: angka, nilai: angka }`, `huruf` adalah label nilai (mis. "A") yang dihitung di luar komponen. Semua teks dari pengguna dimasukkan lewat `textContent`. Tombol Hapus membawa `data-id`.
* `PesanKosong(teks)` mengembalikan `HTMLLIElement` berkelas `kosong`.

## Kontrak Penyimpanan

* Kunci berversi: `kalkulator-ipk:v1`. Isinya array objek mata kuliah (bentuk sama dengan `item` di atas).
* `muat()` selalu mengembalikan array dan tidak pernah melempar galat. Data kosong, JSON rusak, bukan array, atau item yang tidak lengkap menghasilkan daftar kosong atau disaring.
* `simpan(daftar)` tidak melempar galat; bila `localStorage` diblokir atau penuh, data tetap dipegang di memori selama halaman terbuka dan peringatan ditulis ke Console.

## Pengujian Manual (Sprint 4)

* **P-01:** isi `kalkulator-ipk:v1` diganti `{rusak`, halaman dimuat ulang: aplikasi tetap terbuka dengan daftar kosong, peringatan muncul di Console, mata kuliah baru tetap bisa ditambah.
* **P-02:** isi diganti array berisi satu item rusak dan satu item sah: hanya item sah yang tampil.
* **P-03:** nama mata kuliah `<b>tebal</b>` tampil apa adanya sebagai teks.

## Dokumen

* [Project Charter](./docs/CHARTER.md)
* [Roadmap Sprint](./docs/ROADMAP.md)
* [Dependencies](./DEPENDENCIES.md)
* [Peta Modul](./MODULE_MAP.md)
* [Changelog](./CHANGELOG.md)

## Kredit Aset dan Pustaka

Daftar aset dan pustaka yang dipakai, beserta sumber dan lisensinya, ada di [DEPENDENCIES.md](./DEPENDENCIES.md).

## Penggunaan AI

Pada Sprint 4, kode `src/storage.js`, `src/komponen.js`, serta perubahan pada `src/ui.js`, `src/state.js`, dan `src/main.js` dibuat dengan bantuan asisten AI (Claude, Anthropic) lewat percakapan. Kode kemudian dijalankan dan diuji manual sendiri (skenario P-01 sampai P-03 di atas) dan dipahami sebelum di-commit.