# 04 — Metinler / Stringler

## Fikir
Programların çoğu metinle uğraşır: bir isim, bir mesaj, bir cümle kurmak. Bu derste
değişkenlerdeki değerleri metinlerle birleştirip cümle kurmayı öğreneceksin.

## Yol 1: `+` ile birleştirme (concatenation)

`+` işaretinin metinde "yapıştırma" yaptığını biliyorsun. Değişkenleri ve düz metni
yan yana yapıştırabilirsin:

```js
const isim = "Bahadır";
console.log("Merhaba " + isim + ", hoş geldin.");
```

Sonuç: `Merhaba Bahadır, hoş geldin.`

Dikkat: boşlukları sen koymalısın. `"Merhaba"` ile `isim` arasında boşluk yoksa kelimeler
birbirine yapışır. Bu yüzden `"Merhaba "` içinde sondaki boşluğa dikkat et.

Bu yöntem çalışır ama uzadıkça okunması zorlaşır: bir sürü tırnak ve `+` işareti.

## Yol 2: Şablon metni (template literal) — temiz yol

Çift tırnak yerine **ters tırnak** (`` ` ``) kullanırsın. Bu, klavyede genelde `1`
tuşunun solundadır. İçine değişkeni `${...}` yazarak gömersin (içeride değişken adı yazılır):

```js
const isim = "Bahadır";
console.log(`Merhaba ${isim}, hoş geldin.`);
```

Sonuç aynı: `Merhaba Bahadır, hoş geldin.`

Farkı gör: tek bir metin yazarsın, değişkenin geleceği yere `${isim}` koyarsın. Tırnak ve
`+` kalabalığı yok. Modern JavaScript'te neredeyse her zaman bu yöntem kullanılır; kendi
projelerinde de bunu çok görürsün.

`${...}` içine sadece değişken değil, hesap da koyabilirsin:

```js
const yas = 29;
console.log(`Seneye ${yas + 1} olacaksın.`);
```

Sonuç: `Seneye 30 olacaksın.` (Burada `yas + 1` sayı matematiğidir, çünkü `yas` bir sayı.)

## Metinle ilgili birkaç araç

Bir string'in kendine ait yetenekleri vardır (02. dersteki `araç.eylem()` kalıbı):

```js
const ad = "bahadır";

console.log(ad.length);          // 7  -> kaç karakter olduğunu verir
console.log(ad.toUpperCase());   // BAHADIR -> hepsini büyük harf yapar
console.log(ad.toUpperCase());   // ad değişmez; sana yeni bir metin verir
console.log(ad);                 // bahadır -> orijinal hâlâ aynı
```

- `.length` bir **sayıdır** (parantez yok, çünkü bir eylem değil bir bilgidir).
- `.toUpperCase()` bir **eylemdir** (parantez var). Orijinali değiştirmez; sana büyük
  harfli **yeni** bir metin döndürür.

## Görev

Adımları sırayla uygula:

1. `pratik.js` dosyasını aç, içini temizle.
2. Bir kutu oluştur: `const ad = "kendi adın";`
3. Aynı "Merhaba ... hoş geldin" cümlesini **iki yöntemle** yazdır:
   - bir kez `+` ile birleştirerek,
   - bir kez `` ` `` ters tırnak (template literal) ile.
4. Şu iki satırı da ekle:
   ```js
   console.log(ad.length);
   console.log(ad.toUpperCase());
   ```
5. Kaydet ve çalıştır:
   ```
   node lessons/04-metinler/pratik.js
   ```

## Çalıştırmadan önce cevapla
1. İki yöntem (`+` ve template literal) aynı çıktıyı mı verir?
2. `ad.length` kaç çıkar? (Adındaki harfleri say.)
3. `ad.toUpperCase()` çalıştıktan sonra `ad` değişkeni değişir mi, yoksa aynı mı kalır? Neden?
