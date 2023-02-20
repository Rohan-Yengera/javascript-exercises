const removeFromArray = function(arr, ...args) {
    const newArr = [];
    arr.forEach((elem) => {
        if(!args.includes(elem)){
            newArr.push(elem);
        }
    })
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
