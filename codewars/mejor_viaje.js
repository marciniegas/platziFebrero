// Descripción:
// John y Mary quieren viajar entre unos pueblos A, B, C... Mary tiene en una hoja de papel una lista de distancias entre estos pueblos. ls = [50, 55, 57, 58, 60]. John está cansado de conducir y le dice a Mary que no quiere conducir más que t = 174 milesy que solo visitará 3pueblos.

// ¿Qué distancias, por tanto, qué pueblos elegirán para que la suma de las distancias sea la mayor posible para complacer a María y Juan?

// Ejemplo:
// Con lista lsy 3 pueblos para visitar pueden hacer una elección entre: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

// Las sumas de las distancias son entonces: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

// La mayor suma posible teniendo en cuenta un límite de 174es entonces 173y las distancias de las 3 localidades correspondientes es [55, 58, 60].

// La función chooseBestSum(o choose_best_sumo... según el idioma) tomará como parámetros t(suma máxima de distancias, entero >= 0), k(número de pueblos a visitar, k >= 1) y ls(lista de distancias, todas las distancias son enteros positivos o cero y esta lista tiene al menos un elemento). La función devuelve la "mejor" suma, es decir, la mayor suma posible de kdistancias menores o iguales al límite dado t, si esa suma existe, o de lo contrario, cero, nulo, Ninguno, Nada, según el idioma. En ese caso con C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.

// Ejemplos:
// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

//comunidad
function chooseBestSum(t, k, ls) {
    let arr = [];  
      
    function rec(sum, ar, n) {
      if (n == 0) {
        arr.push(sum);
      } else {
        for (let i = 0; i < ar.length; i++) {
          rec(sum+ar[i], ar.slice(i+1), n-1);
        }
      }
    }
  
    rec(0, ls, k);
      
    var sol = arr.sort( (a, b) => b - a).find( a => a <= t);
    return typeof sol === 'undefined' ? null : sol;
  }

  //comunidad2
  function chooseBestSum(t, k, ls) {
    if(k == 0) {
      return 0;
    }
    if(t <= 0 || k < 0 || ls.length < k) {
      return null;
    }
    var best = 0;
    for(var i = 0; i < ls.length; i++) {
      var l = ls.slice();
      l.splice(i, 1);
      var v = ls[i], c = chooseBestSum(t-v, k-1, l);
      if(c != null && c+v > best && c+v <= t) {
        best = c+v;
      }
    }
    return best > 0 ? best : null;
  }