// ¡Suficiente es suficiente!
// Alice y Bob estaban de vacaciones. Ambos tomaron muchas fotos de los lugares en los que han estado y ahora quieren mostrarle a Charlie toda su colección. Sin embargo, a Charlie no le gustan estas sesiones, ya que el motivo suele repetirse. No le gusta ver la torre Eiffel 40 veces. Les dice que solo se sentará durante la sesión si muestran el mismo motivo como máximo N veces. Afortunadamente, Alice y Bob pueden codificar el motivo como un número. ¿Puedes ayudarlos a eliminar números de manera que su lista contenga cada número solo hasta N veces, sin cambiar el orden?

// Tarea
// Dada una lista lst y un número N, cree una nueva lista que contenga cada número de lst como máximo N veces sin reordenar. Por ejemplo, si N = 2, y la entrada es [1,2,3,1,2,1,2,3], toma [1,2,3,1,2], suelta el siguiente [1,2 ] ya que esto llevaría a 1 y 2 a estar en el resultado 3 veces, y luego tomar 3, lo que lleva a [1,2,3,1,2,3].

function deleteNth(arr,n){
    //let arr2 = arr.split("");
    let nuevo ="";
    let devolver = [];
    let numero =0;
    let contador =0;
    for ( let i = 0; i<arr.length; i++){
        nuevo = nuevo + arr[i];
            numero =new RegExp(`${arr[i]}`,"g");
        console.log('numero: ', numero);
            contador =(nuevo.match(numero).length);
        console.log('contador: ', contador);
            if (contador <= n){
                devolver.push( arr[i]);
            } 
        
    }
    return (devolver);
    // ...
}

//comunidad

    function deleteNth(arr,x) {
        var cache = {};
        return arr.filter(function(n) {
        cache[n] = (cache[n]||0) + 1;
        return cache[n] <= x;
        });
    }