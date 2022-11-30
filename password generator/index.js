

let passwordBoxOne = document.getElementById("passBoxOne");
let passwordBoxTwo = document.getElementById("passBoxTwo");
let passwordButton = document.getElementById("generateButton");

function generatePassword() {
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    let input1 = ''
    let input2 = ''
    for (let i = 0; i < 15; i++) {
        let randomPasswordOne = Math.floor(Math.random() * characters.length)
        let randomPasswordTwo = Math.floor(Math.random() * characters.length)
        input1 += characters[randomPasswordOne]
        input2 += characters[randomPasswordTwo]
    }
    passwordBoxOne.textContent = input1
    passwordBoxTwo.textContent = input2
}

function copyOne() {
    let copyText = document.getElementById("passBoxOne");
    navigator.clipboard.writeText(copyText.value);
    //Couldn't get these buttons to work :(
}

function copyTwo() {
    var copyTextTwo = document.getElementById("passBoxTwo");
    navigator.clipboard.writeText(copyTextTwo.value);
    
}
