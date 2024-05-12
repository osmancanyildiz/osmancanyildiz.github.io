var sifrehata = document.getElementById("sifrehata");
var mailhata = document.getElementById("mailhata");
var submithatahata = document.getElementById("submithata");

function sifreKontrol() {
  var sifre = document.getElementById("sifre").value;

  if (sifre.length == 0) {
    sifrehata.innerHTML = "Lütfen şifrenizi girin.";
    return false;
  }
  sifrehata.innerHTML = "";
  return true;
}

function mailKontrol() {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var mail = document.getElementById("mail").value;
  if (mail.length == 0) {
    mailhata.innerHTML = "Lütfen kullanıcı adınızı girin.";
    return false;
  } else if (reg.test(mail) == false) {
    mailhata.innerHTML = "Kullanıcı adınız mail formatında olmalıdır!";
    return false;
  }
  mailhata.innerHTML = "";
  return true;
}

function logKontrol() {
  sifreKontrol();
  mailKontrol();

  if (!sifreKontrol() || !mailKontrol()) {
    submithata.style.display = "block";
    submithata.innerHTML = "Hatalı veya eksik giriş yaptınız!";
    setTimeout(function () {
      submithata.style.display = "none";
    }, 3000);

    return false;
  }
}
