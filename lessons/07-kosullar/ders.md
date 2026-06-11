# 07 — Koşullar (`if` / `else`)

## Fikir
Şimdiye kadar program hep yukarıdan aşağıya, her satırı çalıştırdı. Artık bilgisayar
**karar** verecek: "şu doğruysa bunu yap, değilse şunu yap." Bunun aracı `if`.

`if`, bir **boolean'a** bakar (06. ders): `true` ise içindeki kodu çalıştırır, `false` ise
atlar. Yani 06. dersteki karşılaştırmalar burada işe yarıyor.

## Temel yapı

```js
const yas = 20;

if (yas >= 18) {
  console.log("Girebilirsin.");
}
```

Parçalar:
- `if` → "eğer" demek.
- `( ... )` → parantezin içine **koşulu** yazarsın. Sonucu `true` ya `false` olmalı.
- `{ ... }` → süslü parantez bir **blok**tur: koşul doğruysa çalışacak kodu içine koyarsın.
  Bloğun içini bir-iki boşluk içeri yazarız (girinti), okunması kolay olsun diye.

`yas` 20 olduğu için `yas >= 18` → `true`, blok çalışır, ekrana `Girebilirsin.` yazılır.
`yas` 15 olsaydı koşul `false` olur, blok atlanır, hiçbir şey yazılmazdı.

## `else`: değilse

`else` ("değilse"), koşul `false` olduğunda çalışacak ikinci bir blok verir.

```js
const yas = 15;

if (yas >= 18) {
  console.log("Girebilirsin.");
} else {
  console.log("Henüz giremezsin.");
}
```

Burada koşul `false`, bu yüzden `if` bloğu atlanır ve `else` bloğu çalışır:
`Henüz giremezsin.` İkisinden **sadece biri** çalışır, ikisi birden asla.

## `else if`: birden fazla durum

İkiden fazla seçenek varsa `else if` ile zincir kurarsın. Bilgisayar yukarıdan aşağıya
bakar, **ilk doğru** olanı çalıştırır, gerisini atlar.

```js
const not = 75;

if (not >= 90) {
  console.log("Pekiyi");
} else if (not >= 75) {
  console.log("İyi");
} else if (not >= 50) {
  console.log("Geçer");
} else {
  console.log("Kaldı");
}
```

`not` 75: ilk koşul (`>= 90`) yanlış, ikinci koşul (`>= 75`) doğru → `İyi` yazılır ve
zincir orada biter. Alttakilere hiç bakılmaz.

## Sentez: çift mi tek mi

05. dersteki kalan `%` ile 07. dersteki `if`'i birleştirelim. Bir sayının 2'ye bölümünden
kalan 0 ise çift, değilse tek:

```js
const sayi = 7;

if (sayi % 2 === 0) {
  console.log("çift");
} else {
  console.log("tek");
}
```

Önce `sayi % 2` hesaplanır (7 için 1), sonra `1 === 0` sorulur (`false`), bu yüzden `else`
çalışır: `tek`.

## Görev

Adımları sırayla uygula:

1. `pratik.js` dosyasını aç, içini temizle.
2. Bir `sayi` kutusu oluştur (istediğin bir sayı), sonra çift/tek kontrolünü yaz:
   ```js
   const sayi = 10;

   if (sayi % 2 === 0) {
     console.log("çift");
   } else {
     console.log("tek");
   }
   ```
3. Altına bir de not değerlendirmesi ekle:
   ```js
   const not = 60;

   if (not >= 90) {
     console.log("Pekiyi");
   } else if (not >= 75) {
     console.log("İyi");
   } else if (not >= 50) {
     console.log("Geçer");
   } else {
     console.log("Kaldı");
   }
   ```
4. Kaydet ve çalıştır:
   ```
   node lessons/07-kosullar/pratik.js
   ```

## Çalıştırmadan önce cevapla
1. `sayi` 10 iken hangisi yazılır, neden? `sayi % 2 === 0` koşulu ne hesaplıyor?
2. `not` 60 iken hangi satır yazılır? Bilgisayar zincirde neden orada durur?
3. `not` değerini 95 yaparsan ne yazılır? Ya 40 yaparsan?

## Bonus (istersen)
`sayi` değerini birkaç kez değiştir (3, 8, 0, -4) ve her seferinde çıktının doğru çift/tek
dediğini gör. `0 % 2` kaç verir, sıfır çift mi tek mi?
