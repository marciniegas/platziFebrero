//extraer las propiedades de un objeto que no se a construido
const obj = {
    name: 'miguel',
    age: 28,
    country: 'COL',
};

let {name, ...all } = obj;
console.log(name, all);     //miguel {age: 28, country: 'COL'}

let {name, ...all } = obj;
console.log(all);           //{age: 28, country: 'COL'}

//añadir caracteristicas, unir elementos a un objeto
const obj = {
    name: 'Miguel',
    age: 28,
}

const obj1 = {
    ...obj,
    coutnry: 'COL',
}
console.log(obj1);



//////////
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ('Hello Word'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(Response => console.log(Response))
    .catch(error => console.log (error))
    .finally(() => console.log('Finalizo'))

    // necesitamos un valor de 0 a 9 de tenemos 4 valores, otro elemento 
    // de 0 a 9 de 2 valores, otro de 0 a 9 de 2 valores
    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regexData.exec('2018-04-20');
    const year = match[1];
    const month = match[2];
    const day = match[3];
    console.log(year, month, day);
    return year