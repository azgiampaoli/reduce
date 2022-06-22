//Some todos os números de um array
const nums = [1,2,3,4,5];

function soma(nums){
   return  nums.reduce(function(prev, current){
        console.log({prev});
        console.log({current});

        return prev + current;
    })
}

console.log(soma(nums));
