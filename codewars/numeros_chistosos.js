function digPow(n, p){
  
    let myFunc = num => Number(num);
    var intArr = Array.from(String(n), myFunc);
    var sumatoria=0;
    for (var i = 0; i < intArr.length ; i++) {
      sumatoria=sumatoria + Math.pow(intArr[i],p+i) ;
      
    }
    if((sumatoria/n)-Math.floor(sumatoria/n) == 0){
        return sumatoria/n;
    }
      else {
          return -1;
      }
    // ...
  }

  //ejemplos
    // digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
    // digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
    // digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
    // digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51


    //Comunidad
    function digPow(n, p) {
        var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
        return x % n ? -1 : x / n
      }