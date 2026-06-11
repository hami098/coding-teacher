# Ek — Parantez Türleri: `( )`, `[ ]`, `{ }`

## Tek cümlelik cevap
Üç ayrı şekil var çünkü **her biri farklı bir iş** yapar. Hepsi aynı `( )` olsaydı,
bilgisayar (ve sen) hangi anlamı kastettiğini ayırt edemezdin. Farklı şekil = farklı görev =
karışıklık yok.

## Kim karar verdi?
Kimse bir sabah uydurmadı; bir **gelenek zinciri** var:

1. **Matematik** (yüzyıllar önce): parantez `( )` gruplama için (`(2+3)×4`), fonksiyon yazımı
   `f(x)` için; küme parantezi `{ }` kümeler için.
2. **Eski diller** (1950-70'ler): C dili (Dennis Ritchie, ~1972) bugünkü kalıbı oturttu:
   `{ }` kod blokları, `[ ]` diziler ve index, `( )` çağrı ve gruplama.
3. **JavaScript** (Brendan Eich, 1995, ~10 günde yazıldı): o dönemin C/Java
   programcılarına **tanıdık gelsin** diye bilerek aynı parantez kurallarını aldı.

Yani bu işaretler keyfi değil; matematikten C'ye, C'den JavaScript'e geçen bilinçli bir
seçim.

## `( )` — normal (yuvarlak) parantez: "grupla / girdi ver"
Ortak fikri: **tek bir şeyi tut** ya da **girdi listesi ver.**

```js
(2 + 3) * 4            // gruplama: önce burayı hesapla (05. ders)
console.log("merhaba") // fonksiyon çağrısı: girdiyi ver (01. ders)
function topla(a, b) {} // parametre listesi (10. ders)
if (x > 5) {}           // koşul (07. ders)
for (let i = 0; ...) {} // döngü ayarları (09. ders)
```

## `[ ]` — köşeli parantez: "liste / pozisyon"
Ortak fikri: **sıralı bir dizi**, ya da bir şeyden **pozisyon/anahtar seçmek.**

```js
const renkler = ["a", "b", "c"]  // dizi oluştur (08. ders)
renkler[0]                       // index ile eleman seç (08. ders)
kisi["ad"]                       // obje anahtarına erişim (11. ders)
```

## `{ }` — süslü parantez: "blok / obje"
İki işi var, ikisi de "bir arada grup" fikri:

```js
if (x > 5) { ... }               // kod bloğu: bir grup talimat (07. ders)
function topla() { ... }          // fonksiyon gövdesi (10. ders)
const kisi = { ad: "Bahadır" }   // obje: anahtar-değer grubu (11. ders)
```

Ayrıca template literal içindeki `${ }` de süslü parantez kullanır: "buraya değişkenin
değerini koy" (04. ders).

## Neden hepsi normal parantez olmasın?
Çünkü o zaman aynı yazı **iki farklı anlama** gelir ve bilgisayar hangisini istediğini
bilemez. Örnek:

```js
f(0)   // f'i çağır, girdi olarak 0 ver       -> fonksiyon çalıştırma
f[0]   // f'in 0. elemanını/anahtarını al     -> erişim
```

Bunlar **bambaşka** iki işlem. İkisi de `f(0)` olsaydı, bilgisayar "çağır mı, eriş mi?"
sorusunu çözemezdi. Farklı parantez şekilleri bu belirsizliği ortadan kaldırır: gözün ve
bilgisayar bir bakışta niyetini anlar.

## Özet tablo

| Şekil | Adı            | Başlıca işi                                  | Ders |
|-------|----------------|----------------------------------------------|------|
| `( )` | yuvarlak       | gruplama, fonksiyon çağrısı/parametre, koşul | 01, 05, 07, 09, 10 |
| `[ ]` | köşeli         | dizi oluşturma, index/anahtar ile erişim     | 08, 11 |
| `{ }` | süslü          | kod bloğu, obje, `${ }` şablon               | 04, 07, 10, 11 |

## İstersen dene
Aşağıyı bir dosyaya yazıp çalıştır; üç parantezin üçünü de tek örnekte gör:

```js
const sayilar = [1, 2, 3];          // [ ] dizi
function ikiKat(x) { return x * 2; } // ( ) parametre, { } gövde
if (sayilar[0] === 1) {             // [ ] erişim, ( ) koşul, { } blok
  console.log(ikiKat(sayilar[0]));   // ( ) çağrı, [ ] erişim
}
```
