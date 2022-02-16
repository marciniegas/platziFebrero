// devolver la clave y los valores de una matrix
const data = {
    frontend: 'Miguel',
    backend: 'Isable',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//devuelve los valores de un objeto a un arreglo
const data = {
    frontend: 'Miguel',
    backend: 'Isable',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);


//anteponer o agregar cadena vacio o elementos a un string
const string = 'hello';
console.log(string.padStart(8,'hi ')); //agregar inicio
console.log(string.padEnd(12, ' miguel')) //agregar final

///
const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve ('Hello Worold'), 3000) //tiempo
        : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld(); //esperar
    console.log(hello);
}

helloAsync();


/////
const anotherFuncion = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }   catch (error) {
        console.log(error);
    }
};

anotherFuncion();