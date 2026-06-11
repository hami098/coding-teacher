// Aşağıya kendi kodunu yaz.
const kisi = {
  ad: "Bahadır",
  yas: 29,
  sehir: "İstanbul",
};

console.log(kisi.ad);        // Bahadır   -> nokta ile
console.log(kisi.yas);       // 29
console.log(kisi["sehir"]);  // İstanbul  -> köşeli parantez ile (anahtar string olarak)


const object1 = {
  key0: "value0",
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
object1.new1 = "asdf";
console.log(object1);