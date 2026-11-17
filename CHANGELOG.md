# Changelog

Semua perubahan penting pada Aplikasi Manajemen & Kalkulator IPK dicatat di sini.
Format mengikuti [Keep a Changelog](https://keepachangelog.com/id-ID/1.1.0/).

## [0.4.0] - 2026-11-17

### Added
- `src/komponen.js` berisi komponen `BarisMatkul(item, huruf)` dan `PesanKosong(teks)`.
- `src/storage.js`: penyimpanan daftar mata kuliah ke `localStorage` dengan kunci berversi `kalkulator-ipk:v1`; `muat()` dan `simpan()` tidak pernah melempar galat.
- Pesan "Belum ada mata kuliah." saat daftar kosong.

### Changed
- `ui.js` membuat baris mata kuliah lewat `BarisMatkul`, tidak lagi merangkai string HTML.
- `state.js` mendapat `muatDari(daftar)`; `main.js` memuat data saat dibuka dan menyimpan setiap kali mata kuliah ditambah atau dihapus.

### Fixed
- Daftar mata kuliah tidak lagi hilang saat halaman dimuat ulang.
- Data tersimpan yang rusak (JSON rusak atau item tidak lengkap) disaring, aplikasi tetap terbuka.

### Security
- Nama mata kuliah ditampilkan lewat `textContent`, sehingga teks seperti `<b>tebal</b>` tampil apa adanya, bukan dijalankan sebagai HTML.

## [0.3.0] - 2026-11-08

### Changed
- Kode dipecah menjadi modul ES: `hitung.js` (aturan nilai dan hitungan IPK), `state.js` (daftar mata kuliah), `ui.js` (penggambaran dan tab), dan `main.js` sebagai titik masuk tanpa variabel global.

### Added
- `MODULE_MAP.md` yang memetakan modul proyek.
- Favicon kosong agar Console bersih.

### Documentation
- Sprint 3 ditandai di ROADMAP dan catatan bantuan AI ditambahkan di README.

## [0.2.0] - 2026-11-01

### Added
- `DEBUG_LOG.md` dan `manifest.json` untuk Sprint 2.

## [0.1.0] - 2026-10-25

### Added
- Kode awal kalkulator IPK dan dokumen pendukung (berasal dari kode asli Tugas 4, 2026-10-24).