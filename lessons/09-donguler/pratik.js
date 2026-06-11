for (let i= 0 ; i<5; i++) {
  console.log(i)
}


let i = 0;
let j = 10;

for ( ; i<5; i++) {
  console.log(i)
}

for ( ; i<7; i++, j--) {
  console.log(i,j)
}


const userRoles = { alice: 'admin', bob: 'editor' };
for (const [name, role] of Object.entries(userRoles)) {
  console.log(`${name} is an ${role}`);
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

const hayvanlar = ["kedi", "köpek", "kuş"];
for (let i = 0; i < hayvanlar.length; i++) {
  console.log(`${i+1}: ${hayvanlar[i]}`);
}

let sayac = 3;
while (sayac > 0) {
  console.log(sayac);
  sayac = sayac ;
}
console.log("bitti");