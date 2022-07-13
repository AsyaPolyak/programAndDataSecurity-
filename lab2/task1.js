var str = ' поляк анастасія віталіївна ';

function reverseString(str) {
  
  return str.split(" ").reverse().join("");
    
  }
function reverseStr(str){
  var a = "";
  for (i = 0; i < str.length; i++){
     a += str[(str.length - 1) - i];
  }
  return a.split(" ").join("");
}
/*console.log(reverseStr(str));*/
var arr = [];
var reverse = reverseStr(str);
for (var i = 0; i < reverse.length; i+=5) {
    arr.push(reverse.slice(i, i + 5));
    
}

console.log(arr.join(' '));