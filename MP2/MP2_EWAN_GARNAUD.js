var saisit = prompt("Saisissez votre texte :");

if(saisit.startsWith("http://") || saisit.startsWith("https://")){

    var domaine = saisit.substring(11,saisit.length)
    var domainehtt = saisit.substring(12,saisit.length)
    var html = document.getElementById("texte");

    if(saisit.startsWith("http://")){
        html.innerText = domaine.toLocaleLowerCase();
        html.setAttribute("href",saisit)
    }
    else{
        html.innerText = domainehtt.toLocaleLowerCase();
        html.setAttribute("href",saisit);
    }
}
else{

    var phrase = "http://" + saisit;
    var html = document.getElementById("texte");
    var domaine = phrase.substring(11,phrase.length)

    html.innerText = domaine.toLocaleLowerCase();
    html.setAttribute("href",phrase)
    }
