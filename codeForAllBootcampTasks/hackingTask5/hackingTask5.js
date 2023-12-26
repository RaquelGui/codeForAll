var loggedPasscodes = [
	[1, 4, 4, 2],
    [1, 2, 3, 1],
    [2, 2, 2, 1],
    [5, 5, 5, 5],
    [4, 3, 4, 3],
    [4, 1, 4, 8],
    [2, 6, 0, 8],
    [6, 2, 8, 1]
];

function getValidPassword(passcodes){
    for (let i = 0; i<passcodes.length; i++){
        const passcode = passcodes[i];
        if (passcode.every(digit => digit%2 === 0)){
            return passcode;
            
        }
    }return null;
}

var validPassword = getValidPassword(loggedPasscodes);
    console.log(validPassword);