// ROT13 es un cifrado de sustitución de letras simple que reemplaza una letra con la letra 13 después de ella en el alfabeto. ROT13 es un ejemplo del cifrado César.

// Cree una función que tome una cadena y devuelva la cadena cifrada con Rot13. Si hay números o caracteres especiales incluidos en la cadena, deben devolverse tal como están. Solo se deben cambiar las letras del alfabeto latino/inglés, como en la "implementación" original de Rot13.

function rot13(message){
    //message= message.toLowerCase();
      message = message.split("");
      let str =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
      let salida="";
      for(let i=0; i<message.length; i++){
        let may=message[i].toLowerCase();
          if (str.indexOf(may) == -1){
                salida+=message[i];
    
          }
          else {
        let pos= str.indexOf(message[i].toLowerCase());
          
        switch (message[i]){
            case message[i].toLowerCase():
                if(pos >= 13){
                  salida += str[pos-13];
                } else {
                  salida += str[pos+13];
                }
                break;
    
            case message[i].toUpperCase():
                
                if(pos >= 13){
                  salida += str[pos-13].toUpperCase();
                } else {
                  salida += str[pos+13].toUpperCase();
                }
                break;
    
            default:
        }     
        }
      }
      return salida
      //your code here
    }

    // comunidad
    function rot13(message) {
        var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
        return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
      }