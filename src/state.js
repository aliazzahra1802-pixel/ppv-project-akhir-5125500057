// state.js: pemilik daftar mata kuliah. Tanpa tampilan.
const state = { matkul: [] };

export function semua() {
  return state.matkul;
}

export function tambah(nama, sks, nilai) {
  state.matkul.push({ id: Date.now(), nama, sks, nilai });
}

export function hapus(id) {
  state.matkul = state.matkul.filter((item) => item.id !== id);
}