// var obj = {
//     date: "2021-04-30 11:11:11",
//     flow: 5,
//     oxygen: 10
// };

// function k (key) { 
//     console.log(obj[key]);
// }
// k('flow');
// // console.log(Object.keys(obj));

var objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];

var result = objArray.map(a => (a.foo*10));

console.log(result)