var k = 8, t = 80* 365 * 24 *3600, s = 600;

var C = t * s; //К-сть варіантів
var n = Math.round(Math.pow(C, (1 / k))); 

console.log('Кількість символів алфавіту становить', n);