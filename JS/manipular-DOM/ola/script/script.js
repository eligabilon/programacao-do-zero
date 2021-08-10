// window.alert("Olá");

var input = document.getElementById("nome");
console.log(input)

var inputs = document.getElementsByClassName("nome")
console.log(inputs)

var input_query = document.querySelector("#app input#nome");
console.log(input_query.value)

var button = document.querySelector("#app button");

button.addEventListener("click", function () {
    alert("Olá " + input_query.value);
});