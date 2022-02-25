// En este kata, debe escribir un método que doble una matriz determinada de números enteros por el medio x veces.

// Un ejemplo dice más que mil palabras:

// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]

// A little visualization (NOT for the algorithm but for the idea of folding):

//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\          
//                     4/            4|          4\      
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*


// Fold 2-times:
// [1,2,3,4,5] -> [9,6]

function foldArray(array, runs){
    //funcion invertir
      let arm=array;
           function invertir (a){
            let b=[];
            let atam= a.length;
              for ( let i=0; i<atam; i++){
                  b.push(a[atam-i-1]);
              }  return b
              }
    ///
                for ( let i =0; i<runs; i++){
                  let cantidad=arm.length
                                    
                  if(cantidad %2 == 0){
                      let n= (arm.length)/2;
                    let array2=invertir(arm);
                    array2 = array2.splice(0, n);                  
                    arm=arm.splice(0, n);
                      for( let j=0; j<n; j++){
                      arm[j]=arm[j] + array2[j];
                    }                  
                      } else {
                      let n= ((arm.length)/2)-0.5;
                      let array2=invertir(arm);
  
                       array2 = array2.splice(0, n);
                    
                    arm=arm.splice(0, n+1);
                    
                    for( let j=0; j<n; j++){
                      arm[j]=arm[j] + array2[j];
                    }
                  }                  
               
                }
     return arm
    
  }

  //comunidad
  function foldArray(a, n) {
    const r = [], c = a.slice();
    while (c.length) r.push(c.pop() + (c.shift() || 0));
    return n - 1 ? foldArray(r, n - 1) : r;
  }