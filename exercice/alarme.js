console.warn("Script Exécuté")
function alarme(a,b){
    if( (a || b) && !(a && b) ){
        return("Probleme détécté")
    }
    else{
        return("Tout va bien")
    }
}

console.log(alarme(0,0))
console.log(alarme(0,1))
console.log(alarme(1,0))
console.log(alarme(1,1))