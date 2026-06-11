# 02 — Değişkenler

## Fikir
Şimdiye kadar değerleri (metinleri) doğrudan `console.log` içine yazdın. Ama çoğu zaman
bir değeri **saklamak** ve sonra tekrar tekrar kullanmak istersin. Bunu **değişken** ile
yaparsın.

Değişken = üstünde **etiket** olan bir **kutudur**. Kutunun içine bir değer koyarsın,
etiketiyle çağırınca içindeki değeri alırsın.

## Kutu oluşturmak

```js
const isim = "Bahadır";
const yas = 29;
```

Parçalar:

### `const` — kutu oluştur (değişmez)
`const`, "yeni bir kutu oluştur" demek. İngilizce "constant" (sabit) kelimesinden gelir.
Anlamı: bu kutuya bir kere değer koyarsın, sonra o kutunun değeri **değişmez**.

### `isim` — etiket (kutunun adı)
Kutuya verdiğin addır. Bu adı sen seçersin. Sonra `isim` yazdığın her yerde bilgisayar
kutunun içindeki değeri kullanır.

### `=` — "kutuya koy"
Bu işaret matematikteki "eşittir" **değildir**. Burada anlamı: "sağdaki değeri al, soldaki
kutuya koy." Yani `const yas = 29` şöyle okunur: "yas adında bir kutu oluştur, içine 29 koy."
Yön her zaman sağdan sola.

### Değer — kutunun içindeki şey
`"Bahadır"` bir string (metin), `29` bir sayıdır. Sayıyı tırnaksız yazarız; bunu sonraki
derste işleyeceğiz.

## Donanımda ne oluyor? (kutunun gerçek anlamı)

"Kutu" bir benzetme. Gerçekte ne olduğunu adım adım açalım, en küçük parçadan başlayarak.

### Bit — en küçük parça
Bilgisayarın tutabildiği en küçük bilgi bir **bit**'tir: ya `0` ya `1`. Donanımda bu, bir
transistörün durumudur: elektrik var (1) ya da yok (0). Açık/kapalı bir lamba gibi.

### Byte — 8 bit bir arada
8 bit yan yana gelince bir **byte** olur. 8 lamba, her biri açık ya da kapalı. Bir byte
toplam 256 farklı kombinasyon tutabilir (2 üzeri 8 = 256).

Örneğin `29` sayısı bir byte içinde şöyle yazılır:

```
0 0 0 1 1 1 0 1   =  16 + 8 + 4 + 1  =  29
```

(Her basamağın bir değeri var: sağdan sola 1, 2, 4, 8, 16, 32, 64, 128. Açık olanları toplarsın.)

### RAM — kutuların durduğu yer
Bilgisayarın **RAM**'i (çalışma belleği), uç uca dizilmiş milyarlarca byte'tan oluşan dev
bir sıradır. Her byte'ın bir **adresi** (sıra numarası) vardır: 0, 1, 2, 3, ... şeklinde.
Bir caddedeki numaralı evler gibi.

### `const yas = 29` yazınca tam olarak ne olur
1. JavaScript motoru (Node'un içindeki V8) RAM'den boş bir yer ayırır.
2. `29` sayısını o yere bit olarak yazar (yukarıdaki `00011101` gibi).
3. O yerin **adresini** `yas` etiketine bağlar.

Yani `yas` ismi aslında bir adresi işaret eder. İsim senin içindir; makine arka planda
sayısal adresi kullanır. `yas` yazdığında bilgisayar "o adrese git, oradaki bitleri oku"
yapar. "Kutu" dediğimiz şey işte budur: RAM'de ayrılmış, değerin bitlerini tutan bir yer.

> Not: JavaScript yüksek seviyeli bir dildir, bu detayları senden gizler. Gerçekte bir sayı
> 1 byte değil 8 byte (64 bit) yer tutar ve daha karmaşık saklanır. Ama mantık tam olarak budur:
> isim → adres → RAM'deki bitler.

## Kutuyu kullanmak: tırnak farkı

Bu ders dersin en kritik noktası:

```js
console.log(isim);     // kutunun İÇİNDEKİNİ yazdırır
console.log("isim");   // sadece i-s-i-m harflerini yazdırır
```

- Tırnaksız `isim` → bilgisayar "bu bir kutu adı" der, içindeki değeri (`Bahadır`) verir.
- Tırnaklı `"isim"` → bilgisayar "bu düz metin" der, harfleri olduğu gibi (`isim`) yazar.

## Yan not: yorum satırı
`//` ile başlayan satır bir **yorumdur**. Bilgisayar onu çalıştırmaz; sadece insan okusun
diye not düşersin.

## Görev

Adımları sırayla uygula:

1. `pratik.js` dosyasını aç, içini temizle.
2. `const` ile iki kutu oluştur: biri `isim` (kendi adın), biri `yas` (kendi yaşın, tırnaksız sayı).
3. Şu üç satırı ekle:

   ```js
   console.log(isim);
   console.log("isim");
   console.log(yas);
   ```

4. Kaydet ve çalıştır:

   ```
   node lessons/02-degiskenler/pratik.js
   ```

## Çalıştırmadan önce cevapla
Üç satırın her biri ekrana ne yazdırır? Üçünü tek tek tahmin et, sonra çalıştırıp karşılaştır.
Özellikle ikinci satır (`"isim"`) ile birinci satır (`isim`) arasındaki farkı açıkla.
