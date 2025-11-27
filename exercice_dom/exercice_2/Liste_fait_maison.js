function ajouter_liste(){
    //Récupération prompt utilisateur
    var tache_entree = document.getElementById("champ_saisit").value;
    //On vide le prompt, qu'on puiss réecrire à nouveau 
    document.getElementById("champ_saisit").value = "";
    //Création d'une balise <li>
    var tache_ajoutee = document.createElement("li");
    //Récupération liste d'id tache_ajoutee
    var liste_final = document.getElementById("liste");
    //On met le prompt utilisateur dans la <li> créee
    tache_ajoutee.textContent = tache_entree;
    //Création du bouton pour supprimer une tâche, et mettre ce qu'on veut dans ce bouton
    var bouton_suppr = document.createElement("button");
    bouton_suppr.innerHTML = "Supprimer";
    //On va ajouter le bouton supprimer, à côté du prompt utilisateur
    tache_ajoutee.appendChild(bouton_suppr);
    //On vient mettre cette tâche dans la liste
    liste_final.appendChild(tache_ajoutee);

    //On va attendre que le bouton soit cliqué, s'il est cliqué on enlève la tâche
    bouton_suppr.addEventListener("click", function(){
        liste_final.removeChild(tache_ajoutee);
    })

}

function recherche(){
    const mail = document.getElementById("email").value
    if(mail.includes("@")){
        alert("Nous avons bien recu merci !")
        document.getElementById("email").value = ""
        document.getElementById("nom").value = ""
        document.getElementById("prenom").value = ""
    }
    else{
        alert("email non valide")
    }

}