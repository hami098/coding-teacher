# 09 — Döngüler / Loops

## Fikir
Aynı işi defalarca yapmak istediğinde kodu kopyalayıp yapıştırmazsın. **Döngü** kurarsın:
"şu işi şu kadar kez tekrarla" dersin. Özellikle dizilerle (08. ders) birlikte çok güçlü.

## `for` döngüsü

En çok kullanılan döngü. Üç parçası vardır:

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Parantezin içinde noktalı virgülle ayrılmış üç bölüm var:

1. `let i = 0` → **başlangıç**: bir sayaç oluştur, 0'dan başlat. (Bir kez çalışır.)
2. `i < 5` → **koşul**: her turdan önce kontrol edilir. `true` olduğu sürece döngü devam eder.
3. `i++` → **artış**: her turun sonunda çalışır. `i++`, `i = i + 1` demektir (05. ders).

Akış şöyle: i=0 (0<5 doğru → yazdır 0, i 1 olur) → i=1 (yazdır 1, i 2) → ... → i=4 (yazdır 4,
i 5 olur) → i=5 (5<5 yanlış → dur). Çıktı: 0, 1, 2, 3, 4.

`i` neden `let`? Çünkü her turda değeri **değişiyor**. Değişen değer = `let` (05. ders).

## Diziyi döngüyle gezmek

Döngü ile bir dizinin tüm elemanlarına index'leyerek ulaşırsın:

```js
const renkler = ["kırmızı", "yeşil", "mavi"];

for (let i = 0; i < renkler.length; i++) {
  console.log(renkler[i]);
}
```

Burada `i` 0'dan `renkler.length`'e (3) kadar gider. Her turda `renkler[i]` farklı elemanı
verir: `renkler[0]`, `renkler[1]`, `renkler[2]`. Koşulu `i < renkler.length` yazdık çünkü
son geçerli index `length - 1`'dir (08. ders).

## Daha temiz yol: `for...of`

Index'le uğraşmadan, doğrudan elemanları gezmek istersen:

```js
const renkler = ["kırmızı", "yeşil", "mavi"];

for (const renk of renkler) {
  console.log(renk);
}
```

`for (const renk of renkler)` şöyle okunur: "renkler dizisindeki **her bir** eleman için, ona
`renk` de ve bloğu çalıştır." Index yok, daha okunaklı. Sadece elemanları gezmek yetiyorsa
bunu tercih et.

> Not: Bir de `for...in` vardır ama o objelerin **anahtarları** içindir, diziler için değil.
> Onu 11. derste (Objeler) göreceğiz. Diziler için `for...of` kullan.

## `while` döngüsü (kısa bilgi)

`for` belli sayıda tekrar içindir. Bir **koşul** doğru olduğu sürece tekrar etmek istersen
`while` kullanırsın:

```js
let sayac = 3;
while (sayac > 0) {
  console.log(sayac);
  sayac = sayac - 1;
}
console.log("bitti");
```

Koşul `sayac > 0` doğru olduğu sürece döner: 3, 2, 1, sonra `sayac` 0 olunca koşul yanlış,
döngü biter, `bitti` yazılır. Dikkat: koşulu bir gün yanlış yapacak bir şey (burada
`sayac = sayac - 1`) olmazsa döngü **sonsuza kadar** çalışır.

## Görev

Adımları sırayla uygula:

1. `pratik.js` dosyasını aç, içini temizle.
2. Şu kodu yaz:
   ```js
   for (let i = 1; i <= 5; i++) {
     console.log(i);
   }

   const hayvanlar = ["kedi", "köpek", "kuş"];
   for (let i = 0; i < hayvanlar.length; i++) {
     console.log(`${i}: ${hayvanlar[i]}`);
   }

   for (const hayvan of hayvanlar) {
     console.log(hayvan);
   }
   ```
3. Kaydet ve çalıştır:
   ```
   node lessons/09-donguler/pratik.js
   ```

## Çalıştırmadan önce cevapla
1. İlk döngü hangi sayıları yazdırır? Koşul `i <= 5` (küçük veya eşit), `i < 5` olsaydı ne
   değişirdi?
2. İkinci döngüde `${i}: ${hayvanlar[i]}` her turda ne yazar? (Template literal'i hatırla, 04. ders.)
3. Üçüncü döngü (`for...of`) ile ikincisi aynı hayvanları mı yazdırır? Fark nerede?

## Bonus (istersen)
05. dersteki `%` ile 07. dersteki `if`'i birleştir: 1'den 10'a kadar döngü kur, her sayı için
çift mi tek mi yazdır.
