// console.log("merhaba")

// Değişkenler
// Değişken: Program çalışırken, programın ihtiyacı olan verilerin saklandığı yerdir. Bilgisayarın RAM'inde tutulurlar.


// console.log(6165 + (6165 * 0.37))  // maaş zammım

// var maas = 6165
// console.log(maas + (maas * 0.37))  // maaş zammını değişken kullanarak hesapladık

// Değişken isimleri oluşturulurken aşağıdaki kurallara dikkat edilmelidir:
// Türkçe karakter kullanmamalıyız.
// Sayı ile başlayamaz.
// Arada boşluk, tire (-) olmaz. Ancak _ olur.

// Değişken Veri Türkeri

// var değişken türüne alternatif olarak let de kullanılabilir.

// var urunAdi = "iphone 13" // String
// var urunFiyat = 15000 // number

// console.log(typeof urunAdi)
// console.log(typeof urunFiyat)

// let sayi1 = 10, sayi2 = "20" // sayi2 string
// console.log(sayi1 + sayi2) // 1020
// console.log(Number(sayi1) + Number(sayi2))  // 30, string veri türünü number'a çevirdik
// console.log(sayi1.toString() + sayi2.toString()) // 1020, nnumber veri türünü string'e çevirdik

// let isim = "Deniz"
// let soyad = "öztürk"
// console.log(isim + " " + soyad) // iki string veri türü arasında boşluk bırakma

// let sinavNotu = 70
// let basarilimi = (sinavNotu >= 50)

// console.log(basarilimi)  // true, boolean veri türü

// let yas

// console.log(yas == undefined)
// console.log(typeof yas)

// // Operatörler

// let sonuc, a = 10, b = 20, c = 30

// // 1- Aritemtik Operatörler
// sonuc = a + b
// sonuc = a - b
// sonuc = a * b
// sonuc = a / b
// sonuc = c % a // mod operatörü, kalan
// sonuc = a++ // a + 1, önce ata sonra arttır
// sonuc = ++a // a + 1, önce arttır sonra ata
// sonuc = a-- // a - 1, önce ata sonra azalt
// sonuc = --a // a - 1, önce azalt sonra ata

// // 2- Atama Operatörleri
// sonuc = a // a'yı sonuc değerine at
// sonuc += a // sonuc = sonuc + a
// sonuc += (a + b) // sonuc = sonuc + a + b

// // 3- Karşılaştırma Operatörleri
// sonuc = (a == b) // a, b'ye eşit mi?
// sonuc = (a != b)  // a, n'ye eşit değil mi?
// sonuc = (3 === "3") // === ile türü de kontrol ediyor
// sonuc = (a < b) // küçük mü?
// sonuc = (a > b) // büyük mü?
// sonuc = (a >= b) // büyük eşit mi?
// sonuc = (a <= b) // küçük eşit mi?

// // 4- Mantıksal Operatörler

/*
&& : Ve
|| : Veya
! : Değil

// console.log(sonuc)



// İf/Else Koşul İfadeleri

// if (5 < 4){  // koşul doğruysa çalışır
//     console.log("false")
// }
// else {
//     console.log("merhaba")
// }
// else if (3 < 4) { // bir önceki şart doğru değilse buraya bakar
//     console.log("true")
// }


// Koşul İfadelerinde doğru koşul bulunduğunda blokdan çıkılır

// let userName = "deniz"
// let password = "denizoz"
 
// let isLoggendin = (userName == "denz" && password == "denizoz") // &&: ve operatörü

// &&: ve, 

// if (isLoggendin){
//     console.log("uygulamaya giriş yapıldı")
// }
// else{
//     console.log("kullanıcı adı veya parola yanlış")
// }

/*
if (userName == "denizz"){
    if (password == "denizoz"){
        console.log("uygulamaya giriş yapıldı")
    }
    else {
        console.log("parola yanlış")
    }
    
}
else{
    console.log("kullanıcı adı yanlış")
}
*/

// Strings

/*
let ad = "deniz"
let soyad = "öztürk"
let yas = 70
let sehir = "Malatya"

let mesaj = "Benim adım " + ad + " ve soyadım " + soyad + ". " + sehir + "'de yaşıyorum." + "Emekliliğe " + (65 - yas) + " yılım kaldı."

// backtick
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. Emekliliği ${65 - yas} yılım kaldı.`

// Ternary Operators

let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65 - yas) + " yıl kaldı." : "Zaten emekli oldunuz." // eğer şart true ise ilk tırnak içindeki işlem gerçekleştirilir, eğer şart false ise ikinci tırnak içindeki işlem gerçekleştirilir

mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. ${emeklilik}`


console.log(mesaj)

*/

// String Methods

/*
let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi"

let sonuc

sonuc = kursAdi.toLowerCase() // Bütün harfleri küçük harflere çevirme
sonuc = kursAdi.toUpperCase() // Bütün harfleri büyük harflere çevirme
sonuc = kursAdi.length // karakter sayısı
sonuc = kursAdi[0] // sıfırıncı indexteki karakteri bulma
sonuc = kursAdi.slice(0,6) // sıfırıncı indeksten 6. indekse kadar olan kısmı gösterir "6. indeks dahil değil"
sonuc = kursAdi.slice(10) // bitiş indeksi belirtmediğimiz için sonuna kadar alır
sonuc = kursAdi.slice(-10) // indeksi "-" ile belirtince sondan sayarak son kısmı alıyor

sonuc = kursAdi.substring(10) // slice ile aynı işi yapar
sonuc = kursAdi.replace("Eğitimi", "Kursu") // Eğitimi bilgisini bul kursu bilgisi ile değiştirme
sonuc = kursAdi.trim() // Baştaki ve sondaki boşlukları siler.Start ve end ile kullanılırsa sadece bir taraf için uygulanır
sonuc = kursAdi.indexOf("Komple") // Komple indeksini bulur ve başlangıç indeksini verir
sonuc = kursAdi.split(" ") // Boşluktan bunları ayır ve bir dizi oluştur
sonuc = kursAdi.split(" ")[4] // Boşluktan ayır ve 3. indeksteki elemanı al

console.log(sonuc)
*/


// Numbers

/*
let sonuc
sonuc = "10.6"

sonuc = Number(sonuc) // Göndermiş olduğumuz bir değeri number türüne çeviriyoruz
sonuc = parseInt(sonuc) // Göndermiş olduğumuz bir değeri tam sayı yapar
sonuc = parseFloat("10.6")  // Göndermiş olduğumuz bir değerin ondalıklı kısımı göz ardı edilmez
sonuc = isNaN("10") // NaN mı? diyoruz yani sayısal bir değer mi diyoruz (sayısalsa false değeri verir)

let sayi = 15.121555544545

sonuc = sayi.toPrecision(5) // bütün sayı üzerinden 5 basamaklı sayı gönderir bize
sonuc = sayi.toFixed(5) // ondalıklı kısımı 5 basamaklı yapar

sonuc = Math.round(2.4) // en yakın sayıya yuvarlama işlemi yapar
sonuc = Math.ceil(2.2) // yukarı yuvarlar
sonuc = Math.floor(2.6) // aşağı yukarlar
sonuc = Math.sqrt(25) // karekök alma işlemi yapar
sonuc = Math.pow(2,3) // üss alma işlemi yapar (2'nin küpü)
sonuc = Math.abs(-10) // mutlak değer alma işlemini yapar
sonuc = Math.min(4,5,235,34,43,1) // minimum değeri bulur
sonuc = Math.max(4,35,534,434,1) // maximum değeri bulur
sonuc = Math.random() // rastgele sayı üretir (0 ile 1 arasında)
sonuc = Math.floor(Math.random() * 100) + 1 // 1 ile 100 arasında sayı üretme




console.log(typeof sonuc)
console.log(sonuc)

*/


// Date & Time

/*
let bugun = new Date() // tarih oluşturma (şimdiki saat - şimdiki tarih)
sonuc = bugun

// Get methods : istediğimiz bilgiyi alma

sonuc = bugun.getDate() // gün bilgisini alma
sonuc = bugun.getDay() // hangi gün olduğunu söyler. 0'dan (pazar) 6'ya kadar(cumartesi) gider
sonuc = bugun.getFullYear() // yıl bilgisini alma
sonuc = bugun.getHours() // saat bilgisini alma
sonuc = `${bugun.getDate()}.${bugun.getMonth()}.${bugun.getFullYear()}` // gün, ay ve yıl bilgisini alma
sonuc = bugun.getTime() // saati milisaniye cinsinden veriyor

// Set methods : istediğimiz bilgiyi değiştirme

bugun.setFullYear(2025) // yıl bilgisini değiştirme
bugun.setMonth(5) // ay bilsini değiştirme (0 bilgisi ocak ayı)
bugun.setDate(15) // gün bilgisini değğiştirme

sonuc = bugun

let dogumGunu = new Date(1990, 5, 15) // tarih belirleme

sonuc = bugun.getFullYear() - dogumGunu.getFullYear() // yıl çıkarma

let milisecond = bugun - dogumGunu // sonuç milisaniye
let saniye = milisecond / 1000 // saniyeye çevirme
let dakika = saniye / 60 // dakikaya çevirme
let saat = dakika / 60 // saate çevirme
let gun = saat / 24 // gune çevirme
let yil = gun / 365  // yıla çevirme

sonuc = yil 


console.log(sonuc)
console.log( typeof sonuc)

*/


// Diziler

/*
// let urun1 = "iphone 12"
// let urun2 = "iphone 13"
// let urun3 = "iphone 13 pro"

let urunler = ["iphone 12", "iphone 13", "iphone 13 pro"]
let fiyatlar = [9000, 12000, 20000]
let renkler = ["gold", "siyah", "beyaz"]

let urun1 = ["iphone 12", 9000, "gold"]
let urun2 = []
urun2[0] = "iphone 13" // diziye eleman atama
urun2[1] = 12000
urun2[2] = "siyah"
let urun3 = ["iphone 13 pro", 
20000, 
["beyaz", "sarı", "mor"]]
// urun3[2] = "mavi" // dizideki elemanı güncelleme

console.log(urunler[0])
console.log(urunler[1])
console.log(urun3[2])
console.log(typeof urun3[2])
console.log(urun3[2][2]) // ürün3 dizisindeki 2. elemanın 2. elamanıc(Bu şekilde dizinin alt dizisinin alt dizisindeki şeklinde gider)

console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`)
console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`)
console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`)
*/


// Dizi Methodları

/*
let ogrenciler = ["çınar", "yiğit", "ada"]

sonuc = ogrenciler.length // dizi eleman sayısını bulma

// array to string
sonuc = ogrenciler.toString() // diziyi string'e çevirme
sonuc = ogrenciler.join(" ") // arada boşluk bırakarak diziyi string'e çevirme (boşluk yerine istediğimiz işareti koyarız)

// eleman silme
//sonuc = ogrenciler.pop() // son eleman siler ve silinen eleman geri döndürülür
// sonuc = ogrenciler.shift() // ilk elemanı siler ve silinen eleman geri döndürülür

// eleman ekleme

// sonuc = ogrenciler.push("sena") // dizinin sonuna eleman eklenir
// sonuc = ogrenciler.unshift("sena") // dizinin başına eleman ekler (ilk eleman)

let markalar1 = ["mazda", "toyota"]
let markalar2 = ["opel", "renault"]
let markalar3 = ["mercedes"]

// sonuc = markalar1.concat(markalar2) // dizi birleştirme
// sonuc = markalar1.concat(markalar2, markalar3) // dizi birleştirme
// sonuc = markalar1.splice(0, 1, "bmw", "audi")
// eleman silme, ekleme ve silinen elemanı döndürür. Yapılan işlemleri diziye aktarır
sonuc = markalar1.splice(0, 1) // sadece eleman silme




console.log(sonuc)
console.log(markalar1)
*/


// Dizi Ugulamaları

/*
// 1- "elma, armut, muz, çilek" elamanlarına sahip bir dizi oluşturunuz.
let meyveler = ["elma", "armut", "muz", "çilek"]

// 2- Dizi kaç elemanlıdır?
console.log(meyveler.length)

// 3- Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0])
console.log(meyveler[meyveler.length - 1])

// 4- Elma dizinin bir elemanımıdır?
console.log(meyveler.includes("elma"))
console.log(meyveler.indexOf("elma"))

// 5- Kiraz meyvesinin listenin sonuna ekleyiniz.
//console.log(meyveler[meyveler.length] = "kiraz")
meyveler.push("kiraz")
console.log(meyveler)

// 6- Dizinin son 2 elemanını siliniz.
// meyveler.pop()
// meyveler.pop()
meyveler.splice(meyveler.length - 2, 2) // splice(bailangıç, bitiş)
console.log(meyveler)

// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşının ve not ortalamasını hesaplayınız.

 // Öğrenci 1: Yiğit Bilgi 2010 (70, 60, 80)
 // Öğrenci 2: Ada Bilgi 2012 (80, 80, 90)
 // Öğrenci 3: Ahmet Turan 2009 (60, 60, 70)
 

 let ogr1 = ["yiğit",
  "bilgi",
   2010, 
   [70, 60, 80]]

   let ogr2 = ["ada",
  "bilgi",
   2012, 
   [80, 80, 90]]

   let ogr3 = ["ahmet",
  "turan",
   2009, 
   [60, 60, 70]]

   let ogrenciler = [ogr1, ogr2, ogr3]

   let yigitYas = new Date().getFullYear() - ogrenciler[0][2]
   let adaYas = new Date().getFullYear() - ogrenciler[1][2]
   let ahmetYas = new Date().getFullYear() - ogrenciler[2][2]

   console.log(yigitYas)
   console.log(adaYas)
   console.log(ahmetYas)

   let yigitOrt = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3
   let adaOrt = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3
   let ahmetOrt = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3
   
   console.log(yigitOrt.toFixed(1), adaOrt.toFixed(1), ahmetOrt.toFixed(1))
   */
   

// Objects

/*
let kullaniciA = {  // obje tanımlama işlemi
    "ad" : "Deniz",  // "key" : "value"
    "soyad" : "Öztürk", 
    "yas" : 27,
    "adres" : {
        "sehir" : "Malatya",
        "ilce" : "Hekimhan"
    },
    "hobiler" : ["sinema", "spor"] // obje içinde dizi tanımla
}

let kullaniciB = {  // obje tanımlama işlemi
    "ad" : "Fırat",  // "key" : "value"
    "soyad" : "Öztürk", 
    "yas" : 25,
    "adres" : {
        "sehir" : "Malatya",
        "ilce" : "Hekimhan"
    },
    "hobiler" : ["sinema", "spor", "atıcılık"] // obje içinde dizi tanımla
}

let sonuc

sonuc = kullaniciA.ad  // Anahtar aracılığı ile istediğimiz bilgiye ulaşıyoruz
sonuc = kullaniciA["yas"]
sonuc = kullaniciA.adres.sehir
sonuc = kullaniciA.adres.ilce
sonuc = kullaniciA.hobiler[0]

let kullanicilar = [
    kullaniciA,
    kullaniciB
]

sonuc = kullanicilar[1].ad // dizinin 1. indeksindeki elemanın ad bilgisine ulaşma

let urunler = [
    {
        "urun_adi" : "samsung s21",
        "urun_fiyat": 13000
    },
    {
        "urun_adi" : "samsung s22",
        "urun_fiyat": 15000
    }
]

sonuc = urunler[0].urun_adi // diziden obje çağırma


console.log(sonuc)
*/

// Object Uygulamaları

/*
    1- Sipariş bilgilerini object içinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

        sipariş id: 101
        sipariş tarihi: 31.12.2022
        ödeme şekli: kredi kartı
        kargo adresi: Ballıkaya Mah. Hekimhan/Malatya
        satın alınan ürünler:
            ürüm id: 5
            ürün başlığı: Iphone 13 Pro
            ürün url: http://abc.com/iphone-13-pro
            ürün fiyarı: 22000

            ürüm id: 6
            ürün başlığı: Iphone 13 Pro Max
            ürün url: http://abc.com/iphone-13-pro-max
            ürün fiyarı: 25000
        
        müşteri
            müşteri id: 12
        satıcı: 
            firma id: 34
            firma adı: Apple Türkiye
        
        sipariş id: 102
        sipariş tarihi: 30.12.2022
        ödeme şekli: kredi kartı
        kargo adresi: Ballıkaya Mah. Hekimhan/Malatya

        ürüm id: 6
            ürün başlığı: Iphone 13 Pro Max
            ürün url: http://abc.com/iphone-13-pro-max
            ürün fiyarı: 25000
        
        müşteri
            müşteri id: 12
        satıcı: 
            firma id: 34
            firma adı: Apple Türkiye



let siparis1 = {
    "siparis_id": 101,
    "siparis_tarihi": "31.12.2022",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "mahalle": "Ballıkaya",
        "ilce": "Hekimhan",
        "sehir": "Malatya" 
    },
    "urunler": [
        {
            "urun_id": 5,
            "urun_adi": "Iphone 13 Pro",
            "urun_url": "http://abc.com/iphone-13-pro",
            "urun_fiyati": 22000
        },
        {
            "urun_id": 6,
            "urun_adi": "Iphone 13 Pro Max",
            "urun_url": "http://abc.com/iphone-13-pro-max",
            "urun_fiyati": 25000
        }
    ]
}

let siparis2 = {
    "siparis_id": 102,
    "siparis_tarihi": "30.12.2022",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "mahalle": "Ballıkaya",
        "ilce": "Hekimhan",
        "sehir": "Malatya" 
    },
    "urunler": [
        {
            "urun_id": 6,
            "urun_adi": "Iphone 13 Pro Max",
            "urun_url": "http://abc.com/iphone-13-pro-max",
            "urun_fiyati": 25000
        }
    ]
}

let siparisler = [siparis1, siparis2]


let siparis1_toplam = (siparisler[0].urunler[0].urun_fiyati + siparisler[0].urunler[1].urun_fiyati) * 1.18
console.log(siparis1_toplam)

let siparis2_toplam = siparisler[1].urunler[0].urun_fiyati * 1.18
console.log(siparis2_toplam)


console.log("Toplam ödenen miktar: ", siparis1_toplam + siparis2_toplam)

*/


// Döngüler

/*
let toplam = 0


// for(let i = 0; i <= 10; i++){ // for(başlangıç_değeri; koşul; sonraki_i_değeri)
 //   toplam += i // toplam değerini i ile topla toplam değişkenine ata
// }



let sayilar = [1, 4, 5, 8, 4, 3, 12, 5, 3, 5]

// for(let i = 0; i < sayilar.length; i++){
//     toplam += sayilar[i]
// }

// for(let i in sayilar ){ // sayilar içerisindeki bütün elemanları i değişkenine aktar
//     toplam += sayilar[i]
// }

for(let sayi of sayilar){ // sayilar dizisindeki elemanları aldık, burada index numaralarının önemi yok 
    toplam += sayi

}

console.log("Dizideki sayıların toplamı=", toplam)

let user = {
    "name": "Deniz Öztürk",
    "userName": "denizozturk",
    "password": "1234567890",
    "email": "dozturk.deniz@gmail.com"
}

for(let key in user){ // user içerindeki bütün key'lere ulaş
    console.log(user[key]) // user'ın key bilgilerini yazdır
}
*/

// Döngü Uygulamaları

/*
let sayilar = [1, 5, 7, 15, 3, 25, 2]

// 1- Sayilar içerisindeki her bir elemanın karesini yazdırınız.

let kare = 0

for(let i of sayilar){ // for(let i = 0; i < sayilar.length; i++) veya for(let i in sayilar) ile de yapılabilir.
    kare = i * i
    console.log(kare)
}

// 2- Sayilar içerisindeki hangi sayılar 5'in katıdır?


// let besinKati = []

// for(let i in sayilar){
//     if(sayilar[i] % 5 == 0){
//             besinKati.push(sayilar[i])
//     }
// }

// console.log(besinKati)


// 3- sayilar içerisindeki çift sayilarin toplamını bulunuz.


// let ciftlerinToplami = 0

// for(let i of sayilar){
//     if(i % 2 == 0){
//         ciftlerinToplami += i
//     }
// }

// console.log(ciftlerinToplami)


// let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"]

// 4- urunler içerisindeki tüm ürünleri büyük harf ile yazdırınız.


// for(let i of urunler){
//     console.log(i.toUpperCase())
// }


// 5- urunler listesinde içinde samsung geçen kaç ürün vardır?


// let sayac = 0
// for(let i of urunler){
//    if(i.includes("samsung")){
//     sayac += 1
//    }
// }
// console.log(sayac)


// let ogrenciler = [
//     {"ad": "yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
//     {"ad": "ada", "soyad": "bilgi", "notlar": [80,60,0]},
//     {"ad": "çınar", "soyad": "turan", "notlar": [70,70,60,85]},
// ]

// ogrenciler listesindeki her oğrencinin not ortalamasını ve başarı durumlarının yazdırınız.


// for(let ogrenci of ogrenciler){
//     let notToplam = 0, ort = 0, adet = 0

//     for(let not of ogrenci.notlar){
//         notToplam += not;
//         adet++
//     }
//     ort = notToplam / adet
//     console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli ogrencinin not ortalaması : ${ort}.`)
//     if(ort >= 50){
//         console.log("başarılı.")
//     }else {
//         console.log("başarısız")
//     }
// }
*/


// Fonksiyonlar

/*
// Fonksiyon: Belli bir amaç için tekrar tekrar işlem yaptırmak için fonksiyonlar kullanılır

// function selamlama() {
//     console.log("merhaba")
// }

// selamlama() // fonksiyonu çağırma

// Fonsiyona dışardan parametre gönderme işlemi

// function selamlama(msg) {
//     console.log(msg)
// }

// selamlama("selam")
// selamlama("merhaba")
// selamlama("iyi günler")
// selamlama() 

function yasHesapla(dogumYili) {
    // console.log(new Date().getFullYear() - dogumYili)
    return new Date().getFullYear() - dogumYili // geriye gönderme işlemi yaptık
}

// console.log(yasHesapla(1985))
// yasHesapla(1996)

function emekliligeKacYilKaldi (dogumYili, isim) {
    let yas = yasHesapla(dogumYili)
    let kalanSene = 65 - yas

    if(kalanSene > 0) {
        console.log(`${isim}, emekli olmanıza ${kalanSene} yıl kaldı`)
    }  else {
        console.log("Zaten emekli oldunuz")
    }
}

emekliligeKacYilKaldi(1996, "Deniz")
*/

// Fonksiyon Uygulamaları

/*
// 1- Kendisine gönderilen kelimeye belirnelen kez ekranda yazan fonksiyonu yazınız.

function kelime(word, tekrarSayisi) {
    for(let i = 1; i <= tekrarSayisi; i++){
        console.log(word)
    }
}

kelime("deniz", 5)

// 2- Diktörgenin alan ve çevresinin hesaplayan fonksiyonu yazdırırınız.

function dikdortgen(kısaKenar, uzunKenar) {
    let alan, cevre
    alan = kısaKenar * uzunKenar
    cevre = 2 * ( kısaKenar + uzunKenar)
    console.log(`Diktörgenin alanı: ${alan}, dikdörtgenin çevresi: ${cevre}`)
}
 dikdortgen(7, 10)

 // 3- Yazı tura uygulamasını fonsiyok kullanarak yazınız.

function yaziTuraAt() {
    let random = parseInt(Math.random() * 10)
    if(random <= 5) {
        console.log("yazı")
    } else {
        console.log("tura")
    }
}

yaziTuraAt()

 // 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

 function tamBolen(sayi) {
    let sayilar = [] 

    for (let i = 2; i < sayi; i++) {
        if (sayi % i == 0){
            sayilar.push(i)
        }
    }
    return sayilar
 }
console.log(tamBolen(15))

 // 5- Değişken sayıda parametre alan toplam isminde bir fonsiyon yazınız.
 
 function toplam() {
    let sonuc = 0
    for(let i = 0; i < arguments.length; i++) {  // göndermiş olduğumuz parametreleri key ve value şeklinde saklıyor.
        sonuc += arguments[i]
    }
    return sonuc
 }

 console.log(toplam(2, 5, 24, 5))
*/

// Scopes

// Fonksiyon dışında tanımlanmış her değişkene global scope ismi verilir.
var isim = "Deniz" 
const adres = "istanbul" // uygulama boyunca değiştirilmemesini garanti altına almak istediğim değerleri const ile tanımlıyorum (örneğin şifre)
 

function yazdir() {
    var isim = "ezgi" 
    var yas = 27
    console.log("function scope: ", isim + ", " + yas) // Fonksiyon ilk başta kendi içerisinde değişkeni arar, bulamazsa gider global scope'da arar
}

if(true) {
    let cinsiyet = "Kadın"
    var isim = "Zeynep" // if bloğunun içerisine tanımlanmış herhangi bir değişken yine global scope'dur.
    console.log(isim)
}
console.log("global scope:", isim)

yazdir()

// console.log(yas) // yaş değişkeni global scope'da olmadığı için hata  verir

// Fonksiyonlar kendi scope alanını oluşturur.
// Blok içerisinde yeni bir scope oluşmaz. (let ve const tanımlanan değişkenler blokların kendi scope alanını oluşturuyor)


