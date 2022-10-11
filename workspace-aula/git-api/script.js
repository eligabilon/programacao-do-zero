let user = document.querySelector(".container-fluid form .mb-3 input");
let submitButton = document.querySelector(".container-fluid form .col-12");
let data = document.querySelector(".container-fluid main");

submitButton.addEventListener("click", findUserGit);

function findUserGit(event) {
    event.preventDefault();

    let fieldUser = manipulateField(user.value);
    
    axios
        .get(`https://api.github.com/users/${fieldUser}`)
        .then(function (response){
            data.innerHTML = "";
            mountResponse(response.data);
        })
        .catch(function(error){
            data.innerHTML = "";
            createLineHtml("Usuário não encontrado.");
        });
}

function manipulateField(field) {
    return field.trim();
}

function mountResponse(obj) { 
    createLineHtml(`Foto: ${obj.avatar_url}`);
    createLineHtml(`Id: ${obj.id}`);
    createLineHtml(`Login: ${obj.login}`);
    createLineHtml(`Nome: ${obj.name}`);
    createLineHtml(`Bio: ${obj.bio}`);
    createLineHtml(`${obj.location !== null ? "Localização: " + obj.location : ""}`);
}

function createLineHtml(text) {        
    let line = document.createElement("p");
    let tex = document.createTextNode(text);
    line.appendChild(tex);
    data.appendChild(line);
}
