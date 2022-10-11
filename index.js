(function(){

    "use strict";
    
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

    const pw1el = document.getElementById("pw1-el");
    const pw2el = document.getElementById("pw2-el");
    const btn = document.getElementById("generateButton");
    const pwdMsg = document.getElementById("copyMsg");

    btn.addEventListener('click', function (event){
        event.preventDefault;
        let userLength = document.querySelector("#passwordLength").value;
        pw1el.textContent=randomString(userLength);
        pw2el.textContent=randomString(userLength);
        pwdMsg.textContent="Click a password to copy it to the clipboard";
    });

    function randomString(length){
        let password = "";
        for (let i = 0; i < length; i++){
            let randomIndex = Math.floor(Math.random()*characters.length);
            password += characters[randomIndex];
        }
        return password;
    }

    // Task for later: refactor the event listeners below

    pw1el.addEventListener('click', function (event){
        event.preventDefault;
        if(pw1el.textContent){
            const cb = navigator.clipboard;
            cb.writeText(pw1el.innerText).then(() => alert('Text copied'));
        }
    });

    pw2el.addEventListener('click', function (event){
        event.preventDefault;
        if(pw2el.textContent){
            const cb = navigator.clipboard;
            cb.writeText(pw2el.innerText).then(() => alert('Pasword copied to clipboard'));
        }
    });

})();

