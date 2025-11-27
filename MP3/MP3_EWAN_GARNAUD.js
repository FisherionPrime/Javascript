var pourcentage_pourboire = 10
var console = false
function calculatrice_pb(montant_commande,pourcentage_pourboire,console){
    pourcentage_pourboire = pourcentage_pourboire / 100;
    var pourboire = montant_commande / pourcentage_pourboire;
    var avis = prompt("Tu veux tout voir dans la console o/n");
    if(avis == 'o'){
        console = true;
    }
    if(console){
        console.log(montant_commande,pourboire);
    } 
    return pourboire ;
}
console.log(calculatrice_pb(100));