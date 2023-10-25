//1-vazifa
let ism = prompt("hurmatli foydalanuvchi ismingizni kiriting");

let ismKotta = ism.toUpperCase();
let bYear = prompt("tug'ilgan yilingizni kiriting");
let bMonths = prompt("tug'ilgan oyingizni kiriting masalan:09");
let bday = prompt("tug'ilgan kuningizni kiriting masalan:09");
let time = prompt("hozirgi vaqtni(soat) kiriting");
let hozir = Date.now();

let kiritilgan = new Date(bYear, bMonths - 1, bday).getTime();
let yaxlidYear = parseInt((hozir-kiritilgan)/1000/60/60/24/365.25);
let yaxlidMonths = parseInt(((hozir-kiritilgan)/1000/60/60/24)/12);
let yaxlidbday = parseInt(((hozir-kiritilgan)/1000/60/60/24));
let yaxlidTime = parseInt((hozir - kiritilgan)/1000/60/60);
let javob = alert('Hurmatli' + ' ' + ismKotta + ' ' + 'SIZ' + ' ' + yaxlidYear + ' ' + 'yil' + ' ' + yaxlidMonths + ' ' + 'oy' + ' ' + yaxlidbday + ' ' + 'kun' + ' ' + yaxlidTime + ' ' + 'soat' +  ' ' +'yashabsiz');

// 2-vazifa
//consolga mevalar
let arr = ["banan", "olma", "nok"];
console.log(arr);

// meva oxiriga qo'shish
arr.push("olcha");
console.log(arr);

// meva boshidan bitta o'chsin ,consolga chiqsin
arr.shift();
console.log(arr);
