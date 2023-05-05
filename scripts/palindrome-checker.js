const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");


let userInput;

checkBtn.addEventListener("click", () => {
    let reverseInput = userInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(userInput != reverseInput) {
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
    }
    infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
});

txtInput.addEventListener("keyup", () => {
    userInput = txtInput.value.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
    if(userInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "Enter text or number";
    checkBtn.classList.remove("active");
});


//Lowercase the string and use the RegExp to remove unwanted characters from it. 
//Function defines 
