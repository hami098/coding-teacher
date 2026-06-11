# 12 — Dizi Metotları (`map`, `filter`, `find`)

## Fikir
09. derste diziyi `for` döngüsüyle gezdin. Çok sık yapılan üç iş vardır: (1) her elemanı
dönüştürmek, (2) bazı elemanları seçmek, (3) bir elemanı bulmak. JavaScript bunlar için hazır
**dizi metotları** verir. Hepsi içine bir **fonksiyon** alır (10. ders) — bu yüzden bu ders
fonksiyonlardan sonra geldi.

Bu metotlar döngünün yaptığını daha kısa ve okunaklı yazar. Kendi projelerinde bunları her
yerde göreceksin.

## `forEach`: her eleman için bir şey yap

Döngünün en yakın karşılığı. Diziyi gezer, her eleman için verdiğin fonksiyonu çağırır.

```js
const renkler = ["kırmızı", "yeşil", "mavi"];

renkler.forEach((renk) => {
  console.log(renk);
});
```

`(renk) => { ... }` bir ok fonksiyonudur (10. ders). `forEach` her turda sıradaki elemanı bu
fonksiyona `renk` olarak verir. Bir şey **döndürmez**, sadece çalıştırır.

## `map`: her elemanı dönüştür, YENİ dizi al

`map`, her elemana bir fonksiyon uygular ve sonuçlardan **yeni bir dizi** üretir. Orijinali
değiştirmez.

```js
const sayilar = [1, 2, 3, 4];

const kareler = sayilar.map((x) => x * x);

console.log(kareler);   // [ 1, 4, 9, 16 ]
console.log(sayilar);   // [ 1, 2, 3, 4 ]  -> orijinal aynı
```

Her eleman için fonksiyon çalışır, dönen değerler yeni dizide toplanır. `map` "her birini
şuna çevir" demektir.

## `filter`: koşula uyanları seç, YENİ dizi al

`filter`, her eleman için bir **koşul** (boolean döndüren fonksiyon) çalıştırır. Sadece
`true` dönenleri yeni diziye alır.

```js
const sayilar = [1, 2, 3, 4, 5, 6];

const ciftler = sayilar.filter((x) => x % 2 === 0);

console.log(ciftler);   // [ 2, 4, 6 ]
```

Her eleman için `x % 2 === 0` sorulur (06. + 05. ders). `true` olanlar (2, 4, 6) kalır,
gerisi elenir. `filter` "şu koşula uyanları ayıkla" demektir.

## `find`: koşula uyan İLK elemanı bul

`filter` tüm uyanları dizi olarak verir; `find` ise sadece **ilk uyanı** verir (dizi değil,
tek eleman). Hiçbiri uymazsa `undefined` döner.

```js
const kullanicilar = [
  { ad: "Bahadır", yas: 29 },
  { ad: "Ada", yas: 22 },
  { ad: "Can", yas: 35 },
];

const bulunan = kullanicilar.find((k) => k.yas > 30);

console.log(bulunan);   // { ad: 'Can', yas: 35 }
```

Her obje için `k.yas > 30` sorulur; ilk `true` veren (Can) döner ve arama orada biter.
Burada 08 (dizi), 10 (fonksiyon) ve 11 (obje) derslerini aynı anda kullandın.

## Görev

Adımları sırayla uygula:

1. `pratik.js` dosyasını aç, içini temizle.
2. Şu kodu yaz:
   ```js
   const sayilar = [3, 8, 12, 5, 20, 7];

   const ikiKati = sayilar.map((x) => x * 2);
   console.log(ikiKati);

   const buyukler = sayilar.filter((x) => x > 7);
   console.log(buyukler);

   const ilkBuyuk = sayilar.find((x) => x > 7);
   console.log(ilkBuyuk);

   const isimler = ["ada", "can", "bahadır"];
   const buyukHarf = isimler.map((ad) => ad.toUpperCase());
   console.log(buyukHarf);
   ```
3. Kaydet ve çalıştır:
   ```
   node lessons/12-dizi-metotlari/pratik.js
   ```

## Çalıştırmadan önce cevapla
1. `map` ve `filter` arasındaki temel fark ne? Çıktılarının uzunluğunu karşılaştır.
2. `buyukler` (filter) ile `ilkBuyuk` (find) neden farklı türde sonuç verir? Biri dizi, biri
   tek değer — neden?
3. Son `map` (`toUpperCase`) ne üretir? Orijinal `isimler` değişir mi (04. dersi hatırla)?
