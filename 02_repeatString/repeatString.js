const repeatString = function(string, num) {
    
    let concatString = '';
    if(num<0){
        concatString='ERROR';
        return concatString;
    }
    for(let i=0; i<num; i++){
        concatString = concatString.concat(string);
        
    }
    return concatString;
};

// Do not edit below this line
module.exports = repeatString;
