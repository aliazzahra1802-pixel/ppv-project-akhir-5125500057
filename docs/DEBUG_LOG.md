# Debug Log - Proyek Akhir Sprint 2

## Bug 01: Validasi Input Kosong pada Formulir Matakuliah
- **Gejala (Symptoms):** Form input dapat dikirimkan sebelum memastikan seluruh data terisi dengan valid.
- **Hipotesis (Hypothesis):** Kurangnya pemeriksaan kondisi logika bersyarat pada fungsi penambahan data di JavaScript.
- **Bukti (Evidence):** Ditemukan saat pengujian fungsional aplikasi web kalkulator IPK.
- **Solusi (Solution):** Menambahkan blok validasi pengecekan data kosong pada fungsi penambahan matakuliah di `main.js`.

## Bug 02: Manajemen State Penyimpanan Data Sesi
- **Gejala (Symptoms):** Data sementara pada tabel kalkulator perlu dipastikan aman saat siklus DOM dimuat ulang.
- **Hipotesis (Hypothesis):** Perlu penyesuaian penanganan pembaruan state pada elemen tabel.
- **Bukti (Evidence):** Evaluasi alur kerja penyimpanan lokal dan interaksi tombol hapus.
- **Solusi (Solution):** Memastikan fungsi pembaruan indeks nilai dan *event listener* tombol hapus berjalan sinkron.
