const reverseString = function(string) {
    const arrStr = string.split("");
    let modStr = '';
    for(let i=arrStr.length-1; i>=0; i--){
        modStr= modStr.concat(arrStr[i]);
    }
    return modStr;
};

// Do not edit below this line
module.exports = reverseString;
