function pair(tab){
    var pair = []
    var impair = []
    for(let i=0;i < tab.length;i++){
        if(tab[i]%2==0){
            console.log("C'est un nombre pair");
            pair.push(tab[i])
        }
        else{
            console.log("C'est un nombre impair");
            impair.push(tab[i])
        }
    }
    return(pair,impair)
}

console.log(pair([4,35,234,234,1]))