// ui.js: menggambar halaman dan berpindah tab. Tidak menyimpan data.
import { getGradeLabel, hitungRingkasan, TARGET_SKS } from './hitung.js';
import { BarisMatkul, PesanKosong } from './komponen.js';

const daftarMatkulEl = document.getElementById('daftar-matkul');

const totalSksEl = document.getElementById('total-sks');
const totalBobotEl = document.getElementById('total-bobot');
const nilaiIpkEl = document.getElementById('nilai-ipk');
const progressBarEl = document.getElementById('progress-bar');
const progressTextEl = document.getElementById('progress-text');

const totalSksDetail = document.getElementById('total-sks-detail');
const totalBobotDetail = document.getElementById('total-bobot-detail');
const nilaiIpkDetail = document.getElementById('nilai-ipk-detail');
const progressBarDetail = document.getElementById('progress-bar-detail');
const progressTextDetail = document.getElementById('progress-text-detail');

export function pasangTab() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const viewSections = document.querySelectorAll('.view-section');
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      tabButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      viewSections.forEach((section) => {
        section.hidden = section.id !== targetId;
      });
    });
  });
}

export function gambar(daftar) {
  daftarMatkulEl.replaceChildren(...(daftar.length
    ? daftar.map((item) => BarisMatkul(item, getGradeLabel(item.nilai)))
    : [PesanKosong('Belum ada mata kuliah.')]));

  const { totalSks, totalBobot, ipk, persenSks } = hitungRingkasan(daftar);

  totalSksEl.textContent = totalSks;
  totalSksDetail.textContent = totalSks;
  totalBobotEl.textContent = totalBobot.toFixed(2);
  totalBobotDetail.textContent = totalBobot.toFixed(2);
  nilaiIpkEl.textContent = ipk;
  nilaiIpkDetail.textContent = ipk;

  progressBarEl.style.width = persenSks + '%';
  progressTextEl.textContent = totalSks + ' / ' + TARGET_SKS + ' SKS (' + persenSks + '%)';
  progressBarDetail.style.width = persenSks + '%';
  progressTextDetail.textContent = 'Progres SKS: ' + persenSks + '% (' + totalSks + ' / ' + TARGET_SKS + ' SKS)';
}