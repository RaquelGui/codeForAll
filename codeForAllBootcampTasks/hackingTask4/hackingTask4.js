var password = ["a", "-", "~","1","a","/","~","A", "7", "/", "C"];

function extractPassword(password){
    var newPassword = [];
    var arrayLength = password.length;
    
    for (var i = 0; i < arrayLength; i++){
        var j = password[i];
        
        if (("a" <= j && j <="z") || ("A" <= j && j <="Z") || ("0"<=j && j<= "9")){
            newPassword.push(j);
        }
    }
    return newPassword.join("");
    
}

console.log (extractPassword(password));
