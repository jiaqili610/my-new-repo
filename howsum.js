const howsum = (targetsum, numbers, memo={})=> {
    
    if (targetsum in memo) return memo[targetsum];
    if (targetsum ===0) return [];
    if (targetsum <0)   return null;

    for (let num of numbers) {
        const remainder = targetsum - num;

        const remainderresult = howsum(remainder, numbers, memo);
        
        if (remainderresult !== null){
            memo[targetsum] =  [ ...remainderresult, num ] ;
            return memo[targetsum]
        }
    }

    memo[targetsum] = null;
    return null;
};


console.log(howsum(7, [8, 3]));
console.log(howsum(7, [9, 3, 4, 7]));
console.log(howsum(300, [87, 14]));


/* great write a function that takes in a targetsum and an array of numbers as arguments
return how the combination leads to target sum

const howsum = (targetsum, numbers)=>{
    if (targetsum ===0) return [];
    if (targetsum <0)   return null;

    for (let num of numbers) {
        const remainder = targetsum - num;

        const remainderresult = howsum(remainder, numbers);
        
        if (remainderresult !== null){
            return [ ...remainderresult, num ] ;
        }
    }

    return null;
};


console.log(howsum(7, [2, 3]));
console.log(howsum(7, [5, 3, 4, 7]));
console.log(howsum(300, [7, 14]));


*/