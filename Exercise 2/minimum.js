function min(number1,number2){
    if(number1==number2){
        return number1 || number2;
    }else if (number1 < number2){
        return number1;
    }else {
        return number2;
    } 
}

console.log(min(3,4));