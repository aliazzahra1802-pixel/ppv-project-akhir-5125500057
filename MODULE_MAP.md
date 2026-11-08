# MODULE_MAP: Kalkulator IPK

## Peta modul (satu arah, tanpa lingkaran)

```
index.html
  └─ src/main.js
       ├─ src/state.js
       └─ src/ui.js
            └─ src/hitung.js
```

## Tanggung jawab tiap modul

| Modul | Tanggung jawab |
|---|---|
| src/main.js | Titik masuk yang memasang event form dan tombol Hapus lalu menghubungkan state dengan ui. |
| src/state.js | Satu-satunya pemilik daftar mata kuliah (baca, tambah, hapus). |
| src/hitung.js | Aturan nilai huruf serta perhitungan total SKS, total bobot, IPK, dan persen progres, tanpa menyentuh halaman. |
| src/ui.js | Menggambar daftar dan ringkasan ke halaman serta mengatur perpindahan tab. |

## Belum dimodulkan (direncanakan di P12 sesuai ROADMAP)

- Penyimpanan: belum ada modul penyimpanan karena aplikasi belum memakai localStorage; perilaku asli dipertahankan.
- Nama mata kuliah masih dimasukkan lewat innerHTML tanpa sanitasi; dibiarkan supaya perilaku tidak berubah dan dicatat untuk perbaikan berikutnya.
- Pemasangan event form dan tombol Hapus tetap di main.js karena tipis dan hanya menyambungkan modul.
- Tampilan awal tidak digambar saat halaman dibuka, sama seperti sebelum refactor.