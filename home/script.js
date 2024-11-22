// Referensi elemen toggle switch
const darkModeSwitch = document.getElementById('darkModeSwitch');

// Fungsi untuk mengaktifkan atau menonaktifkan dark mode
function setDarkMode(isDarkMode) {
    document.body.classList.toggle('dark-mode', isDarkMode);
    darkModeSwitch.checked = isDarkMode; // Sinkronisasi status tombol
}

// Event listener untuk perubahan status toggle
darkModeSwitch.addEventListener('change', () => {
    const isDarkMode = darkModeSwitch.checked;
    setDarkMode(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode); // Simpan status ke localStorage
});

// Terapkan status dark mode dari localStorage saat halaman dimuat
const savedDarkMode = localStorage.getItem('darkMode') === 'true';
setDarkMode(savedDarkMode);