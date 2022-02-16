function newFunction(name, age, country) {
    var name = name || 'Miguel';
    var age = age || 28;
    var country = country || "COL";
    console.log(name, age, country);
}
//es6
function newFunction2(name = 'Miguel', age = 28, country = "COL"){
    console.log(name, age, country)
};
newFunction2();
newFunction2("Ricardo", 25, "COL");

//////////////////
let hello ="Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//////////////////
let lorem = "Habia una vezz un pajarito desparchado \n"
+ "otra frase epica";
console.log(lorem);
//es6
let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica`;
console.log(lorem2);

//////////////////
let person = {
    'name' : 'Oscar',
    'age' : 32,
    'country' : 'COL'
}
console.log(person.name, person.age, person.country);
//se6
let { name ='Miguel', age = 28, country = 'COL' } = person;
console.log(name, age, country);

//////////////////
let team1 = ['Miguel', 'Angel', 'Arciniegas'];
let team2 = ['Daniela', 'Alexandra', 'Caceres'];

let education = ['David', ...team1, ...team2];
console.log(education);

//////////////////
{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Local Let'
    console.log(globalLet);
}

console.log(globalVar);

//////////////////
const a = 'b';
a = 'a'; //fail const
console.log(a);


//////////////////
let name = 'Miguel';
let age = 28;

obj = {name: name, age: age};
//se6
obj2 = {name, age};
console.log(obj, obj2);

//////////////////
const names = [
    {name: 'Miguel', age: 28},
    {name: 'Angel', age: 29},
]

let listOfNames = names.map(function(item) {
    console.log(item.name)
})
//se6
let listOfNames2 = names.map(item => console.log(item.name));

//////////////////
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey!')
        }
        else {
            reject('Ups!')
        }
    });
}

helloPromise()
.then(Response => console.log(Response))
.catch(error => console.log(error));

//////////////////
class calculator {
    constructor() {
        this.valueA = 0;
        this.ValueB = 0;
    }
    sum(valueA, ValueB){
        this.valueA = valueA;
        this.ValueB = ValueB;
        return this.valueA + this.ValueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//////////////////importar
import { hello } from './module';
hello();

//////////////////generator
function* helloWorlds () {
    if(true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'Wold';
    }
};

const generatorHello = helloWorlds();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)