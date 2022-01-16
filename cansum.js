// memo version

const cansum = (targetsum, numbers, memo={}) => {

    if (targetsum in memo) return memo[targetsum];

    if (targetsum=== 0 )    return true;
    if (targetsum<0)        return false;

    for (let num of numbers) {
        const remainder = targetsum - num;
        if (cansum(remainder, numbers, memo) === true){
            memo[targetsum] = true;
            return true;
        }
    }

    memo[targetsum] = false;
    return false; // make sure all are tried in for loop before decide false
};

console.log(cansum(7,[2,3]))
console.log(cansum(302,[7,14]))

/*
slow version

const cansum = (targetsum, numbers) => {
    if (targetsum=== 0 )    return true;
    if (targetsum<0)        return false;

    for (let num of numbers) {
        const remainder = targetsum - num;
        if (cansum(remainder, numbers) === true){
            return true;
        }
    }

    return false; // make sure all are tried in for loop before decide false
};

console.log(cansum(7,[2,3]))
console.log(cansum(300,[7,14]))


*/ 