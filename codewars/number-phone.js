function createPhoneNumber(numbers){
    var numerito="";
        for(var i =0; i < 10; i++) {
        
        if(numbers[i] < 10 && numbers[i] >= 0 && numbers[i] - Math.floor(numbers[i]) == 0 ) {
            switch (i) {
                case 0:
                    numerito=(`(${numerito}${numbers[i]}`);
                    break;
                case 2:
                    numerito=(`${numerito}${numbers[i]}) `);
                    break;
    
                case 5:
                    numerito=(`${numerito}${numbers[i]}-`);
                    break;    
                default:    
                    numerito=(`${numerito}${numbers[i]}`);
            }
                           
        }
    
            else{
    
            console.log("error");
            numerito="";
            
            }
        }
        console.log(numerito);
    }
    // crea un numero aleatoreo al ingresarle una cadena 
    // ejemplo: numbers[1, 2, 3, 4, 5, 6, 7, 8, 9, 0] ==> "(123) 456-7890"

    //comunidad
    function createPhoneNumber(numbers){
        var format = "(xxx) xxx-xxxx";
        
        for(var i = 0; i < numbers.length; i++)
        {
          format = format.replace('x', numbers[i]);
        }
        
        return format;
      }