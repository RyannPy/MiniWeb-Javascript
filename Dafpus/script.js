let jenisSumber = "";
let jumlahPenulis = "";

function showStep(id) {
    document
        .querySelectorAll(".step")
        .forEach(el => el.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function pilihJenis(jenis) {
    jenisSumber = jenis;
    showStep("step-penulis");
}

function pilihJumlahPenulis(jumlah) {
    jumlahPenulis = jumlah;
    if (jumlah === "1") showStep("form-penulis-1");
    else if (jumlah === "2") showStep("form-penulis-2");
    else showStep("form-penulis-lebih");
}
// Setelah input nama penulis selesai, langsung masuk ke form sumber
function lanjutSetelahPenulis() {
    if (jenisSumber === "website") showStep("form-website");
    else if (jenisSumber === "jurnal") showStep("form-jurnal");
    else showStep("form-buku");
}

function getPenulis() {
    let penulis = "";

    if (jumlahPenulis === "1") {
        const depan = document
            .querySelector("#form-penulis-1 input:nth-of-type(1)")
            .value.trim();
        const belakang = document
            .querySelector("#form-penulis-1 input:nth-of-type(2)")
            .value.trim();
        penulis = belakang ? `${belakang}, ${depan}` : `${depan}`;
    } else if (jumlahPenulis === "2") {
        const depan1 = document
            .querySelector("#form-penulis-2 input:nth-of-type(1)")
            .value.trim();
        const belakang1 = document
            .querySelector("#form-penulis-2 input:nth-of-type(2)")
            .value.trim();
        const lengkap2 = document
            .querySelector("#form-penulis-2 input:nth-of-type(3)")
            .value.trim();
        penulis = belakang1
            ? `${belakang1}, ${depan1} dan ${lengkap2}`
            : `${depan1} dan ${lengkap2}`;
    } else if (jumlahPenulis === "lebih") {
        const depan = document
            .querySelector("#form-penulis-lebih input:nth-of-type(1)")
            .value.trim();
        const belakang = document
            .querySelector("#form-penulis-lebih input:nth-of-type(2)")
            .value.trim();
        penulis = belakang ? `${belakang}, ${depan}. Dkk.` : `${depan}. Dkk.`;
    }

    return penulis;
}

function generateOutput() {
    const penulis = getPenulis();
    let output = "";

    if (jenisSumber === "website") {
        const tahun = document
            .querySelector("#form-website input:nth-of-type(1)")
            .value.trim();
        const judul = document
            .querySelector("#form-website input:nth-of-type(2)")
            .value.trim();
        const url = document
            .querySelector("#form-website input:nth-of-type(3)")
            .value.trim();
        const tanggal = document
            .querySelector("#form-website input:nth-of-type(4)")
            .value.trim();
        const waktu = document
            .querySelector("#form-website input:nth-of-type(5)")
            .value.trim();

        output = `${penulis}. ${tahun}. "${judul}". ${url} (diakses tanggal ${tanggal}, pukul ${waktu}).`;
    } else if (jenisSumber === "jurnal") {
        const tahun = document
            .querySelector("#form-jurnal input:nth-of-type(1)")
            .value.trim();
        const judul = document
            .querySelector("#form-jurnal input:nth-of-type(2)")
            .value.trim();
        const namaJurnal = document
            .querySelector("#form-jurnal input:nth-of-type(3)")
            .value.trim();
        const volume = document
            .querySelector("#form-jurnal input:nth-of-type(4)")
            .value.trim();
        const nomor = document
            .querySelector("#form-jurnal input:nth-of-type(5)")
            .value.trim();
        const halaman = document
            .querySelector("#form-jurnal input:nth-of-type(6)")
            .value.trim();

        output = `${penulis}. ${tahun}. "${judul}". <i>${namaJurnal}</i>, ${volume}(${nomor}): ${halaman}.`;
    } else if (jenisSumber === "buku") {
        const tahun = document
            .querySelector("#form-buku input:nth-of-type(1)")
            .value.trim();
        const judul = document
            .querySelector("#form-buku input:nth-of-type(2)")
            .value.trim();
        const kota = document
            .querySelector("#form-buku input:nth-of-type(3)")
            .value.trim();
        const penerbit = document
            .querySelector("#form-buku input:nth-of-type(4)")
            .value.trim();

        output = `${penulis}. ${tahun}. <i>${judul}</i>. ${kota}: ${penerbit}.`;
    }

    document.getElementById("output").innerHTML = output;
    window.scrollTo(0, document.body.scrollHeight);
}
