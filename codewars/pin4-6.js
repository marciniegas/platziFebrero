// comunidad

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }

  //pin de 4 o 6 digitos numeros enteros

  //funcion
  function validatePIN (pin) {
    let arr = pin.split('');
    var aprobado=0;
        if(arr.length==4 ){
          for(var i =0; i < 4; i++) {
             if(!isNaN(arr[i]) && arr[i]!=" "){
              aprobado+=1;
             }
        }
            if (aprobado==4){
                return true;
            }
            else {
              return false;
            }
        }
            if(arr.length==6 ){
          for(var i =0; i < 6; i++) {
             if(!isNaN(arr[i]) && arr[i]!=" "){
              aprobado+=1;
             }
        }
            if (aprobado==6){
                return true;
            }
            else {
              return false;
            }
        }
  
        else {
          return false
        }  
    //return true or false
  }