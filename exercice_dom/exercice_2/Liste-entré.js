console.log("Script initialisé")
let liste = []
let element = document.getElementById("champ_saisit")
let btn_envoyé = document.getElementById("send")
let todolist = document.getElementById("liste")
btn_envoyé.addEventListener("click",envoyé);
function envoyé(){
    liste.push(element.value);
    console.log(liste) //Validé




























    
    //CREATION DU BOUTON
    var bouttttton = document.createElement("button");
    bouttttton.setAttribute("class","boubou");
    bouttttton.textContent = "Supprimer";
    bouttttton.addEventListener("click",supp);
    //CREATION DU LI
    var li = document.createElement("li");
    li.textContent = element.value; 
    li.appendChild(bouttttton);
    todolist.appendChild(li);
}
function supp(){
    this.parentElement.remove();
}