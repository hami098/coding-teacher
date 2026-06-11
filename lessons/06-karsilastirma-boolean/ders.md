# 06 — Karşılaştırma ve Boolean

## Fikir
Bazen "bu değer şuna eşit mi?", "bu sayı şundan büyük mü?" diye sormak istersin. Bu
soruların cevabı her zaman iki değerden biridir: **`true` (doğru)** ya da **`false`
(yanlış)**. Bu cevaba **boolean** denir (03. derste tanışmıştın).

Karşılaştırma yaparsın, sonuç bir boolean olur. Bir sonraki ders (`if`) bu boolean'lara
bakıp karar verecek. Yani bu ders kararların temelidir.

## Karşılaştırma işaretleri

```js
console.log(5 > 3);    // true   büyük mü
console.log(5 < 3);    // false  küçük mü
console.log(5 >= 5);   // true   büyük veya eşit mi
console.log(3 <= 2);   // false  küçük veya eşit mi
```

Her biri bir soru sorar, cevap `true` ya `false` olur.

## Eşitlik: `===` ve `!==`

Eşit mi diye sormak için **üç eşittir** kullanırsın: `===`. Eşit değil mi için `!==`.

```js
console.log(5 === 5);     // true   eşit
console.log(5 === 4);     // false  eşit değil
console.log(5 !== 4);     // true   "eşit değil" doğru
```

Dikkat: tek `=` "kutuya koy" demekti (atama). Karşılaştırma için **`===`** kullanılır.
İkisini karıştırma: `=` koyar, `===` sorar.

## En önemli kısım: `===` ile `==` farkı (tipe bağlı)

JavaScript'te iki çeşit eşitlik vardır:

- `===` (katı eşitlik) → hem **değere** hem **tipe** bakar. İkisi de aynı olmalı.
- `==` (gevşek eşitlik) → tipleri **görmezden gelir**, gizlice çevirip karşılaştırır.

```js
console.log(5 === 5);     // true
console.log("5" === 5);   // false  -> biri metin, biri sayı: tip farklı
console.log("5" == 5);    // true   -> == tipi yok sayar, "5"'i 5'e çevirir
```

03. dersi hatırla: `"5"` bir metin (karakter kodu), `5` bir sayı (miktar). `===` bu farkı
görür ve `false` der. `==` ise farkı gizler ve `true` der — bu çoğu zaman gizli hatalara
yol açar.

**Kural: her zaman `===` ve `!==` kullan.** `==` neredeyse hiç kullanılmaz. Profesyonel
kodda standart budur.

## Mantıksal işaretler: `&&`, `||`, `!`

Birden fazla soruyu birleştirmek için:

- `&&` (ve) → **ikisi de** doğruysa `true`.
- `||` (veya) → **en az biri** doğruysa `true`.
- `!` (değil) → doğruyu yanlışa, yanlışı doğruya çevirir.

```js
console.log(true && true);    // true   ikisi de doğru
console.log(true && false);   // false  biri yanlış, "ve" bozulur
console.log(false || true);   // true   en az biri doğru
console.log(!true);           // false  tersi
```

Gerçek örnek: bir sayı 18'den büyük **ve** 65'ten küçük mü?

```js
const yas = 30;
console.log(yas > 18 && yas < 65);   // true
```

Burada önce `yas > 18` (true) ve `yas < 65` (true) hesaplanır, sonra `&&` ikisini birleştirir.

## Görev

Adımları sırayla uygula:

1. `pratik.js` dosyasını aç, içini temizle.
2. Şu satırları yaz:
   ```js
   console.log(10 > 7);
   console.log(10 === 10);
   console.log("10" === 10);
   console.log("10" == 10);
   console.log(5 >= 5 && 2 < 1);
   console.log(5 >= 5 || 2 < 1);

   const yas = 30;
   console.log(yas > 18 && yas < 65);
   ```
3. Kaydet ve çalıştır:
   ```
   node lessons/06-karsilastirma-boolean/pratik.js
   ```

## Çalıştırmadan önce cevapla
1. `"10" === 10` ile `"10" == 10` neden farklı sonuç verir? (03. dersteki tip farkını kullan.)
2. `5 >= 5 && 2 < 1` neden `false`? `&&`'in kuralı neydi?
3. `5 >= 5 || 2 < 1` neden `true`? `||` ile `&&` farkı ne?
