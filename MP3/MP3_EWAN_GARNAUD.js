var pourcentage_pourboire = 10
var affichage = false

function calculatrice_pb(montant_commande,pourcentage_pourboire,affichage){
    pourcentage_pourboire = pourcentage_pourboire / 100;
    var pourboire = montant_commande * pourcentage_pourboire;
    var avis = prompt("Tu veux tout voir dans la console o/n");

    if(avis == 'o'){
        affichage = true;
    }
    if(affichage){
        console.log(montant_commande,pourboire);
    } 
    return pourboire ;
}

var montant = Number(prompt("Montant de la commande ?"));
var pourcentage = prompt("Pourcentage de pourboire ?");
if (pourcentage === "" || pourcentage === null) {
    pourcentage = 10;
} else {
    pourcentage = Number(pourcentage);
}
var resultat = calculatrice_pb(montant, pourcentage, false);
alert("Le pourboire est : " + resultat + "€");
