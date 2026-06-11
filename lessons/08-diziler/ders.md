# 08 — Diziler / Arrays

## Fikir
Şimdiye kadar her kutuya **tek** bir değer koyduk. Ama çoğu zaman bir **liste** tutmak
istersin: alışveriş listesi, kullanıcılar, puanlar. Bunun için **dizi** (array) kullanırsın:
tek bir kutuda, sıralı birçok değer.

## Dizi oluşturmak

Köşeli parantez `[ ]` içine değerleri virgülle ayırarak yazarsın:

```js
const meyveler = ["elma", "armut", "kiraz"];
```

Tek bir kutu (`meyveler`) ama içinde üç değer, belli bir sırada.

## Bir elemana ulaşmak: index (sıra numarası)

Dizideki her elemanın bir **index**'i (sıra numarası) vardır ve **0'dan başlar**:

```js
const meyveler = ["elma", "armut", "kiraz"];

console.log(meyveler[0]);   // elma   -> ilk eleman
console.log(meyveler[1]);   // armut  -> ikinci eleman
console.log(meyveler[2]);   // kiraz  -> üçüncü eleman
```

03. dersteki `charCodeAt(0)`'ı hatırla: orada da sayma 0'dan başlıyordu. Aynı kural.

### Neden 0'dan başlıyor? (donanım)
02. dersi hatırla: bir dizi, RAM'de **uç uca dizili** elemanlardan oluşur. `meyveler[0]`
"başlangıç adresinden 0 adım ileri" demektir, yani ta kendisi. `meyveler[1]` "başlangıçtan
1 adım ileri" demektir. Index aslında **başlangıçtan kaç adım uzakta** sayısıdır. İlk eleman
0 adım uzakta olduğu için index'i 0'dır. Bu yüzden son elemanın index'i `uzunluk - 1` olur.

## Uzunluk: `.length`

```js
const meyveler = ["elma", "armut", "kiraz"];
console.log(meyveler.length);        // 3
console.log(meyveler[meyveler.length - 1]);   // kiraz -> son eleman
```

`length` eleman sayısıdır (3). Son elemanın index'i `length - 1` (yani 2) çünkü 0'dan başladık.

## Eleman eklemek / çıkarmak

```js
const sayilar = [10, 20];

sayilar.push(30);       // sona ekler -> [10, 20, 30]
console.log(sayilar);   // [ 10, 20, 30 ]

sayilar.pop();          // sondakini çıkarır -> [10, 20]
console.log(sayilar);   // [ 10, 20 ]
```

- `.push(x)` sona eleman ekler.
- `.pop()` sondaki elemanı çıkarır.

### "const" ama nasıl değişiyor?
İyi bir soru: `sayilar` `const` ile tanımlı ama `push` ile içeriği değişti. Çelişki yok.
`const`, **kutunun hep aynı diziyi göstermesini** kilitler (02. dersteki adres mantığı).
Yani `sayilar`'a yeni bir dizi atayamazsın, ama gösterdiği dizinin **içeriği** değişebilir.
Kutudaki adres sabit; o adresteki listenin elemanları değişebilir.

## Görev

Adımları sırayla uygula:

1. `pratik.js` dosyasını aç, içini temizle.
2. Şu kodu yaz:
   ```js
   const renkler = ["kırmızı", "yeşil", "mavi"];

   console.log(renkler[0]);
   console.log(renkler[2]);
   console.log(renkler.length);
   console.log(renkler[renkler.length - 1]);

   renkler.push("sarı");
   console.log(renkler);
   console.log(renkler.length);
   ```
3. Kaydet ve çalıştır:
   ```
   node lessons/08-diziler/pratik.js
   ```

## Çalıştırmadan önce cevapla
1. `renkler[0]` ve `renkler[2]` ne yazdırır?
2. `renkler[renkler.length - 1]` neden son elemanı verir? Burada `- 1` neden gerekli?
3. `push("sarı")`'dan sonra `length` kaç olur?
4. `renkler[3]`'ten önce ve sonra `push` farkı: ekleme yapmadan `renkler[5]` yazsaydın ne
   alırdın sence? (Tahmin et, sonra istersen dene.)
