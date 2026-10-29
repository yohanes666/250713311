var validasiemail = "^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$"

function fn_ValForm() {
    var sMsg = "";

    if(document.getElementById("nama").value == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if(document.getElementById("email").value == "") {
        sMsg += "\n* Anda belum mengisikan email";
    }else if(document.getElementById("email").value != validasiemail){
        sMsg += "\n* Email hanya menerima huruf kecil";
    }
    if(document.getElementById("umur").value == "") {
        sMsg += "\n* Anda belum mengisikan umur";
    }else if(document.getElementById("umur").value >= 10 && document.getElementById("umur").value <= 18){
        sMsg += "\n* Umur harus berupa Angka dan berada di antara 10-18 tahun"; 
    }
    if(document.getElementById("kategori").value == "") {
        sMsg += "\n* Anda belum mengisikan kategori";
    }
    if(sMsg != "") {
        alert("Peringatan: \n" + sMsg);
        return false;
    }else{
        return true;
    }
}

var info;
if(document.getElementById("umur").value >= 10 && document.getElementById("umur").value <= 18){
    if(document.getElementById("umur").value > 14) {
        info = "Kategori Senior";
    }else{
        info = "Kategori Junior";
    } 
}

var kategori;
switch(document.getElementById("kategori").value){
    case "C":
        kategori = "Cerdas Cermat";
        break;
    case "P":
        kategori = "Puisi";
        break;
    case "D":
        kategori = "Desain Poster";
        break;
}

alert("Terima kasih " + nama + "! Andaterdaftar di lomba " + kategori + " " + info);