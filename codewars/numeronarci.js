function narcissistic(value) {
    var valor=value;
// convertir numero a array
  let myFunc = num => Number(num);
  var intArr = Array.from(String(value), myFunc);
var n=0;

for (var i = 0; i < intArr.length ; i++) {

    n=n + Math.pow(intArr[i],intArr.length);
}

  (n == valor) ? console.log(true) :console.log(false);    
}

// Esta funcion compara el numero, ejemplo 153
// 1^3 + 5^3 +3^3=153

function narcissistic(value) {
    // convertir numero a array
      let myFunc = num => Number(num);
      var intArr = Array.from(String(value), myFunc);
    var n=0;
    
    for (var i = 0; i < intArr.length ; i++) {
    
        n=n + Math.pow(intArr[i],intArr.length);
    }
    if (n==value){
        return true;
    }
        else {return false; }
    
      // Code me to return true or false
    }

    ///hecho por la comunidad
    function narcissistic( value ) {
        return ('' + value).split('').reduce(function(p, c){
          return p + Math.pow(c, ('' + value).length)
          }, 0) == value;
      }