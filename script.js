var adhata = document.getElementById("adhata");
var mailhata = document.getElementById("mailhata");
var adreshata = document.getElementById("adreshata");
var konuhata = document.getElementById("konuhata");
var mesajhata = document.getElementById("mesajhata");
var submithata = document.getElementById("submithata");
var yashata = document.getElementById("yashata");
var cinshata = document.getElementById("cinshata");
var sehirhata = document.getElementById("sehirhata");
var checkhata = document.getElementById("checkhata");

function adKontrol() {
  var ad = document.getElementById("adsoyad").value;

  if (ad.length == 0) {
    adhata.innerHTML = "Ad-Soyad alanı boş geçilemez!(js)";
    return false;
  }

  if (!ad.match(/^[a-zA-ZöçşığüÖÇŞİĞÜ,]+(\s{0,1}[a-zA-ZöçşığüÖÇŞİĞÜ, ])*$/)) {
    adhata.innerHTML = "Adınızı ve Soyadınızı tam giriniz!(js)";
    return false;
  }
  adhata.innerHTML = "";
  return true;
}

function adresKontrol() {
  var adres = document.getElementById("adres").value;

  if (adres.length == 0) {
    adreshata.innerHTML = "Adres alanı boş geçilemez!(js)";
    return false;
  }
  adreshata.innerHTML = "";
  return true;
}

function konuKontrol() {
  var konu = document.getElementById("konu").value;

  if (konu.length == 0) {
    konuhata.innerHTML = "Konu alanı boş geçilemez!(js)";
    return false;
  }
  konuhata.innerHTML = "";
  return true;
}

function checkKontrol() {
  if (document.getElementById("check").checked == false) {
    checkhata.innerHTML = "Kabul etmeden devam edemezsiniz!(js)";
    return false;
  }
  checkhata.innerHTML = "";
  return true;
}

function mesajKontrol() {
  var mesaj = document.getElementById("mesaj").value;

  if (mesaj.length == 0) {
    mesajhata.innerHTML = "Mesaj alanı boş geçilemez!(js)";
    return false;
  }
  mesajhata.innerHTML = "";
  return true;
}

function mailKontrol() {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var mail = document.getElementById("email").value;
  if (mail.length == 0) {
    mailhata.innerHTML = "Email alanı boş geçilemez!(js)";
    return false;
  } else if (reg.test(mail) == false) {
    mailhata.innerHTML = "Hatalı Mail Formatı!(js)";
    return false;
  }
  mailhata.innerHTML = "";
  return true;
}

function cinsKontrol() {
  radio = document.getElementsByName("cins");
  if (radio[0].checked || radio[1].checked || radio[2].checked) {
    cinshata.innerHTML = "";
    return true;
  }
  cinshata.innerHTML = "Cinsiyet seçiniz!(js)";
  return false;
}

function sehirKontrol() {
  selects = document.getElementById("sehir");
  if (selects.value != "") {
    sehirhata.innerHTML = "";
    return true;
  }
  sehirhata.innerHTML = "Şehir seçiniz!(js)";
  return false;
}

function yasKontrol() {
  selecty = document.getElementById("yas");
  if (selecty.value != "") {
    yashata.innerHTML = "";
    return true;
  }

  yashata.innerHTML = "Yaş seçiniz!(js)";
  return false;
}

function formKontrol() {
  adKontrol();
  adresKontrol();
  konuKontrol();
  mesajKontrol();
  mailKontrol();
  yasKontrol();
  cinsKontrol();
  sehirKontrol();
  checkKontrol();
  if (
    !adKontrol() ||
    !adresKontrol() ||
    !konuKontrol() ||
    !mesajKontrol() ||
    !mailKontrol() ||
    !sehirKontrol() ||
    !cinsKontrol() ||
    !yasKontrol()
  ) {
    submithata.style.display = "block";
    submithata.innerHTML = "Hatalı veya eksik yerleri düzeltin!(js)";
    setTimeout(function () {
      submithata.style.display = "none";
    }, 5000);

  } else {
    submithata.innerHTML = "Başarılı, gönderebilirsiniz.(js)   ";
    return true;
  }
}

function submitFormjs() {
  if (formKontrol()) {
    var formData = {
      adsoyad: document.getElementById("adsoyad").value,
      email: document.getElementById("email").value,
      adres: document.getElementById("adres").value,
      konu: document.getElementById("konu").value,
      mesaj: document.getElementById("mesaj").value,
      cinsiyet: document.querySelector('input[name="cins"]:checked').value,
      yas: document.getElementById("yas").value,
      sehir: document.getElementById("sehir").value,
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    window.location.href = "sonuc.html";
  } else {
    console.log("Form gönderilemedi!");
  }
}
