var app = new Vue({

    
    el: '#app',
    data: {
        adsoyad: '',
        email: '',
        adres: '',
        konu: '',
        cinsiyet: '',
        yas: '',
        sehir: '',
        mesaj: '',
        error: false,
        success: false,
        sehirler: [
            "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl",
            "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan",
            "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir",
            "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş",
            "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ",
            "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale",
            "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
        ]
    },

    

    methods: {
        submitForm: function() {
            if (!this.validateForm()) {
                this.error = true;
                setTimeout(() => { this.error = false; }, 3000);
                console.log('Form gönderildi:', this.data);
                return;
            }
            else{
                this.success=true;
            }
            
            // Form submit işlemi burada gerçekleşecek
        },
        validateName: function(name) {
            return /^[a-zA-ZöçşığüÖÇŞİĞÜ,]*\s{1}[a-zA-ZöçşığüÖÇŞİĞÜ,]*$/.test(name);
        },
        validateEmail: function(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        },
        validateForm: function() {
            return this.adsoyad && this.validateName(this.adsoyad) && this.email && this.adres && this.konu && this.cinsiyet && this.yas && this.sehir && this.mesaj;
            
        }
    }
});

