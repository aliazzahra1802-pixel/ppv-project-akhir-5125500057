# Project Charter: Kalkulator IPK Mahasiswa

## 1. Masalah yang Diselesaikan
Mahasiswa sering kesulitan memprediksi dan menghitung Indeks Prestasi Kumulatif (IPK) secara cepat karena perhitungan manual yang rumit serta potensi kesalahan perhitungan nilai bobot SKS.

## 2. Pengguna Sasaran & Persona
* **Siapa:** Mahasiswa aktif perguruan tinggi.
* **Kesehariannya:** Mengambil berbagai mata kuliah dengan bobot SKS berbeda setiap semester.
* **Masalahnya:** Bingung menghitung target nilai minimal yang harus dicapai untuk mempertahankan atau menaikkan IPK.

## 3. Fitur MVP (Prioritas MoSCoW)
* **Must Have:**
  1. Input nama mata kuliah, jumlah SKS, dan nilai huruf (A, B+, B, dll.).
  2. Perhitungan otomatis IPS (Semester) dan IPK Kumulatif secara *real-time*.
  3. Fitur tambah dan hapus baris mata kuliah.
* **Should Have:**
  1. Fitur pencarian atau filter berdasarkan semester.
* **Could Have:**
  1. Ekspor rekapitulasi nilai IPK ke format PDF/CSV.
* **Won't Have:**
  1. Sistem login pengguna dan penyimpanan database berbasis server.

## 4. Kriteria Sukses Terukur
* Pengguna dapat menginput 5 mata kuliah dan melihat hasil perhitungan IPK dalam waktu **≤ 2 menit**.
* Tampilan aplikasi dapat diakses dengan nyaman di layar HP (lebar 400 px) maupun laptop.

## 5. Risiko dan Antisipasi
1. **Risiko 1:** Data daftar nilai hilang saat halaman di-refresh.
   * **Antisipasi:** Menggunakan `localStorage` browser untuk menyimpan data nilai secara otomatis.
2. **Risiko 2:** Input SKS atau nilai diisi dengan format yang salah oleh pengguna.
   * **Antisipasi:** Menambahkan validasi form pada input SKS dan dropdown pilihan nilai huruf.
3. **Risiko 3:** Tampilan tabel berantakan di layar smartphone.
   * **Antisipasi:** Memanfaatkan komponen pustaka Bootstrap UI yang responsif.