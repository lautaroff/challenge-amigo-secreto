// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let lista_amigos = [];
function agregarAmigo() {
    let amigo =document.getElementById("amigo").value;
    if (amigo == " "){
        alert("Ingrese un nombre valido")
        return;
    }else if (lista_amigos.includes(amigo)){
        alert("El amigo ya se encuentra en la lista")
    }else{
        lista_amigos.push(amigo);
    }  
    mostrarAmigos(); 
    limpiarCampo();
}
function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < lista_amigos.length; i++){
        lista.innerHTML += `<li>${lista_amigos[i]}</li>`;
    }
}
function limpiarCampo(){
    document.getElementById("amigo").value = "";
}


function sortearAmigo(){
    let amigo = lista_amigos[Math.floor(Math.random() * lista_amigos.length)];
    document.getElementById("resultado").innerHTML = amigo;
}