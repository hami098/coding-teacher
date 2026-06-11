# 10 — Fonksiyonlar

## Fikir
Bir işi bir kez yazıp, ona bir **isim** verip, sonra istediğin kadar tekrar çağırmak
istersin. Buna **fonksiyon** denir: kod parçasını bir pakete koyar, girdi verir, çıktı
alırsın. Aslında bunu hep kullandın: `console.log()`, `charCodeAt()`, `push()` hepsi
fonksiyondur. Şimdi kendininkini yazacaksın.

## Fonksiyon tanımlamak

```js
function selamla(isim) {
  console.log(`Merhaba ${isim}!`);
}

selamla("Bahadır");   // Merhaba Bahadır!
selamla("Ada");       // Merhaba Ada!
```

Parçalar:
- `function` → "yeni bir fonksiyon tanımlıyorum" demek.
- `selamla` → fonksiyonun adı (sen seçersin).
- `(isim)` → **parametre**: fonksiyonun dışarıdan aldığı girdiye verilen yerel ad.
- `{ ... }` → **gövde**: çağrılınca çalışacak kod.

İki çeşit kelimeyi ayırt et:
- **parametre**: tanımdaki yer tutucu (`isim`).
- **argüman**: çağırırken verdiğin gerçek değer (`"Bahadır"`).

`selamla("Bahadır")` çağrıldığında, `isim` parametresi `"Bahadır"` olur ve gövde çalışır.

## Değer döndürmek: `return`

Yukarıdaki fonksiyon ekrana yazdı ama bir **sonuç geri vermedi**. Çoğu zaman fonksiyonun bir
değer **üretip sana geri vermesini** istersin. Bunun için `return` kullanırsın:

```js
function topla(a, b) {
  return a + b;
}

const sonuc = topla(3, 4);   // topla 7 döndürür, sonuc kutusuna konur
console.log(sonuc);          // 7
console.log(topla(10, 20));  // 30
```

- `return a + b` → "a + b'yi hesapla ve bu fonksiyonun **sonucu** olarak geri ver."
- `return` çalışınca fonksiyon **biter**; altındaki kod çalışmaz.
- Geri verilen değeri bir kutuya koyabilir (`const sonuc = ...`) ya da doğrudan kullanabilirsin.

`console.log` ile `return` farkı önemli: `console.log` sadece **ekrana yazar**, `return` ise
değeri **programa geri verir** ki onunla başka iş yapasın.

## Daha kısa yazım: ok fonksiyonu (arrow function)

Modern JavaScript'te fonksiyonlar sık sık şöyle de yazılır. Kendi projelerinde bunu çok
görürsün:

```js
const topla = (a, b) => {
  return a + b;
};

console.log(topla(3, 4));   // 7
```

`function` kelimesi yerine `=>` (ok) kullanılır ve fonksiyon bir değer gibi bir kutuya
atanır. Tek satır döndürüyorsan süslü parantezi ve `return`'ü bile atabilirsin:

```js
const kare = (x) => x * x;
console.log(kare(5));   // 25
```

İkisi de aynı işi yapar; ok fonksiyonu sadece daha kısadır.

## Görev

Adımları sırayla uygula:

1. `pratik.js` dosyasını aç, içini temizle.
2. Şu kodu yaz:
   ```js
   function selamla(isim) {
     return `Merhaba ${isim}!`;
   }

   function ciftMi(sayi) {
     return sayi % 2 === 0;
   }

   console.log(selamla("Bahadır"));
   console.log(ciftMi(10));
   console.log(ciftMi(7));

   const kare = (x) => x * x;
   console.log(kare(6));
   ```
3. Kaydet ve çalıştır:
   ```
   node lessons/10-fonksiyonlar/pratik.js
   ```

## Çalıştırmadan önce cevapla
1. `selamla("Bahadır")` ne döndürür? Bu sefer `console.log` fonksiyonun içinde değil, dışında
   — fark ne?
2. `ciftMi(10)` ve `ciftMi(7)` ne döndürür? Tip ne (07. ve 06. dersi düşün)?
3. `kare(6)` ne verir? Bu fonksiyonda neden `return` yazmadık?
