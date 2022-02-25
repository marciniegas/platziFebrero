// Descripción:
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum [1, 2, 3] 4 === (0, 2)

function twoSum(numbers, target) {
    let n=numbers.length;
    for (let i=0; i<n ; i++){
      let index1;
      let index2;
        if(numbers.indexOf(target-numbers[i],1) == true){
       index1=numbers.indexOf(target-numbers[i]);
       index2 =numbers.indexOf(target-numbers[index1],1);
        }
        else {
           index1=numbers.indexOf(target-numbers[i]);
           index2 =numbers.indexOf(target-numbers[index1]);
        }
        ;
        if (index2 != -1){
              
          let salida= [index1, index2];
          return salida.sort();
        }
              
    }
      
    // ...
  }

  // comunidad
  function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}