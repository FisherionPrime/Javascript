console.log("Script okay")
var code = true;
var badge = true;
if (code && badge) {
    console.log("Ouvert");
}
else if (code && !badge){
    console.log("Clé désactivé");
}
else if (!code && badge){
    console.log("Code incorrect");
}
else{
    console.log("Accès non autorisé");
}