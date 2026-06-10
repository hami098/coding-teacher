# 01 — Konsola Yazdırma

## Fikir
Bir program, bilgisayarın yukarıdan aşağıya, tek tek çalıştırdığı talimatlar listesidir.

## Komut: `console.log`

```js
console.log("Merhaba — bilgisayar beni dinliyor.");
```

Bu satır dört parçadan oluşur. Hepsinin bir sebebi var; hiçbiri rastgele değil.

### `console` — araç
`console`, JavaScript'in sana hazır verdiği bir **araçtır**. Görevi: program çalışırken
yazıların görüneceği ekranı temsil etmek. "Console" İngilizce'de "kontrol paneli / mesaj
ekranı" demek (kontrol odasındaki panel gibi). Sen yaratmadın; JavaScript ortamı (Node,
tarayıcı) bu aracı senin için baştan hazır koyuyor. Onu bir alet kutusu gibi düşün.

### `.` (nokta) — "şuna ait"
Nokta "buna ait olan / bunun içindeki" demektir. `console.log`, "console aracına ait olan
`log` yeteneği" anlamına gelir. Televizyonun açma düğmesi gibi: `televizyon.ac`. Nokta,
bir aracı onun bir yeteneğine bağlar.

### `log` — yapılacak iş (fonksiyon)
`log`, `console` aracının içinde duran bir **eylemin adıdır**. İngilizce "to log" =
"kaydetmek, deftere yazmak" demek (geminin seyir defteri "log book" gibi). Yani
`console.log` kelime kelime "bunu konsola kaydet / ekrana yaz" demektir. Bu ismi
JavaScript'i yapan kişiler seçti — uydurma değil, anlamı olan bir seçim.

### `( )` — "şimdi yap" ve girdiyi ver
Bir ismin arkasındaki parantez "bu eylemi şimdi çalıştır" demektir. `log` tek başına
sadece bir yeteneğin adıdır; `log("metin")` yazınca o yetenek **gerçekten çalışır**.
Parantezin içine koyduğun şey, o eyleme verdiğin **girdidir** — yani yazdırılmasını
istediğin şey. Bir fonksiyona verilen bu girdiye **argüman** denir.

### `"metin"` (tırnak) — düz metin
Tırnak, içindeki şeyin komut değil **düz metin** olduğunu söyler. Tırnak içindeki metne
**string** denir. `"log"` yazsan bu sadece l-o-g harfleridir; tırnaksız `log` ise bir
komuttur. Tırnak, bilgisayarın ikisini karıştırmamasını sağlar.

### `;` — talimat bitti
Bir talimatın bittiğini gösterir, cümle sonundaki nokta gibi.

### Genel kalıp: `araç.eylem(girdi)`
Bu kalıbı bir kez kavrarsan JavaScript'in yarısını çözersin:

```
console . log ( "Merhaba" )
  araç    eylem    girdi
```

Gerçek hayattan aynısı: `yazıcı.yazdır("rapor")` → `yazıcı` araç, `yazdır` eylem,
`"rapor"` girdi. `console.log("Merhaba")` da birebir böyle okunur:
"Ey console, `log` eylemini çalıştır; yazdıracağın şey de şu metin: Merhaba."

Bu isimleri değiştiremezsin (tam olarak `console.log` yazmak zorundasın), çünkü bunlar
JavaScript motorunun anladığı ortak kelimelerdir — tıpkı bir dildeki kelimeler gibi.

## Görev

Adımları sırayla uygula:

1. `pratik.js` dosyasını aç.
2. Dosyadaki mevcut satırı sil.
3. Tam olarak iki satır yaz. Şu kalıbı kullan, tırnak içlerini kendi bilgilerinle doldur:

   ```js
   console.log("buraya adını yaz");
   console.log("buraya yaşını yaz");
   ```

4. Dosyayı kaydet.
5. Terminalde şu komutu çalıştır:

   ```
   node lessons/01-konsola-yazdirma/pratik.js
   ```

## Beklenen çıktı

İki satır görmelisin: önce adın, sonra yaşın. Örnek:

```
Bahadır
29
```

## Çalıştırmadan önce cevapla

Üstteki `console.log` mu önce ekrana yazılır, alttaki mi? Sebebini bir cümleyle açıkla. Sonra çalıştır ve gerçek sonucu bildir.
