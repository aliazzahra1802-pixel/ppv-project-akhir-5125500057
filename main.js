const state = {
  matkul: []
};

function getGradeLabel(bobot) {
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

const tabButtons = document.querySelectorAll('.tab-btn');
const viewSections = document.querySelectorAll('.view-section');
const formMatkul = document.getElementById('form-matkul');
const inputNama = document.getElementById('nama-matkul');
const inputSks = document.getElementById('sks-matkul');
const selectNilai = document.getElementById('nilai-matkul');
const daftarMatkulEl = document.getElementById('daftar-matkul');

// Sidebar Elements
const totalSksEl = document.getElementById('total-sks');
const totalBobotEl = document.getElementById('total-bobot');
const nilaiIpkEl = document.getElementById('nilai-ipk');
const progressBarEl = document.getElementById('progress-bar');
const progressTextEl = document.getElementById('progress-text');

// Detail Elements
const totalSksDetail = document.getElementById('total-sks-detail');
const totalBobotDetail = document.getElementById('total-bobot-detail');
const nilaiIpkDetail = document.getElementById('nilai-ipk-detail');
const progressBarDetail = document.getElementById('progress-bar-detail');
const progressTextDetail = document.getElementById('progress-text-detail');

// Navigasi Tab
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

// Submit Form
formMatkul.addEventListener('submit', (e) => {
  e.preventDefault();

  const nama = inputNama.value.trim();
  const sks = parseFloat(inputSks.value);
  const nilai = parseFloat(selectNilai.value);

  if (!nama || isNaN(sks) || isNaN(nilai)) return;

  state.matkul.push({
    id: Date.now(),
    nama,
    sks,
    nilai
  });

  formMatkul.reset();
  updateTampilan();
});

// Hapus Item
daftarMatkulEl.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = Number(e.target.getAttribute('data-id'));
    state.matkul = state.matkul.filter((item) => item.id !== id);
    updateTampilan();
  }
});

function updateTampilan() {
  daftarMatkulEl.innerHTML = '';
  state.matkul.forEach((item) => {
    const gradeLetter = getGradeLabel(item.nilai);
    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>${item.nama}</strong> (${item.sks} SKS) - Nilai: <strong>${gradeLetter}</strong> (${item.nilai})</span>
      <button data-id="${item.id}">Hapus</button>
    `;
    daftarMatkulEl.appendChild(li);
  });

  let totalSks = 0;
  let totalBobot = 0;

  state.matkul.forEach((item) => {
    totalSks += item.sks;
    totalBobot += item.sks * item.nilai;
  });

  const ipk = totalSks > 0 ? (totalBobot / totalSks).toFixed(2) : '0.00';

  // Update Tampilan Kanan & Detail
  totalSksEl.textContent = totalSks;
  if(totalSksDetail) totalSksDetail.textContent = totalSks;

  totalBobotEl.textContent = totalBobot.toFixed(2);
  if(totalBobotDetail) totalBobotDetail.textContent = totalBobot.toFixed(2);

  nilaiIpkEl.textContent = ipk;
  if(nilaiIpkDetail) nilaiIpkDetail.textContent = ipk;

  const targetSks = 144;
  const persenSks = Math.min(Math.round((totalSks / targetSks) * 100), 100);
  
  progressBarEl.style.width = `${persenSks}%`;
  progressTextEl.textContent = `${totalSks} / ${targetSks} SKS (${persenSks}%)`;

  if(progressBarDetail) progressBarDetail.style.width = `${persenSks}%`;
  if(progressTextDetail) progressTextDetail.textContent = `Progres SKS: ${persenSks}% (${totalSks} / ${targetSks} SKS)`;
}