window.onload = function () {

    var titulo = document.getElementById("titule")
    titulo.style.backgroundColor = "white"
/////////////////////////////////////////////////////
    var texto = document.getElementById("lorem")
    texto.style.backgroundColor = "black"
    texto.style.color = "chartreuse"
    texto.style.textAlign = "center"
////////////////////////////////////////////////////
    var corpo = document.getElementById("corpo")
    corpo.style.backgroundColor = "black"
////////////////////////////////////////////////////
    var botao = document.getElementById("botao")
botao.onclick = function() {myFunction()};

function myFunction(){
    alert("Inscrição concluida com sucesso!!")
}


}

