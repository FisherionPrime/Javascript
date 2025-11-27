function dés(){
    let a_trouver = 66;
    do{
         var valeur = prompt("Saisissez une valeur");
         if(valeur > a_trouver){
            alert("trop grand")
         }
         else if( valeur < a_trouver){
            alert("Trop petit ")
         }
         else{
             alert("Bien joué");
         }
    }
    while(a_trouver != valeur);
}

console.log(dés())