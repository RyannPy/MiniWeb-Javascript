let panjangInput, jenisPanjangInput, jenisPanjangOutput;

document.getElementById("button").onclick = function () {
    //jpuk kbh
    panjangInput = document.getElementById("panjangInput").valueAsNumber;
    jenisPanjangInput = document.getElementById("jenisPanjangInput").value;
    jenisPanjangOutput = document.getElementById("jenisPanjangOutput").value;

    //validasi
    if (isNaN(panjangInput)) {
        alert("Masukkan suhu terlebih dahulu!");
        return;
    }
    if (jenisPanjangInput === "None" || jenisPanjangOutput === "None") {
        alert("Masukkan jenis panjang yang valid!");
        return;
    }

    //proses

    //ddi meter kbh
    function keMeter(panjangInput, jenisPanjangInput) {
        if (jenisPanjangInput == "Km") {
            return panjangInput * 1000;
        } else if (jenisPanjangInput == "Hm") {
            return panjangInput * 100;
        } else if (jenisPanjangInput == "Dam") {
            return panjangInput * 10;
        } else if (jenisPanjangInput == "Dm") {
            return panjangInput * 0.1;
        } else if (jenisPanjangInput == "Cm") {
            return panjangInput * 0.01;
        } else if (jenisPanjangInput == "Mm") {
            return panjangInput * 0.0001;
        } else {
            return panjangInput;
        }
    }
    let panjangMeter = keMeter(panjangInput, jenisPanjangInput);
    //meter ddi liane
    function dariMeter(panjangMeter, jenisPanjangOutput) {
        if (jenisPanjangOutput == "Km") {
            return panjangMeter * 0.001;
        } else if (jenisPanjangOutput == "Hm") {
            return panjangMeter * 0.01;
        } else if (jenisPanjangOutput == "Dam") {
            return panjangMeter * 0.1;
        } else if (jenisPanjangOutput == "Dm") {
            return panjangMeter * 10;
        } else if (jenisPanjangOutput == "Cm") {
            return panjangMeter * 100;
        } else if (jenisPanjangOutput == "Mm") {
            return panjangMeter * 1000;
        } else {
            return panjangMeter;
        }
    }
    //hasil
    let panjangOutput = dariMeter(panjangMeter, jenisPanjangOutput);
    hasil = `${panjangInput} ${jenisPanjangInput} = ${panjangOutput} ${jenisPanjangOutput}`;
    //balekno wir
    document.getElementById("output").textContent = hasil;
};
