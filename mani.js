let a = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];

let b = [];
let c = [];


for (let i = 0; i < a.length; i++) {
    let s = a[i].toLowerCase();  
    if (s.includes('n')) {
        b.push(a[i]);
    } else {
        c.push(a[i]);
    }
}




console.log( b,"n harif ishtrok etkan sozlar");
console.log( c,"n harif ishtrok etmakan sozlar");