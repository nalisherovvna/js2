function min(a,b,d) {
    let c;
    c = Math.min(a,b,d);
    alert("kiritgan uchta sonni kichigi = " + c);
}

let birinchi = Number(prompt("birinchi sonni kiriting..."));
let ikkinchi = Number(prompt("ikkinchi sonni kiritng..."));
let uchinchi = Number(prompt("uchinchi sonni kiritng..."));
min(birinchi,ikkinchi,uchinchi);