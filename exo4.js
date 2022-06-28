let newTag = document.createElement("a");
var text = document.createTextNode("liste");
newTag.appendChild(text);
newTag.href = "https://fr.wikipedia.org/wiki/Liste_de_langages_de_programmation"
newTag.title = "liste";
let phrase = document.createTextNode('En voici une ');
document.body.appendChild(phrase)
document.body.appendChild(newTag);
let phraseFin = document.createTextNode(' plus complète');
document.body.appendChild(phraseFin);
