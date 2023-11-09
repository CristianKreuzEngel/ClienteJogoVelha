// Função POST
function fazPost(url, body){
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));

    request.onload = function(){

    }

    return request.responseText;
};

// Captura o valor do campo input
function logar () {
    event.preventDefault();
    let url = "";
    let name = document.getElementById("name").value;
    console.log('teste');

    body = {
        "name": name
    }
};
