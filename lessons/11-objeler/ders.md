# 11 — Objeler / Objects

## Fikir
Dizi (08. ders) sıralı bir listedir: eleman 0, eleman 1... Ama bazen elemanları numarayla
değil, **isimle** tutmak istersin. Bir kişiyi düşün: adı, yaşı, şehri var. Bunları tek bir
kutuda, **etiketli** biçimde tutmak için **obje** kullanırsın.

Obje = isimli (etiketli) değerlerin grubu. Senin Vue projelerindeki "data", JSON dosyaları,
API cevapları hep objedir.

## Obje oluşturmak

Süslü parantez `{ }` içine `anahtar: değer` çiftleri yazarsın:

```js
const kisi = {
  ad: "Bahadır",
  yas: 29,
  sehir: "İstanbul",
};
```

- Sol taraf (`ad`, `yas`, `sehir`) → **anahtar** (key): etiket.
- Sağ taraf (`"Bahadır"`, `29`) → **değer** (value): o etiketin içeriği.
- Çiftler virgülle ayrılır.

Dizide sıra önemliydi; objede sıra önemli değil, **isim** önemli.

## Değere ulaşmak: nokta veya köşeli parantez

```js
console.log(kisi.ad);        // Bahadır   -> nokta ile
console.log(kisi.yas);       // 29
console.log(kisi["sehir"]);  // İstanbul  -> köşeli parantez ile (anahtar string olarak)
```

02. dersteki `araç.eylem` kalıbındaki noktayı hatırla: nokta "buna ait" demekti. `kisi.ad`,
"kisi objesine ait `ad` değeri" demek. İki yazım da aynı işi yapar; genelde nokta kullanılır.

## Değer değiştirmek ve eklemek

```js
const kisi = { ad: "Bahadır", yas: 29 };

kisi.yas = 30;          // var olanı değiştir
kisi.meslek = "yazılımcı";   // yeni anahtar ekle
console.log(kisi);      // { ad: 'Bahadır', yas: 30, meslek: 'yazılımcı' }
```

`const` olmasına rağmen içeriği değişebilir — sebebi 08. derste dizilerde anlattığımızla
aynı: `const` kutuyu (adresi) kilitler, içeriği değil.

## Objeyi gezmek: `for...in`

09. derste `for...of`'u dizinin **değerleri** için kullandık. Bir objenin **anahtarları**
üzerinde gezmek için `for...in` vardır:

```js
const kisi = { ad: "Bahadır", yas: 29, sehir: "İstanbul" };

for (const anahtar in kisi) {
  console.log(anahtar, kisi[anahtar]);
}
// ad Bahadır
// yas 29
// sehir İstanbul
```

Her turda `anahtar` sıradaki **key**'i alır (`"ad"`, `"yas"`, `"sehir"`). Değeri almak için
`kisi[anahtar]` yazarsın.

Neden `kisi.anahtar` değil de `kisi[anahtar]`? Çünkü `anahtar` bir **değişken**. `kisi.anahtar`
yazarsan bilgisayar gerçekten `"anahtar"` adlı bir key arar (öyle bir key yok). `kisi[anahtar]`
ise değişkenin **içindeki** ismi (`"ad"` gibi) kullanır. Değişkenle erişimde köşeli parantez
şart.

İki döngüyü karıştırma:
- `for...of` → **değerler**, diziler/metinler için.
- `for...in` → **anahtarlar**, objeler için.

## Anahtarları/değerleri dizi olarak almak: `Object.keys`, `Object.values`

Bazen objenin anahtarlarını ya da değerlerini bir **dizi** olarak istersin (sonra 12. dersteki
`map`/`filter` ile işlemek için):

```js
const kisi = { ad: "Bahadır", yas: 29 };

console.log(Object.keys(kisi));     // [ 'ad', 'yas' ]
console.log(Object.values(kisi));   // [ 'Bahadır', 29 ]
```

> Dikkat: `for...in` dizilerde de çalışır ama index'leri **metin** olarak verir ve sırası
> garanti değildir; bu yüzden diziler için `for...of` / `forEach` kullan, objeler için
> `for...in` / `Object.keys`.

## Diziyle obje birlikte: gerçek dünya

Asıl güç, dizi ve objeyi birleştirince ortaya çıkar: **obje dizisi**. Gerçek programların
verisi genelde böyle durur.

```js
const kullanicilar = [
  { ad: "Bahadır", yas: 29 },
  { ad: "Ada", yas: 22 },
  { ad: "Can", yas: 35 },
];

console.log(kullanicilar[0].ad);    // Bahadır
console.log(kullanicilar[1].yas);   // 22
```

`kullanicilar[0]` ilk objeyi verir, `.ad` o objenin adını verir. Index (dizi) ve nokta
(obje) yan yana kullanılır.

## İç içe veri ve iç içe döngü

Gerçek veri genelde katman katmandır: bir **obje**nin içinde bir **array**, onun içinde
**objeler**, onların içinde yine **array**. Örnek:

```js
const sirket = {
  ad: "İncir Studio",
  calisanlar: [
    { ad: "Bahadır", roller: ["admin", "developer"] },
    { ad: "Ada", roller: ["designer"] },
    { ad: "Can", roller: ["editor", "tester", "developer"] },
  ],
};
```

Katmanlar: `sirket` (obje) → `calisanlar` (array) → her eleman (obje) → `roller` (array).

Bunu gezmek için döngüleri iç içe koyarsın. **Altın kural: her katmanda tipe göre döngü
seç** — dizi ise `for...of`, obje ise `for...in`.

### `for...of` içinde `for...of` (dizi içinde dizi)

```js
for (const calisan of sirket.calisanlar) {   // dış: çalışan dizisi -> of
  console.log(calisan.ad);
  for (const rol of calisan.roller) {         // iç: roller dizisi -> of
    console.log(`  - ${rol}`);
  }
}
```

Dış döngü her çalışanı gezer; her çalışanın içinde, iç döngü onun rollerini gezer.

### `for...of` içinde `for...in` (dizi içinde obje)

Senin sorduğun "for-of içinde for-in" tam olarak budur ve geçerlidir:

```js
for (const calisan of sirket.calisanlar) {   // dış: dizi -> of
  for (const anahtar in calisan) {            // iç: obje -> in
    console.log(`${anahtar}: ${calisan[anahtar]}`);
  }
}
```

Dış döngü diziyi (çalışanları) gezer; iç döngü her çalışan **objesinin anahtarlarını**
(`ad`, `roller`) gezer. Yani istediğin kadar iç içe koyabilirsin; sadece her seviyede doğru
döngüyü seç.

### Daha temiz: `Object.entries` + `for...of`

`for...in` yerine `Object.entries` ile anahtar ve değeri aynı anda alabilirsin (bunu sen
zaten denemiştin):

```js
for (const calisan of sirket.calisanlar) {
  for (const [anahtar, deger] of Object.entries(calisan)) {
    console.log(`${anahtar} = ${deger}`);
  }
}
```

## Görev

Adımları sırayla uygula:

1. `pratik.js` dosyasını aç, içini temizle.
2. Şu kodu yaz:
   ```js
   const kitap = {
     baslik: "Yüzüklerin Efendisi",
     yazar: "Tolkien",
     sayfa: 1200,
   };

   console.log(kitap.baslik);
   console.log(kitap.yazar);
   console.log(`${kitap.baslik} - ${kitap.sayfa} sayfa`);

   kitap.sayfa = 1216;
   kitap.dil = "Türkçe";
   console.log(kitap);
   ```
3. Kaydet ve çalıştır:
   ```
   node lessons/11-objeler/pratik.js
   ```

## Çalıştırmadan önce cevapla
1. `kitap.baslik` ve `kitap.yazar` ne yazdırır?
2. Üçüncü satır (template literal) tam olarak ne yazar?
3. Son `console.log(kitap)`'ta obje nasıl görünür? `sayfa` kaç olur, `dil` var mı?
