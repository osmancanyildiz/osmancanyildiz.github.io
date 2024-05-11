var adhata = document.getElementById("adhata");
var mailhata = document.getElementById("mailhata");
var adreshata = document.getElementById("adreshata");
var konuhata = document.getElementById("konuhata");
var mesajhata = document.getElementById("mesajhata");
var submithata = document.getElementById("submithata");
var yashata = document.getElementById("yashata");
var cinshata = document.getElementById("cinshata");
var sehirhata = document.getElementById("sehirhata");




function adKontrol(){
    var ad = document.getElementById("adsoyad").value;

    if (ad.length == 0) {
        adhata.innerHTML = "Bu alan boş geçilemez!(js)";
        return false;
    }

    if (!ad.match(/^[a-zA-ZöçşığüÖÇŞİĞÜ,]*\s{1}[a-zA-ZöçşığüÖÇŞİĞÜ,]*$/)) {
        adhata.innerHTML = "Adınızı ve Soyadınızı tam giriniz!(js)";
        return false;
    }
    adhata.innerHTML = "";
    return true;
}

function adresKontrol(){
    var adres = document.getElementById("adres").value;


    if (adres.length == 0) {
        adreshata.innerHTML = "Bu alan boş geçilemez!(js)";
        return false;
    }
    adreshata.innerHTML = "";
    return true;
}

function konuKontrol(){
    var konu = document.getElementById("konu").value;

    if (konu.length == 0) {
        konuhata.innerHTML = "Bu alan boş geçilemez!(js)";
        return false;
    }
    konuhata.innerHTML = "";
    return true;

}

function mesajKontrol(){
    var mesaj = document.getElementById("mesaj").value;

    if (mesaj.length == 0) {
        mesajhata.innerHTML = "Bu alan boş geçilemez!(js)";
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

    mailhata.innerHTML='Bu alan boş geçilemez!(js)';
    return false;
    }

else if (reg.test(mail) == false){

    mailhata.innerHTML='Hatalı Mail Formatı!(js)';
    return false;	  
    }
    mailhata.innerHTML="";
    return true;

}


function cinsKontrol(){
    radio = document.getElementsByName("cins")
    if (radio[0].checked || radio[1].checked || radio[2].checked) {
        cinshata.innerHTML = "";
        return true;
    }
    cinshata.innerHTML = "Cinsiyet seçiniz!(js)";
    return false;
}

function sehirKontrol(){
    selects = document.getElementById( "sehir");
    if (selects.value!="") {
        // value is set to a valid option, so submit form
        sehirhata.innerHTML = "";
        return true;
      }
      sehirhata.innerHTML = "Şehir seçiniz!(js)";
      return false;


}

function yasKontrol(){
    selecty = document.getElementById("yas");
    if (selecty.value!="") {
        // value is set to a valid option, so submit form
        yashata.innerHTML = "";
        return true;
      }

      yashata.innerHTML = "Yaş seçiniz!(js)";
      return false;
}



function formKontrol(){

    adKontrol();
    adresKontrol();
    konuKontrol();
    mesajKontrol();
    mailKontrol();
    yasKontrol();
    cinsKontrol();
    sehirKontrol();

    if (!adKontrol() || !adresKontrol() || !konuKontrol() || !mesajKontrol() || !mailKontrol() || !sehirKontrol() || !cinsKontrol() || !yasKontrol()) {
        submithata.style.display ="block";
        submithata.innerHTML = "Hatalı veya eksik yerleri düzeltin!(js)";
        setTimeout(function(){submithata.style.display ="none";}, 3000);

        return false;
    }
    else{
    submithata.innerHTML ="Başarılı, gönderebilirsiniz.(js)";
    return true
    }
}

function submitForm() {
    if (formKontrol()) {
        // Form data
        var formData = {
            adsoyad: document.getElementById("adsoyad").value,
            email: document.getElementById("email").value,
            adres: document.getElementById("adres").value,
            konu: document.getElementById("konu").value,
            mesaj: document.getElementById("mesaj").value,
            cinsiyet: document.querySelector('input[name="cins"]:checked').value,
            yas: document.getElementById("yas").value,
            sehir: document.getElementById("sehir").value
        };

        // Save form data to localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Redirect to sonuc.html
        window.location.href = 'sonuc.html';
    } else {
        // Show error message
        console.log('Form validation failed');
    }
}




