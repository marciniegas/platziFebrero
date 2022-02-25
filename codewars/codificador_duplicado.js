// El objetivo de este ejercicio es convertir una cadena en una nueva cadena donde cada carácter de la nueva cadena es "("si ese carácter aparece solo una vez en la cadena original, o ")"si ese carácter aparece más de una vez en la cadena original. Ignore las mayúsculas al determinar si un carácter es un duplicado.

// Ejemplos
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    let converti =word.toLowerCase();
    console.log(converti);
    let letras = converti.split ("");
    let nuevo="";
    
    for ( let i = 0; i < letras.length; i++) {
            let cantidad = 0;
            for ( let j = 0; j < letras.length; j++){
                (letras[i]===letras[j]) ? cantidad += 1 : cantidad = cantidad;
            }
            (cantidad > 1 )? nuevo=nuevo+")": nuevo=nuevo+"(";
           
    }
    return nuevo;
    // ...
}

//comunidad
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }