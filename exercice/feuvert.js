function feuvert(feuVert,autorisationSpeciale,alerteDeclanchee){
    if((feuVert || autorisationSpeciale) && !alerteDeclanchee){
        return("Avance")
    }
    else{
        return("Stop")
    }
}
console.log(feuvert(false,false,false))
console.log(feuvert(false,false,true))
console.log(feuvert(false,true,false))
console.log(feuvert(false,true,true))
console.log(feuvert(true,false,false))
console.log(feuvert(true,false,true))
console.log(feuvert(true,true,false))
console.log(feuvert(true,true,true))