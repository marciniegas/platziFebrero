//realizar importacion de un elemento de forma dinamica cuando se haga un llamado, en este caso cuando se clickea un boton

const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});

//numero grande biginit
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//devolver una promesa despues que todas las demas promesas se resolvieron
const promise1 = new Promise ((resolve, reject) => reject ("reject"));
const promise2 = new Promise ((resolve, reject) => resolve ("resolve"));
const promise3 = new Promise ((resolve, reject) => resolve ("resolve 1"));

//promise1.all  va a ser rechazada sí alguna promesa no se cumple
Promise.allSettled([promise1, promise2, promise3]) //esperara que todas sean resueltas
    .then(Response => console.log (Response));


///// preguntar 
const fooo = null ?? 'String es nulo';
console.log (fooo);

// evitar que se rompa la aplicacion 
const user ={};
console.log(user.profile.email); //devuleve undifined