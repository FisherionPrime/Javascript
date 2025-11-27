function premier(n){
    if(n <= 1){
        return("Ce n'est pas un nombre premier");
    }
    for(let i =1;i < n;i++){
        if(n%2 == 0){
            return("Ce n'est pas un nombre premier");
        }
    }
    return("c'est un nombre premier");
}

console.log(premier(5))
console.log(premier(4))