// hitung.js: aturan nilai dan perhitungan IPK. Tanpa tampilan.
export const TARGET_SKS = 144;

export function getGradeLabel(bobot) {
  switch (parseFloat(bobot)) {
    case 4: return 'A';
    case 3.75: return 'A-';
    case 3.5: return 'AB';
    case 3.25: return 'B+';
    case 3: return 'B';
    case 2.5: return 'BC';
    case 2: return 'C';
    case 1: return 'D';
    case 0: return 'E';
    default: return '-';
  }
}

export function hitungRingkasan(daftar) {
  let totalSks = 0;
  let totalBobot = 0;
  daftar.forEach((item) => {
    totalSks += item.sks;
    totalBobot += item.sks * item.nilai;
  });
  const ipk = totalSks > 0 ? (totalBobot / totalSks).toFixed(2) : '0.00';
  const persenSks = Math.min(Math.round((totalSks / TARGET_SKS) * 100), 100);
  return { totalSks, totalBobot, ipk, persenSks };
}