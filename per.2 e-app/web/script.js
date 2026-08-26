async function hitungVolume() {
    let panjang = parseInt(document.getElementById("panjang").value);
    let lebar = parseInt(document.getElementById("lebar").value);
    let tinggi = parseInt(document.getElementById("tinggi").value);

    let hasil = await eel.hitung_volume(panjang, lebar, tinggi)();

    document.getElementById("hasil").innerText = hasil;
}