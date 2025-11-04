// Menunggu hingga seluruh konten HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // ===== 1. Fungsi Download CV =====
    
    // Ambil tombol berdasarkan ID
    const downloadButton = document.getElementById('download-btn');

    if (downloadButton) {
        downloadButton.addEventListener('click', (event) => {
            // Mencegah aksi default jika tombol ada di dalam form
            event.preventDefault(); 
            
            // Panggil fungsi untuk mengunduh
            downloadCV();
        });
    }

    /**
     * Membuat elemen <a> sementara untuk memicu download.
     * Ini adalah cara standar untuk mengunduh file secara programatik.
     */
    function downloadCV() {
        // Path ke file PDF Anda
        const fileUrl = 'assets/cv.pdf';
        
        // Nama file yang akan dilihat pengguna saat mengunduh
        const fileName = 'Lintar_Bumi_CV.pdf';

        // Buat elemen link (anchor) baru di memori
        const link = document.createElement('a');
        
        // Tetapkan 'href' link ke path file CV
        link.href = fileUrl;
        
        // Tetapkan atribut 'download' dengan nama file yang diinginkan
        link.download = fileName;
        
        // Tambahkan link ke body (diperlukan untuk beberapa browser)
        document.body.appendChild(link);
        
        // Klik link tersebut secara programatik untuk memulai unduhan
        link.click();
        
        // Hapus link dari body setelah unduhan dimulai
        document.body.removeChild(link);
    }

    // ===== 2. Animasi Fade-in saat Scroll =====
    
    // Pilih semua 'section' yang ingin dianimasikan
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.1 // 10% dari section harus terlihat
    };

    /**
     * Intersection Observer API lebih efisien daripada memantau event 'scroll'.
     * Fungsi callback ini akan dipanggil ketika elemen (entry) masuk/keluar viewport.
     */
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Jika elemen (section) masuk ke viewport
            if (entry.isIntersecting) {
                // Tambahkan kelas 'show' (didefinisikan di CSS)
                entry.target.classList.add('show');
                
                // Hentikan pengamatan pada elemen ini agar animasi tidak berulang
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Terapkan observer ke setiap section
    sections.forEach(section => {
        // Tambahkan kelas 'hidden' secara default
        section.classList.add('hidden');
        observer.observe(section);
    });

    // ===== 3. Update Tahun di Footer =====
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const hamburger = document.getElementById('hamburger-menu')
    const navMenu = document.querySelector('.nav-menu')

    if (hamburger && navMenu) {
        
        // Tambahkan event 'click' ke hamburger
        hamburger.addEventListener('click', () => {
            
            // Ini adalah perintah ajaibnya:
            // Tambah/Hapus kelas 'nav-active' dari menu
            navMenu.classList.toggle('nav-active');
            
    
        });
    }

});