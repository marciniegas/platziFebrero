function order(words){
    let arr = words.split(' '); 
    var posicion = 0;
    let ordenar =[];
    var mejora="";
    
    for(var i = 0; i < arr.length; i++) {
        posicion=i;
       for(var j = 0; j < arr.length; j++){
            if(arr[j].includes(posicion+1)){
                ordenar.push(arr[j]);
            }
        }
    }
    //console.log(ordenar);
        mejora = ordenar.join(" ");
        console.log(mejora);
      // ...
      // ...order("n9ueve 7siete oc8ho 1uno tr3  cin5co cu4tro seis6 d2os");
    }

    