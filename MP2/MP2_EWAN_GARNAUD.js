var saisit = prompt("Saisissez votre texte :");
if(saisit.startsWith("http://") || saisit.startsWith("https://")){
}
else{
    var phrase = "http://" + saisit;
    var html = document.getElementById("texte");
    html.innerText = phrase.toLocaleLowerCase();
    html.setAttribute("href",phrase);
    console.log(phrase);
}