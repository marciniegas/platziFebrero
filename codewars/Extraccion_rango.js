// Descripción:
// Un formato para expresar una lista ordenada de números enteros es usar una lista separada por comas de

// enteros individuales
// o un rango de enteros indicado por el entero inicial separado del entero final en el rango por un guión, '-'. El rango incluye todos los números enteros en el intervalo, incluidos ambos extremos. No se considera un rango a menos que abarque al menos 3 números. Por ejemplo "12,13,15-17"
// Complete la solución para que tome una lista de números enteros en orden creciente y devuelva una cadena con el formato correcto en el formato de rango.

// Ejemplo:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list){
    let ans ='';
    let cue=0;
    for(let i=0; i<list.length; i++){
      if(list[i] == list[i+1]-1){
          if(cue == 0){
              if(i==0){
              ans+=list[i]; 
              }
              else{
              ans+=',' + list[i];   
              }
          }
          cue++;
      } else {
          console.log('cue: ',cue)
           if(cue >= 2){
            ans += '-'+list[i];
          } else {
               if(i==0){
              ans+=list[i]; 
              } else {
            ans += ','+list[i];
               }
          }
        
        cue=0;
      }
    }
    return ans
   // TODO: complete solution 
  }

  //comunidad

  function solution(individualIntegers) {
    return individualIntegers
      .reduce(splitIntoRanges, [])
      .map(convertToRange)
      .join(",");
  }
  
  function splitIntoRanges(ranges, number) {
    if (!ranges.length) {
      ranges.push([number]);
      return ranges;
    }
  
    var lastRange = ranges[ranges.length - 1];
    var lastNumber = lastRange[lastRange.length - 1];
  
    number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
    return ranges;
  }
  
  function convertToRange(range) {
    return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
  }