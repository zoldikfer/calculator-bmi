// Ambil elemen-elemen yang diperlukan
const beratBadanInput = document.getElementById('berat-badan-input');
const usiaInput = document.getElementById('usia-input');
const tinggiBadanInput = document.getElementById('tinggi-badan-input');
const resultCalculation = document.getElementById('result-calculation');
const infoResult = document.getElementById('info-result');

// Ambil tombol form
const hitungButton = document.querySelector('button.bg-cadet-blue');
const resetButton = document.querySelector('button.bg-alice-blue');

// Fungsi untuk menghitung BMI
function hitungBMI() {
    const beratBadan = parseFloat(beratBadanInput.value);
    const usia = parseInt(usiaInput.value);
    const tinggiBadan = parseFloat(tinggiBadanInput.value);

    if (isNaN(beratBadan) || isNaN(usia) || isNaN(tinggiBadan) || beratBadan <= 0 || tinggiBadan <= 0 || usia <= 0) {
        alert("Pastikan semua input valid (angka positif).");
        return;
    }

    // Menghitung BMI
    const tinggiBadanMeter = tinggiBadan / 100; // konversi cm ke meter
    const bmi = beratBadan / (tinggiBadanMeter * tinggiBadanMeter);

    // Menampilkan hasil BMI
    resultCalculation.textContent = bmi.toFixed(2); // Menampilkan dua desimal

    // Menentukan kategori BMI dan warna hasil
    let kategori = '';
    let warnaHasil = ''; // Variabel untuk menyimpan warna hasil
    let warnaKategori = ''; // Variabel untuk menyimpan warna teks kategori

    if (bmi < 18.5) {
        kategori = "Kekurangan Berat Badan";
        warnaHasil = "yellow"; // Kuning untuk kekurangan berat badan
        warnaKategori = "yellow"; // Kuning untuk kategori
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        kategori = "Berat Badan Normal";
        warnaHasil = "blue"; // Biru untuk berat badan normal
        warnaKategori = "blue"; // Biru untuk kategori
    } else if (bmi >= 25 && bmi <= 29.9) {
        kategori = "Kelebihan Berat Badan";
        warnaHasil = "orange"; // Oranye untuk kelebihan berat badan
        warnaKategori = "orange"; // Oranye untuk kategori
    } else {
        kategori = "Obesitas";
        warnaHasil = "red"; // Merah untuk obesitas
        warnaKategori = "red"; // Merah untuk kategori
    }

    // Menampilkan kategori dan mengubah warna teks kategori
    infoResult.textContent = `ANDA MEMILIKI BERAT BADAN: ${kategori}`;
infoResult.style.color = warnaKategori; // Ubah warna teks kategori 

    // Mengubah warna hasil BMI
    resultCalculation.style.color = warnaHasil; 
}

// Fungsi untuk mereset form
function resetForm() {
    beratBadanInput.value = '';
    usiaInput.value = '';
    tinggiBadanInput.value = '';
    resultCalculation.textContent = '0';
    resultCalculation.style.color = ''; // Reset warna hasil
    infoResult.textContent = 'ANDA MEMILIKI BERAT BADAN';
    infoResult.style.color = ''; // Reset warna teks kategori 
}

// Menambahkan event listener untuk tombol Hitung dan Reset
hitungButton.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah form submit
    hitungBMI();
});

resetButton.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah form submit
    resetForm();
});
