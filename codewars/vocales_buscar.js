function getCount(str) {
    //var str="miguel";
      var vowelsCount = 0;
      const vocales =["a","e","i","o","u"];
        let arr = str.split(''); 
          console.log(arr);
      for (var i = 0; i < arr.length ; i++) {
          for (var j = 0; j < vocales.length ; j++) {
          (vocales[j] === arr[i]) ? vowelsCount= vowelsCount+=1 : console.log(""); ; 
          }
      }
      // enter your majic here
     return vowelsCount;
        }

        ////Comunidad
        function getCount(str) {
            return (str.match(/[aeiou]/ig)||[]).length;
          }