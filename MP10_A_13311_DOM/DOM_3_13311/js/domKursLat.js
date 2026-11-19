var targetNode;

function init() {
    targetNode = document.getElementById("hasil").firstChild;
    hitungKurs("idr");
}

function hitungKurs(id) {
    var inputEl = document.getElementById(id);
    var nilaiRupiah = parseFloat(inputEl.value);

    if (isNaN(nilaiRupiah)) {
        alert("Masukkan nominal Rupiah yang valid.");
        inputEl.focus();
        return;
    }

    var hasilUsd = nilaiRupiah / 18246;
    targetNode.data = hasilUsd.toFixed(2);
    var itemRiwayat = document.createElement("li");

    var catatan = document.createTextNode(
        "Rp" + nilaiRupiah + " = US$" + hasilUsd.toFixed(2)
    );

    itemRiwayat.appendChild(catatan);
    document.getElementById("riwayat").appendChild(itemRiwayat);
}