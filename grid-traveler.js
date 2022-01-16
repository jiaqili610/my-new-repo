const gridTraveler = (m,n, memo={}) => {
    
    const key = m + ',' + n ;
    if (key in memo) return memo[key];
    if (m===1 && n===1 ) return 1;
    if (m===0 || n===0 ) return 0;

    memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo);
    return memo[key];
};


console.log(gridTraveler(1,1));
console.log(gridTraveler(2,3));
console.log(gridTraveler(3,2));
console.log(gridTraveler(3,3));
console.log(gridTraveler(21,20));

// Alvin's Memoization Recipe

// 1. Make it work!
//      Visualise the problem as a tree
//      Implement the tree using recursion
//      Test it

// 2. Make it efficient!
//      add a memo object
//      add a basecase to return memo values
//      store return values into the memo
