function getText() {
    var str=document.getElementById("txtAreain").value;
     swoper(str);
}


function clearText() {
    document.getElementById("txtAreain").value ='';
}

function copyText() {
    /* Get the text field */
    var copyText = document.getElementById("txtAreaout");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}

function swoper(str) {
    let cars =str;
    var s = [
        "й","ц","у","к","е","н","г","ш","щ","з","х","ъ",
        "ф","ы","в","а","п","р","о","л","д","ж","э",
        "я","ч","с","м","и","т","ь","б","ю"
    ];

    var r = [
        "q","w","e","r","t","y","u","i","o","p","\\[","\\]",
        "a","s","d","f","g","h","j","k","l",";","'",
        "z","x","c","v","b","n","m",",","\\."
    ];

    var symbols = [
        "!","@","#","%","^","&","*","(",")","_","=","$",
        "?",";","№"," ","`","~",">","<","₴","+","'",
        "1","2","3","4","5","6","7","8","9","0"
    ];

    let text = "";
    let rtext= "";
    for (let i = 0; i < cars.length; i++) {
        if (symbols.includes(cars[i])){
            text+= cars[i];
            rtext+= cars[i];
        }
        else if (cars[i] == cars[i].toUpperCase()) {
            text+= cars[i].toLowerCase();
            rtext+= s[r.indexOf(cars[i].toLowerCase())].toUpperCase();

        }
        else if (cars[i] == cars[i].toLowerCase()){
            text+= cars[i];
            rtext+= s[r.indexOf(cars[i])];

        }  
    }

    document.getElementById("txtAreaout").innerHTML = rtext;
}