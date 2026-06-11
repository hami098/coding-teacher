# 03 — Veri Tipleri

## Fikir
Her değerin bir **tipi** vardır. Tip, "bu değer ne cinsten bir şey" demektir. Bilgisayar
bir değerle ne yapabileceğine onun tipine bakarak karar verir.

Geçen derste `yas` kutusuna `'29'` yazdın (tırnakla). Ekranda `29` göründü ama bu bir
**sayı değil, metindi**. Bu derste neden önemli olduğunu göreceğiz.

## Başlangıç için üç temel tip

### 1. string (metin)
Tırnak içindeki her şey. Harf, kelime, hatta rakam olabilir.
```js
"Bahadır"
"merhaba dünya"
"29"
```
`"29"` bir string'tir: içinde "2" ve "9" karakterleri vardır, sayı değildir.

### 2. number (sayı)
Tırnaksız yazılan sayı. Matematik yapabildiğin değer.
```js
29
3.14
-5
```

### 3. boolean (mantıksal)
Sadece iki değeri vardır: `true` (doğru) ya `false` (yanlış). Tırnaksız yazılır.
```js
true
false
```
Bunu 06. derste derinlemesine işleyeceğiz; şimdilik var olduğunu bil.

## Matematiksel `2` ile karakter `"2"` farkı (donanımda)

Ekranda ikisi de `2` görünür ama RAM'de bambaşka bitlerle saklanırlar.

**Sayı `2`** → bilgisayar bunu "iki adet" miktarı olarak saklar. Bir byte içinde:
```
0 0 0 0 0 0 1 0   =  2
```

**Karakter `"2"`** → bilgisayar harf ve karakterleri bir **tablo** ile saklar. Bu tabloda
(ASCII / Unicode) her karaktere bir numara verilmiştir. `"2"` karakterinin numarası **50**'dir.
Yani metindeki `"2"`, RAM'de 2 olarak değil, 50 olarak saklanır:
```
0 0 1 1 0 0 1 0   =  50
```

İki değer aynı görünür ama içlerindeki bitler farklı: `00000010` ile `00110010`. İşte bu
yüzden `"2"` ile matematik yapamazsın — içinde 2 miktarı değil, 50 numaralı karakter kodu
vardır. Sayı tipi miktarı tutar; string tipi karakter kodlarını tutar.

## İleri soru: "Peki sayı `50` nasıl saklanır? Aynı bitler değil mi?"

Evet, tam isabet. Sayı olarak `50` da bir byte içinde aynen böyle saklanır:
```
0 0 1 1 0 0 1 0   =  50   (sayı)
0 0 1 1 0 0 1 0   =  "2"  (karakter, kodu 50)
```

Bitler **birebir aynı**. O zaman bilgisayar hangisinin sayı `50`, hangisinin karakter `"2"`
olduğunu nereden biliyor? Cevap: **bitlerin kendi başına anlamı yoktur.** Anlamı veren şey
**tiptir**. Tip, "bu bitleri nasıl oku" talimatıdır. Aynı `00110010`:

- number tipiyle okunursa → `50` (miktar)
- string tipiyle okunursa → `"2"` (karakter)
- başka bir bağlamda → bir rengin parçası, bir ses örneği, bir komut olabilir

Bilgisayarın içinde her şey sadece bittir; anlamı, o bitleri hangi tiple yorumladığın belirler.

## İleri soru: "Bunu çok iyi bilen biri karakter koduyla matematik yapabilir mi?"

Evet, kesinlikle yapabilir — hatta sürekli yapılır. Karakter kodları da sonuçta sayıdır,
istersen onlarla işlem yaparsın:

- Rakam karakterini gerçek sayıya çevirmek: `"0"` karakterinin kodu 48'dir. Bir rakam
  karakterinin kodundan 48 çıkarırsan gerçek sayısını bulursun. `"2"` → 50 - 48 = 2.
- Büyük/küçük harf: `"A"` kodu 65, `"a"` kodu 97, arada hep 32 fark vardır. 32 ekleyip
  çıkararak harfin büyüğünü/küçüğünü hesaplayabilirsin.
- Şifreleme (Sezar şifresi): her harfin koduna sabit bir sayı eklersin, yazı şifrelenir.

JavaScript bu çevirmeleri yapacak araçlar verir (ileride göreceğiz):
```js
"2".charCodeAt(0)      // 50  -> karakterin kodunu verir
String.fromCharCode(50) // "2" -> koddan karakter üretir
Number("2")            // 2   -> metni sayıya çevirir
```

Yani sınır, dilin senden gizlediği bir kuraldır; donanım seviyesinde her şey sayı ve hepsiyle
işlem yapılabilir.

## Tipi öğrenmek: `typeof`

`typeof`, bir değerin tipini söyleyen bir araçtır. Önüne koyduğun değerin tipini bir string
olarak verir.

```js
console.log(typeof 29);        // number
console.log(typeof "29");      // string
console.log(typeof true);      // boolean
```

## Tip neden önemli: `+` işareti

`+` işareti, iki tarafın tipine göre **farklı davranır**:

- İki **sayı** ile: matematik yapar. `29 + 1` sonuç `30`.
- İki **metin** ile (ya da biri metinse): yan yana yapıştırır (buna **birleştirme** denir).
  `"29" + 1` sonuç `"291"`, çünkü `1` de metne çevrilip yapıştırılır.

Aynı `+` işareti, tipe göre bambaşka iş yapıyor. İşte bu yüzden bir değerin sayı mı metin
mi olduğunu bilmek zorundasın.

## Görev

Adımları sırayla uygula:

1. `pratik.js` dosyasını aç, içini temizle.
2. İki kutu oluştur:
   ```js
   const yasMetin = "29";
   const yasSayi = 29;
   ```
3. Şu dört satırı ekle:
   ```js
   console.log(typeof yasMetin);
   console.log(typeof yasSayi);
   console.log(yasSayi + 1);
   console.log(yasMetin + 1);
   ```
4. Kaydet ve çalıştır:
   ```
   node lessons/03-veri-tipleri/pratik.js
   ```

## Çalıştırmadan önce cevapla
Dört satırın her biri ne yazdırır? Dördünü tek tek tahmin et. Özellikle son iki satırda
(`yasSayi + 1` ve `yasMetin + 1`) sonuçların neden farklı olduğunu açıkla. Sonra çalıştır
ve tahminlerinle karşılaştır.

---

## İkinci Görev: Aynı bitler, farklı anlam (test)

Bu test, yukarıda anlattığımız "tip, bitlere anlam verir" fikrini elinle göreceğin yer.

Önce iki yeni araç:
- `"2".charCodeAt(0)` → bir karakterin **kodunu** verir. Sondaki `(0)`, "metnin ilk
  karakteri" demek (sayma 0'dan başlar; bunu Diziler dersinde derinleştireceğiz).
- `String.fromCharCode(50)` → bir **koddan karakter üretir**. `charCodeAt`'in tersi.

> Dikkat: `charCodeAt` **tek bir karakterin** kodunu verir, tüm metnin değil. Verdiğin sayı
> hangi pozisyona bakacağını söyler. Örneğin `"55"` iki karakterdir: pozisyon 0 = `"5"`,
> pozisyon 1 = `"5"`. Bu yüzden `"51"`, `"53"`, `"55"` hepsi `"5"` ile başladığından
> `charCodeAt(0)` üçünde de aynı kodu (`53`) verir. İkinci basamağı görmek için `charCodeAt(1)`.
>
> Rakam kodları: `"0"=48 "1"=49 "2"=50 "3"=51 "4"=52 "5"=53 "6"=54 "7"=55 "8"=56 "9"=57`

Adımları uygula:

1. `pratik.js` dosyasını aç, içini temizle.
2. Şu altı satırı yaz:
   ```js
   console.log("2" + 1);
   console.log(2 + 1);
   console.log("2".charCodeAt(0));
   console.log("0".charCodeAt(0));
   console.log("2".charCodeAt(0) - "0".charCodeAt(0));
   console.log(String.fromCharCode(50));
   ```
3. Kaydet ve çalıştır:
   ```
   node lessons/03-veri-tipleri/pratik.js
   ```

### Çalıştırmadan önce cevapla
Altı satırın her biri ne yazdırır? Tek tek tahmin et. Sonra şu soruları yanıtla:

1. 1. ve 2. satır neden farklı sonuç verdi? (Aynı `+`, aynı `1`.)
2. `"2"` karakterinin kodu kaç çıktı? Sayı `2` ile aynı mı?
3. 5. satır (`"2".charCodeAt(0) - "0".charCodeAt(0)`) neden `2` verdi? Bu, "karakteri gerçek
   sayıya çevirme" işleminin ta kendisi — açıkla.
4. 6. satır `50` kodundan ne üretti?

Bu testi bitirince, "aynı görünen ama farklı tipte" değerlerin neden farklı davrandığını
hem ekranda hem de mantıkta görmüş olacaksın.
