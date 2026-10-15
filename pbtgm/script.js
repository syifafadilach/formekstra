const form = document.getElementById("registerForm");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const password = document.getElementById("password");
const konfirmasi = document.getElementById("konfirmasi");
const ekstra = document.getElementById("ekstra");


// =========================
// VALIDASI NAMA
// =========================

function validasiNama() {

    const namaValue = nama.value.trim();

    // Tidak boleh kosong
    if (namaValue === "") {
        nama.classList.add("invalid");
        nama.classList.remove("valid");

        document.getElementById("namaError").textContent =
            "Nama tidak boleh kosong.";

        return false;
    }

    // Hanya boleh huruf dan spasi
    const polaNama = /^[A-Za-zÀ-ÿ\s]+$/;

    if (!polaNama.test(namaValue)) {
        nama.classList.add("invalid");
        nama.classList.remove("valid");

        document.getElementById("namaError").textContent =
            "Nama hanya boleh menggunakan huruf.";

        return false;
    }

    // Harus minimal 2 kata
    const jumlahKata = namaValue.split(/\s+/).length;

    if (jumlahKata < 2) {
        nama.classList.add("invalid");
        nama.classList.remove("valid");

        document.getElementById("namaError").textContent =
            "Masukkan nama lengkap, minimal 2 kata.";

        return false;
    }

    // Nama valid
    nama.classList.add("valid");
    nama.classList.remove("invalid");

    document.getElementById("namaError").textContent = "";

    return true;
}

// =========================
// VALIDASI EMAIL
// =========================

function validasiEmail() {

    const emailValue = email.value.trim();

    if (emailValue === "") {

        email.classList.add("invalid");
        email.classList.remove("valid");

        document.getElementById("emailError").textContent =
            "Email tidak boleh kosong.";

        return false;
    }

    const polaEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!polaEmail.test(emailValue)) {

        email.classList.add("invalid");
        email.classList.remove("valid");

        document.getElementById("emailError").textContent =
            "Format email tidak valid.";

        return false;
    }

    email.classList.add("valid");
    email.classList.remove("invalid");

    document.getElementById("emailError").textContent = "";

    return true;
}

// =========================
// VALIDASI PASSWORD
// =========================

function validasiPassword() {

    if (password.value.length < 8) {

        password.classList.add("invalid");
        password.classList.remove("valid");

        document.getElementById("passwordError").textContent =
            "Password minimal 8 karakter.";

        return false;
    }

    password.classList.add("valid");
    password.classList.remove("invalid");

    document.getElementById("passwordError").textContent = "";

    return true;
}


// =========================
// VALIDASI KONFIRMASI
// =========================

function validasiKonfirmasi() {

    if (konfirmasi.value === "") {

        konfirmasi.classList.add("invalid");
        konfirmasi.classList.remove("valid");

        document.getElementById("konfirmasiError").textContent =
            "Konfirmasi password harus diisi.";

        return false;
    }

    if (konfirmasi.value !== password.value) {

        konfirmasi.classList.add("invalid");
        konfirmasi.classList.remove("valid");

        document.getElementById("konfirmasiError").textContent =
            "Password tidak sama.";

        return false;
    }

    konfirmasi.classList.add("valid");
    konfirmasi.classList.remove("invalid");

    document.getElementById("konfirmasiError").textContent = "";

    return true;
}


// =========================
// VALIDASI EKSTRAKURIKULER
// =========================

function validasiEkstra() {

    if (ekstra.value === "") {

        ekstra.classList.add("invalid");
        ekstra.classList.remove("valid");

        document.getElementById("ekstraError").textContent =
            "Silakan pilih ekstrakurikuler.";

        return false;
    }

    ekstra.classList.add("valid");
    ekstra.classList.remove("invalid");

    document.getElementById("ekstraError").textContent = "";

    return true;
}


// =========================
// REAL-TIME VALIDATION
// =========================

nama.addEventListener("input", validasiNama);
email.addEventListener("input", validasiEmail);
password.addEventListener("input", validasiPassword);
konfirmasi.addEventListener("input", validasiKonfirmasi);
ekstra.addEventListener("change", validasiEkstra);


// =========================
// SUBMIT FORM
// =========================

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const namaValid = validasiNama();
    const emailValid = validasiEmail();
    const passwordValid = validasiPassword();
    const konfirmasiValid = validasiKonfirmasi();
    const ekstraValid = validasiEkstra();

    const successMessage =
        document.getElementById("successMessage");

    if (
        namaValid &&
        emailValid &&
        passwordValid &&
        konfirmasiValid &&
        ekstraValid
    ) {

        successMessage.textContent =
            "✓ Pendaftaran Berhasil!";

        alert("Pendaftaran Berhasil!");

        form.reset();

        nama.classList.remove("valid");
        email.classList.remove("valid");
        password.classList.remove("valid");
        konfirmasi.classList.remove("valid");
        ekstra.classList.remove("valid");

    } else {

        successMessage.textContent = "";
    }

});

function togglePassword(id, icon) {
    const password = document.getElementById(id);

    if (password.type === "password") {
        password.type = "text";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
    } else {
        password.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
    }
}


// =========================
// MODAL
// =========================

function bukaForm() {
    document.getElementById("modalForm").style.display = "flex";
}

function tutupForm() {
    document.getElementById("modalForm").style.display = "none";
}


// Klik di luar form untuk menutup

window.addEventListener("click", function(event) {

    const modal = document.getElementById("modalForm");

    if (event.target === modal) {
        tutupForm();
    }

});


// =========================
// TOMBOL PILIH EKSTRA
// =========================

function pilihEkstra(namaEkstra) {

    bukaForm();

    document.getElementById("ekstra").value = namaEkstra;

    validasiEkstra();
}
// =========================
// CHAT BUBBLE KIRIM PESAN
// =========================

const chatForm = document.getElementById("chatForm");
const chatMessages = document.getElementById("chatMessages");

const faqEkskul = [
    {
        kataKunci: ["apa aja", "apa saja", "daftar ekskul", "jenis ekskul"],
        jawaban: "Ekstrakurikuler yang tersedia: Pramuka, PMR, Paskibra, Bahasa Jepang, Pencak Silat, Fosster, Voli, Futsal, Jurnalis, MTQ, Rebana, Rohis, Paduan Suara, Drumband, dan Tari."
    },
    {
        kataKunci: ["cara daftar", "pendaftaran", "mau ikut"],
        jawaban: "Klik tombol \"Pilih\" di kartu ekstrakurikuler yang kamu mau, lalu isi formulir pendaftaran yang muncul."
    },
    {
        kataKunci: ["pramuka"],
        jawaban: "Pramuka terbuka untuk semua siswa, cek jadwal lengkap di menu Ekstrakurikuler."
    },
    {
        kataKunci: ["jadwal", "kapan"],
        jawaban: "Jadwal tiap ekskul berbeda, silakan tanyakan ke pembina atau cek pengumuman sekolah."
    }
];

const jawabanDefault = "Maaf, pertanyaan itu belum bisa kami jawab otomatis. Coba tanya seputar ekstrakurikuler, jadwal, atau cara daftar ya.";

function cariJawabanEkskul(teks) {
    const t = teks.toLowerCase();
    for (const item of faqEkskul) {
        if (item.kataKunci.some(kk => t.includes(kk))) {
            return item.jawaban;
        }
    }
    return jawabanDefault;
}

if (chatForm) {
    chatForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = document.getElementById("chatNama").value.trim() || "Kamu";
        const pesanInput = document.getElementById("chatPesan");
        const pesan = pesanInput.value.trim();

        if (pesan === "") return;

        const chatEmpty = document.getElementById("chatEmpty");
        if (chatEmpty) chatEmpty.remove();

        const bubbleTanya = document.createElement("div");
        bubbleTanya.className = "bubble question";
        bubbleTanya.textContent = pesan;
        chatMessages.appendChild(bubbleTanya);

        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(function () {
            const bubbleJawab = document.createElement("div");
            bubbleJawab.className = "bubble answer";
            bubbleJawab.textContent = cariJawabanEkskul(pesan);
            chatMessages.appendChild(bubbleJawab);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);

        pesanInput.value = "";
    });
}
