// Aşağıya kendi kodunu yaz.

const ahmet = 'Ahmet';
console.log(((x)=>ahmet)());


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