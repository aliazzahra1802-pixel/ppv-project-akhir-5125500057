// komponen.js: potongan tampilan yang bisa dipakai ulang. Tidak tahu soal penyimpanan.
// Semua teks dari pengguna dimasukkan lewat textContent, jadi tag HTML tidak akan dieksekusi.
function buat(tag, teks, kelas) {
  const el = document.createElement(tag);
  if (teks !== undefined) el.textContent = teks;
  if (kelas) el.className = kelas;
  return el;
}

// Kontrak: BarisMatkul({ id, nama, sks, nilai }, huruf) -> HTMLLIElement
// huruf = label nilai (mis. "A"), dihitung di luar komponen.
export function BarisMatkul(item, huruf) {
  const li = buat('li');
  const info = buat('span');
  info.append(
    buat('strong', item.nama),
    ' (' + item.sks + ' SKS) - Nilai: ',
    buat('strong', huruf),
    ' (' + item.nilai + ')',
  );
  const hapus = buat('button', 'Hapus');
  hapus.dataset.id = String(item.id);
  li.append(info, hapus);
  return li;
}

// Kontrak: PesanKosong(teks) -> HTMLLIElement
export function PesanKosong(teks) {
  return buat('li', teks, 'kosong');
}