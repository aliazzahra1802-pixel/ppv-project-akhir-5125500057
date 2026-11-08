   // main.js: titik masuk. Menghubungkan state dan ui lewat event.
   import { semua, tambah, hapus } from './state.js';
   import { gambar, pasangTab } from './ui.js';

   const formMatkul = document.getElementById('form-matkul');
   const inputNama = document.getElementById('nama-matkul');
   const inputSks = document.getElementById('sks-matkul');
   const selectNilai = document.getElementById('nilai-matkul');
   const daftarMatkulEl = document.getElementById('daftar-matkul');

   pasangTab();

   formMatkul.addEventListener('submit', (e) => {
     e.preventDefault();

     const nama = inputNama.value.trim();
     const sks = parseFloat(inputSks.value);
     const nilai = parseFloat(selectNilai.value);

     if (!nama || isNaN(sks) || isNaN(nilai)) return;

     tambah(nama, sks, nilai);
     formMatkul.reset();
     gambar(semua());
   });

   daftarMatkulEl.addEventListener('click', (e) => {
     if (e.target.tagName === 'BUTTON') {
       const id = Number(e.target.getAttribute('data-id'));
       hapus(id);
       gambar(semua());
     }
   });