# 05 — Sayılar ve Matematik

## Fikir
Sayılarla dört işlem ve birkaç özel işlem yapabilirsin. Bu derste matematik işaretlerini,
işlem sırasını ve çok kullanılan bir işlemi (kalan/`%`) öğreneceksin. Ayrıca bir değişkenin
değerini **değiştirmeyi** (`let`) göreceksin.

## Matematik işaretleri (operatörler)

```js
console.log(10 + 3);   // 13  toplama
console.log(10 - 3);   // 7   çıkarma
console.log(10 * 3);   // 30  çarpma  (yıldız işareti)
console.log(10 / 3);   // 3.3333333333333335  bölme
```

İki not:
- Çarpma `*` ile yapılır, `x` harfiyle değil.
- Bölme tam sonuç vermeyebilir: `10 / 3` ondalıklı çıkar. JavaScript sayıları küsuratı da
  tutar.

## Kalan: `%` (modulo)

`%` işareti bölmeden kalanı verir. "10'u 3'e böl, kalan kaç?"

```js
console.log(10 % 3);   // 1   (10 = 3*3 + 1, kalan 1)
console.log(12 % 4);   // 0   (tam bölünür, kalan 0)
console.log(7 % 2);    // 1   (tek sayı)
console.log(8 % 2);    // 0   (çift sayı)
```

`%` çok işe yarar. En sık kullanımı: bir sayı **çift mi tek mi**? Bir sayının 2'ye bölümünden
kalan 0 ise çifttir, 1 ise tektir. Bunu ileride sürekli kullanacaksın.

## İşlem sırası ve parantez

Matematikteki gibi: önce çarpma/bölme, sonra toplama/çıkarma. Sırayı değiştirmek için
parantez kullanırsın.

```js
console.log(2 + 3 * 4);     // 14  -> önce 3*4=12, sonra +2
console.log((2 + 3) * 4);   // 20  -> önce 2+3=5, sonra *4
```

Parantez, "burayı önce hesapla" demektir.

## Değeri değiştirmek: `let`

Şimdiye kadar `const` kullandık: değeri **değişmez**. Bir kutunun değerini sonradan
değiştirmek istersen `let` kullanırsın.

```js
let sayac = 0;
sayac = sayac + 1;   // sağ taraf önce hesaplanır: 0 + 1 = 1, sonra kutuya konur
console.log(sayac);  // 1
sayac = sayac + 1;   // 1 + 1 = 2
console.log(sayac);  // 2
```

`sayac = sayac + 1` satırını şöyle oku: "sağdaki `sayac + 1`'i hesapla, sonucu tekrar
`sayac` kutusuna koy." (Yön sağdan sola — 02. dersteki `=` kuralı.)

`const` ile bunu yapamazsın: `const` bir kutuya yeniden değer atamaya çalışırsan program
hata verir. Kural: değişmeyecekse `const`, değişecekse `let`.

## Görev

Adımları sırayla uygula:

1. `pratik.js` dosyasını aç, içini temizle.
2. Şu satırları yaz:
   ```js
   console.log(10 % 3);
   console.log(8 % 2);
   console.log(7 % 2);
   console.log(2 + 3 * 4);
   console.log((2 + 3) * 4);

   let puan = 10;
   puan = puan + 5;
   console.log(puan);
   ```
3. Kaydet ve çalıştır:
   ```
   node lessons/05-sayilar/pratik.js
   ```

## Çalıştırmadan önce cevapla
1. İlk üç satır (`%`) ne verir? `8 % 2` ile `7 % 2` farkı sana sayının çift/tek olduğunu
   nasıl söyler?
2. `2 + 3 * 4` ile `(2 + 3) * 4` neden farklı çıkar?
3. `puan` sonunda kaç olur? `puan = puan + 5` satırı tam olarak ne yapıyor?
