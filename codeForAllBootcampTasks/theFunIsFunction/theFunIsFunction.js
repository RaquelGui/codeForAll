var add = function(operand1, operand2){
    return operand1 + operand2;
};

var calculate = function (operand1, operand2, operation){
    var result = operation(operand1, operand2);
    console.log(result);
};

var multiply = function (operand1, operand2){
    return operand1 * operand2;
};

calculate(2,2,add);
calculate(3,3,multiply);