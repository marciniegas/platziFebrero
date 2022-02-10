
//Código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4 ;
}

//console.log("El perimetro del cuadrado es de: " + perimetroCuadrado +"cm");

function areaCuadrado(lado){
    return lado * lado;
}

//console.log ("El área del cuadrado es de: " + areaCuadrado +"cm^2");
console.groupEnd();


//Código del triangulo
 console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;


// console.log("los lados del triángulo miden: "
// + ladoTriangulo1
// + "cm, "
// + ladoTriangulo2
// + "cm, "
// + baseTriangulo
// + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
// console.log("El perimetro del triángulo es: " + perimetroCuadrado +"cm");


function areaTriangulo(base, altura){
    return (base * altura)/2;
} 
// console.log ("El área del triángulo es: " + areaTriangulo +"cm^2");
console.groupEnd();

//Código del Círculos//////////////////////////////////////////////////////
console.group("Círculos");
//Radio
// const radioCirculo = 4;
// console.log("El radio del Circulo es de: " + radioCirculo +"cm");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}
// console.log("El diametro del Circulo es de: " + diametroCirculo +"cm^2");

//Pi
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    return (radio*2) * PI;
} 
//console.log("La circunferencia del Circulo es de: " + circunferenciaCirculo  +"cm");

//ÁREA
function areaCirculo(radio){
    return (radio*radio)*PI;
}
//console.log("El area del Circulo es de: " + areaCirculo +"cm^2");

console.groupEnd();

//////////////////////HTML con JS////////////////////

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}
