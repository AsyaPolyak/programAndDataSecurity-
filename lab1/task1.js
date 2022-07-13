// JavaScript source code
var n = 250; //символов
var k = 8; //символов
var s = 600; //паролів/сек
var m = 7; //паролів
var v = 3; //сек(пауза)

var c =Math.pow(n, k);
var t = c / s;
Tem =( t * v ) / ( m );
Tem_1 = ( t + Tem );
Tem_2 = ( ( Math.pow(n, k)) / (s) ) + ( ( Math.pow(n, k)) / (s) ) * (v / m);

var min = Tem_2 / 60;
var hour = min / 60;
var day =
    Math.floor(hour / 24) + 
   ' днів, ' + Math.floor(hour % 24) +
   ' годин, ' + Math.floor(min % 60) +
   ' хвилин, ' + Math.floor(Tem_2 % 60)+
   ' секунд.';

console.log(" Рішення: ", day);