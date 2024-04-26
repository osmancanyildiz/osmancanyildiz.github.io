var adhata = document.getElementById("adhata");
var mailhata = document.getElementById("mailhata");
var adreshata = document.getElementById("adreshata");
var konuhata = document.getElementById("konuhata");
var mesajhata = document.getElementById("mesajhata");
var submithata = document.getElementById("submithata");

function adKontrol(){
    var ad = document.getElementById("adsoyad").value;

    if (ad.length == 0) {
        adhata.innerHTML = "Bu alan boş geçilemez!";
        return false;
    }

    if (!ad.match(/^[a-zA-ZöçşığüÖÇŞİĞÜ,]*\s{1}[a-zA-ZöçşığüÖÇŞİĞÜ,]*$/)) {
        adhata.innerHTML = "Adınızı ve Soyadınızı tam giriniz!";
        return false;
    }
    adhata.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function adresKontrol(){
    var adres = document.getElementById("adres").value;


    if (adres.length == 0) {
        adreshata.innerHTML = "Bu alan boş geçilemez!";
        return false;
    }
    adreshata.innerHTML = "";
    return true;
}

function konuKontrol(){
    var konu = document.getElementById("konu").value;

    if (konu.length == 0) {
        konuhata.innerHTML = "Bu alan boş geçilemez!";
        return false;
    }
    konuhata.innerHTML = "";
    return true;

}

function mesajKontrol(){
    var mesaj = document.getElementById("mesaj").value;

    if (mesaj.length == 0) {
        mesajhata.innerHTML = "Bu alan boş geçilemez!";
        return false;
    }
    mesajhata.innerHTML = "";
    return true;

}

function mailKontrol()
{
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var mail = document.getElementById("email").value;
if(mail.length ==0){

    mailhata.innerHTML='Bu alan boş geçilemez!';
    return false;
    }

else if (reg.test(mail) == false){

    mailhata.innerHTML='Hatalı Mail Formatı!';
    return false;	  
    }
    mailhata.innerHTML="";
    return true;

}


function formKontrol(){
    if (!adKontrol() || !adresKontrol() || !konuKontrol() || !mesajKontrol() || !mailKontrol()) {
        submithata.style.display ="block";
        submithata.innerHTML = "Hatalı veya eksik yerleri düzeltin!";
        setTimeout(function(){submithata.style.display ="none";}, 3000);

        return false;
    }

}

