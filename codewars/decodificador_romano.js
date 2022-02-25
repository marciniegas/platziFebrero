// Cree una función que tome un entero positivo como su parámetro y devuelva una cadena que contenga la representación en números romanos de ese entero.

// Los números romanos modernos se escriben expresando cada dígito por separado, comenzando con el dígito más a la izquierda y omitiendo cualquier dígito con un valor de cero. En números romanos, 1990 se representa: 1000=M, 900=CM, 90=XC; resultando en MCMXC. 2008 se escribe como 2000=MM, 8=VIII; o MMVIII. 1666 utiliza cada símbolo romano en orden descendente: MDCLXVI.

// Ejemplo:

// solution(1000); // should return 'M'
// Ayuda:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(number){
    let a = number.split("");
    let salida="";
      let total=[];
      let i=0;
    let num=[1,2,3,4,5,6,7,8,9];
    let rnum=["I","V","X","L","C","D","M"];
    
    
    for (let j=0; j<a.length; j++){
      ///// cambiar
        switch(j){
              case 0:
                i=0;
                break;
  
              case 1:
                i=2;
                break;
  
              case 2:
                i=4;
                break;
  
              case 3:
                i=6;
                break;
        }
              switch ( a[a.length-j-1] ) {
                case '1':
                salida=salida+rnum[i];
                break;
                
                case '2':
                salida=salida+rnum[i]+rnum[i];
                break;
                
                case '3':
                salida=salida+rnum[i]+rnum[i]+rnum[i];
                break;
                
                case '4':
                salida=salida+rnum[i]+rnum[i+1];
                break;
                
                case '5':
                salida=salida+rnum[i+1];
                break;
                
                case '6':
                salida=salida+rnum[i+1]+rnum[i];
                break;
                
                case '7':
                salida=salida+rnum[i+1]+rnum[i]+rnum[i];
                break;
                
                case '8':
                salida=salida+rnum[i+1]+rnum[i]+rnum[i]+rnum[i];
                break;
                
                case '9':
                salida=salida+rnum[i]+rnum[i+2];
                break;
                
                default:
                
            } 
              /////end cambiar
      
     total.unshift(salida);
  
    }
      let invertir=total.shift();
  
      function reverse (str) {
      if (str === "") {
          return "";
      } else {
          return reverse(str.substr(1)) + str.charAt(0);
      }
  }
    // convert the number to a roman numeral
      return reverse(invertir)
  }

  //comunidad
  function solution(number){
    // convert the number to a roman numeral
  var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  
  var ans = '';
  while(number>0){
      for(a in roman){ 
          //console.log('p: ',roman[a]);
         // console.log('a: ',a);
          console.log('number: ',number);
          if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
              
      }
  }
  return ans;
  }
  