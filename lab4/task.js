function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
console.log("Обмін ключами по Діффі-Хеллману");
var R=7;
var N = 127;
var Rx, R1, R2, Code1, Code2, xx, yy, i  ;
var Rx =R;
    xx = randomInteger(1, 100);
    console.log("given: ", xx);
    //Rx = R;
    for (var i = 2; i<=xx ; i++){
    Rx = Rx * R;
    R1 = Rx *(Math.abs(N));
    //console.log("R1=", R1);
    }

    yy = randomInteger(1, 100);
    console.log("given: ", yy);
    
    Rx = R1;
    for (var i=2; i<=yy; i++) {
    Rx = Rx * R1;
    Code2 = Rx*(Math.abs(N));//формула з завдання
    console.log("Data_set2: ", Code2);
    }
    Rx =R;
    for (var i = 2; i<= yy ; i++) {
        Rx = Rx * R;
        R2 = Rx*(Math.abs(N)); //формула з завдання

        Rx =R2;
        for(i =2; i<= xx; i++ ){
            Rx = Rx * R2;
            Code1 =Rx*(Math.abs(N));
            console.log("Data_set1: ", Code1);
        }
       
}
