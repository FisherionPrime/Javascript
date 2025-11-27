console.log("script en place")
// CHANGER COULEUR PARAGRAPHE
var texte = document.getElementById("paragraphe");
var bouton = document.getElementById("couleur");
var etat_bouton = 3;
    bouton.addEventListener("click",testfunction);
    function testfunction(){
        console.log("bien joué");
        if(etat_bouton%2 == 0){
        texte.style.color = "red";
        etat_bouton = etat_bouton + 1
        console.log(etat_bouton);
        }
        else{
            texte.style.color = "blue";
            etat_bouton = etat_bouton + 1;
            console.log(etat_bouton);
        }
}
// COMPTEUR 
console.log("deuxieme partie");
let compter = document.getElementById("compteur");
let plus = document.getElementById("augmenter");
let moins = document.getElementById("diminuer");
let compteur_enjs = 0;
moins.addEventListener("click",diminuer);
plus.addEventListener("click",augmenter);

function diminuer(){
    if(compteur_enjs!= 0){
        compteur_enjs = compteur_enjs-1;
        compter.innerText = compteur_enjs;
    }
}
function augmenter(){
    compteur_enjs = compteur_enjs +1;
    compter.innerText = compteur_enjs;
}

// AFFICHER LA DATE
let d = new Date();
let heureact = d.getUTCDate()+ "/" + parseInt(d.getMonth()+1) + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes()
let bouton_changer = document.getElementById("bouton_date");
let sortie = document.getElementById("date_final");
bouton_changer.addEventListener("click",afficher);
function afficher(){
    sortie.innerText = heureact
}
