// Data cerita dalam array
const storyText = [
    "Selamat datang di petualanganmu! Kamu bangun di sebuah hutan dan harus memilih apa yang akan dilakukan selanjutnya.",
    "Kamu berjalan sedikit dan menemukan sebuah jalan terbelah. Di sebelah kiri ada gua, dan di sebelah kanan ada pohon besar.",
    "Kamu memilih untuk masuk ke gua. Suara aneh terdengar semakin dekat. Kamu merasa gugup, tapi melangkah lebih jauh.",
    "Akhirnya kamu tiba di ujung gua dan menemukan sebuah peti harta karun."
];

let currentIndex = 0;
let isAnimating = false;
let isSkipped = false;
let intervalId; // Menyimpan ID untuk interval

// Fungsi untuk mulai tampilkan teks dengan animasi
function displayTextWithAnimation() {
    const text = storyText[currentIndex];
    const storyElement = document.getElementById("story-text");

    storyElement.textContent = ''; // Reset text
    storyElement.classList.remove('loaded'); // Remove class 'loaded' sebelum animasi dimulai
    isAnimating = true;
    isSkipped = false;

    let i = 0;
    intervalId = setInterval(() => {
        let currentChar = text.charAt(i);
        if (currentChar === " " && i > 0 && text.charAt(i - 1) !== " ") {
            // Menambahkan spasi jika karakter sebelumnya bukan spasi
            storyElement.textContent += " ";
        } else if (currentChar !== " ") {
            // Menambahkan karakter selain spasi
            storyElement.textContent += currentChar;
        }

        storyElement.style.opacity = 1; // Pastikan teks terlihat
        storyElement.style.transform = 'translateX(0)'; // Animasi dari kiri
        i++;
        if (i >= text.length) {
            clearInterval(intervalId); // Hentikan animasi setelah teks selesai
            storyElement.classList.add('loaded'); // Tambahkan class 'loaded' saat animasi selesai
            isAnimating = false;
        }
    }, 50); // Mengatur kecepatan animasi teks
}

// Fungsi untuk menangani klik dan skip animasi
function nextText() {
    const storyElement = document.getElementById("story-text");

    if (isAnimating && !isSkipped) {
        // Skip animasi dan tampilkan teks lengkap
        clearInterval(intervalId); // Stop interval animasi yang masih berjalan
        storyElement.textContent = storyText[currentIndex];
        storyElement.style.opacity = 1; // Pastikan teks terlihat langsung
        storyElement.style.transform = 'translateX(0)'; // Pastikan teks muncul penuh
        storyElement.classList.add('loaded'); // Tambahkan class 'loaded' saat teks selesai muncul
        isAnimating = false;
        isSkipped = true;
    } else if (isSkipped || !isAnimating) {
        // Lanjutkan ke teks berikutnya
        currentIndex++;
        if (currentIndex < storyText.length) {
            displayTextWithAnimation(); // Tampilkan teks berikutnya dengan animasi
        } else {
            storyElement.textContent = "Tamat! Terima kasih telah mengikuti petualangan ini.";
        }
    }
}

// Mulai dengan teks pertama
displayTextWithAnimation();