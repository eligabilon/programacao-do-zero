var a = '';
var b = '';
var num = []; 

function sendChar(digit) {
    
    num.push(digit);

    if (num.length != 1) {
        a = '';
        document.getElementById("screen").innerHTML = a;
    }
    
    for(i=0; i<num.length; i++){
        a = a + num[i];
    }

    document.getElementById("screen").innerHTML = a;
}

function equalTo() {

}

function clear() {

}