// storage.js: satu-satunya modul yang menyentuh localStorage.
// Tangguh: tidak pernah melempar galat, apa pun isi atau kondisi penyimpanan.
export const KUNCI = 'kalkulator-ipk:v1';

let cadangan = [];   // salinan di memori, dipakai bila localStorage tidak bisa dipakai

// Item sah = objek dengan id, nama (teks), sks, dan nilai (angka).
function sah(item) {
  return Boolean(item) && typeof item === 'object'
    && Number.isFinite(item.id)
    && typeof item.nama === 'string'
    && Number.isFinite(item.sks)
    && Number.isFinite(item.nilai);
}

function saring(data) {
  return Array.isArray(data) ? data.filter(sah) : [];
}

export function muat() {
  try {
    const mentah = localStorage.getItem(KUNCI);
    cadangan = mentah === null ? [] : saring(JSON.parse(mentah));
    return cadangan;
  } catch (err) {
    console.warn('Data tersimpan tidak bisa dibaca, memakai daftar kosong:', err);
    return cadangan;
  }
}

export function simpan(daftar) {
  cadangan = daftar;
  try {
    localStorage.setItem(KUNCI, JSON.stringify(daftar));
  } catch (err) {
    console.warn('Gagal menyimpan ke localStorage:', err);
  }
}