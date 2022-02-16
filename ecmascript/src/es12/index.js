//reemplaza y devuelve un nuevo strin
var palabras = "JavaScrip es mamonsito, pero asi se crea el futuro";

const replacePalabras = palabras.replace("JavaScrip", "Python");
palabras = palabras.replace("JavaScrip", "C++");    //replace reemplaza la primera coincidencia
console.log(replacePalabras);
console.log(palabras);

let numeros = "****";
numeros = numeros.replaceAll("*", 4); //replaceAll reemplaza en todas las coincidencias
console.log(numeros);

//metodos privados, añadir prefijo y no puede ser accedido
class Message {
    show(val){
        console.log(val);
    };
}

const message = new Message();
message.show('Hola!');

//esta publico, ahora lo volveremos privado
class Message {
    #show(val){
        console.log(val);
    };
    get #add(val){
       ... 
    }
}

const message = new Message();
message.show('Hola!');

//objeto global que va a sere un array de promesas, capturando la primera respuesta
// any devuelve la primera resolve 
// all devuelve siempre y cuando todas sean correctas
// allsettled devuelve todas, siempre y cuando se cumplan
const promise1 = new Promise ((resolve, rejact) => rejact("1"));
const promise2 = new Promise ((resolve, rejact) => resolve("2"));
const promise3 = new Promise ((resolve, rejact) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

    /////////
    let isTrue = true;
    let isFalse = false;
    console.log(isTrue &&= isFalse);

    let isTrue = true;
    let isFalse = false;
    console.log(isTrue ||= isFalse);

    let isTrue = undefined;
    let isFalse = false;
    console.log(isTrue ??= isFalse);