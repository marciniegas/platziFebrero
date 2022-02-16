//permite devolver una matriz con su submatriz
let arr = [1,2,3, [4,5,6, [7,8,9]]];

console.log(arr.flat())     //[1, 2, 3, 4, 5, 6, Array(3)]
console.log(arr.flat(2))    //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//permite mapear cada elemente y aplicar una funcion aplanarlo

let arr = [1,2,3,4,5];
console.log(arr.flatMap(value => [value, value *2])); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// eliminar espacios blancos de un string
let hello = '   hello World       ';
console.log(hello.trimStart()); //elimina espacios al inicio
console.log(hello.trimEnd()); //elimina espacios al final
console.log(hello.trim()); // elimina espacion al inicio y al final

//enviar error
try {

} catch {
    error
}

//transformar clave valor a un objeto
let entries = [["name", "miguel"], ["age", 32]]; //{name: 'miguel', age: 32}

console.log(Object.fromEntries(entries));

// objeto simbolo
let mySimbl = `My symbol`;
let symbl = Symbol(mySimbl);
console.log(symbl.description);