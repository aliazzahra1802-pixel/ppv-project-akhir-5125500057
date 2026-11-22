// konsep.js: konsep produk Kalkulator IPK Mahasiswa (Project Akhir PPV, repositori ppv-project-akhir-5125500057).
const KONSEP = {
  nama: 'Kalkulator IPK Mahasiswa',
  tagline: 'Hitung IPK dari daftar mata kuliahmu tanpa kalkulator, langsung di HP atau laptop.',
  persona: {
    nama: 'Dinda, 19 tahun',
    siapa: 'Mahasiswa semester 3 program D3 yang kuliahnya campuran teori dan praktikum dengan bobot SKS berbeda-beda.',
    keseharian: 'Berangkat pagi, kuliah dan praktikum sampai sore, lalu mengerjakan tugas di rumah. Setiap nilai mata kuliah keluar, ia membuka ponsel untuk mengecek IPK-nya.',
    masalah: 'Menghitung IPK berarti mengalikan nilai dengan SKS satu per satu di kalkulator ponsel, dan ia sering ragu hasilnya benar. Ia juga bingung berapa nilai yang dibutuhkan agar IPK tidak turun.',
  },
  masalah: 'Mahasiswa menghitung IPK dengan mengalikan nilai dan SKS satu per satu di kalkulator ponsel atau catatan. Cara ini lambat dan mudah salah, apalagi saat mata kuliah banyak dengan bobot SKS berbeda. Akibatnya mahasiswa tidak yakin dengan IPK-nya sendiri.',
  solusi: 'Satu halaman web tempat mahasiswa memasukkan nama mata kuliah, SKS, dan nilai huruf, lalu total SKS, bobot, dan IPK terhitung otomatis. Daftar mata kuliah tersimpan di peramban sehingga tidak perlu diketik ulang. Tampilannya menyesuaikan layar HP maupun laptop.',
  fitur: [
    { nama: 'Input mata kuliah (nama, SKS, nilai huruf)', prioritas: 'wajib', alasan: 'Inti masalah persona: tanpa data nilai tidak ada yang bisa dihitung. Sudah jadi sejak v0.1.0.' },
    { nama: 'Hitung total SKS, bobot, dan IPK otomatis', prioritas: 'wajib', alasan: 'Menggantikan hitungan manual yang lambat dan mudah salah. Sudah jadi sejak v0.1.0.' },
    { nama: 'Tambah dan hapus mata kuliah', prioritas: 'wajib', alasan: 'Nilai berubah tiap semester, jadi daftar harus bisa dikoreksi. Sudah jadi sejak v0.1.0.' },
    { nama: 'Penyimpanan otomatis di peramban', prioritas: 'sebaiknya', alasan: 'Mengurangi mengetik ulang, tetapi hitungan tetap berjalan tanpa ini. Sudah jadi di v0.4.0 (commit 4be1907).' },
    { nama: 'Tampilan nyaman di layar HP 400 px', prioritas: 'sebaiknya', alasan: 'Persona memakai ponsel, tetapi inti hitungan tidak bergantung padanya. Sudah jadi dan diperbaiki setelah uji coba 18 Oktober 2026.' },
    { nama: 'Simulasi target nilai minimal', prioritas: 'sebaiknya', alasan: 'Menjawab kebingungan persona soal nilai yang dibutuhkan, tetapi butuh aturan hitung baru. Belum dibuat.' },
    { nama: 'IPS per semester dan filter semester', prioritas: 'belum', alasan: 'Data belum mengenal semester, jadi menambahkannya mengubah bentuk data dan tampilan. Ditunda sampai inti IPK stabil.' },
    { nama: 'Ekspor rekap ke PDF atau CSV', prioritas: 'belum', alasan: 'Berguna tetapi tidak menguji nilai utama hitung IPK. Belum dibuat.' },
    { nama: 'Login dan database server', prioritas: 'belum', alasan: 'Tidak dibutuhkan untuk menghitung IPK pribadi dan menambah biaya server. Sengaja tidak dibuat.' },
  ],
  pembanding: [
    { nama: 'Kalkulator IPK (howmanywords.app)', kelebihan: 'Menghitung IPK semester dan kumulatif, dan punya Perencana Target untuk mencari IPK yang dibutuhkan.', kekurangan: 'Berbasis konvensi skala 4,0 yang umum di AS, belum tentu sama dengan skala huruf kampus.' },
    { nama: 'Kalkulator Nilai Rata-rata IPK (MiniWebtool)', kelebihan: 'Mendukung banyak sistem penilaian, menampilkan klasifikasi, bagan distribusi nilai, dan perhitungan langkah demi langkah.', kekurangan: 'Sistem yang disebut hanya AS, Kanada, Australia, India, dan Inggris, dan berada di situs yang memuat banyak alat lain.' },
    { nama: 'Lembar kerja Excel atau Google Sheets buatan sendiri', kelebihan: 'Fleksibel dan bisa disesuaikan dengan skala nilai kampus.', kekurangan: 'Rumus harus dibuat dan dirawat sendiri, dan salah rumus berarti hasil salah.' },
  ],
  pembeda: 'Memakai skala nilai huruf yang tampil seperti di kampus (misalnya AB dan B+), tanpa akun, dengan daftar mata kuliah yang tersimpan otomatis di peramban.',
};