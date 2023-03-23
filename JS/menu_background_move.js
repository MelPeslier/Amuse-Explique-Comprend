// Etant donner que ce code s'exécute lors de l'appel du script,
// Et que ce script n'est pas une fonction qui se fait appeller par un élément,
// Mais un un script qui va récupérer les élément HTML présents pour les utiliser.

// ***** Il faut l'inclure au moins après les éléments concernés *****

// l'inclure, donc insérer <script src=""></script> après les éléments HTML précédents


//Pour déclarer une variable on peut utiliser "var", "let", "const".

// "var" déclare une variable qui sera redéfinnissable et modifiable à souhait,
// ne fonctionne pas avec le block scope, mais fonctionne avec le fonction scope et le global scope

//On utilisera généralement "let" et "const"

// "let" permet de déclarer une variable qui sera modifiable mais non redéfinnissable.
// "const" permet de déclarer une variable qui ne sera ni modifiable ni redefinnissable.

// On déclare une variable "menu" qui contiendra la div "menu"

// document représente la page web !

// getElementById("") permet d'accéder à un élément via son id qui est unique
const menu = document.getElementById("menu");

// Va créer un tableau depuis les éléments contenants la classe "menu-item"
Array.from(document.getElementsByClassName("menu-item"))

// Pour chacun d'entre eux, à tel élément et son index on fait ce qui suit le =>{}
    .forEach((item, index) => {

        // quand on passe la souris sur un élément, on fait
        item.onmouseover = () => {

            // on accède à l'index actif du dataset contenu dans l'élément "menu"
// chaque élément commençaant par "data-" est un data attribute
// ***-> ici on utilisera l'élément html "data-active-index"
// On y accède en utilisant le nom de l'élément contenant la donnée que l'on souhaite,
// suivi de".dataset", suvi de ".nomAttribut" (qui en html s'écrit "nom_attribut").
            
// Quand on est sur un élément on lui donne comme index l'index de l'élément
// Car on parcourt un tableau que l'on vient de créer avec son index,
// mais l'élément html (ou css) lui n'a pas d'index définit.
// Ce qui fait que lorsque l'on a la souris sur un de ces items,
// La valeur de l'index de cette propritée sera définit et
// prendra les valeurs que l'on souhaite lui donner dans la partie CSS
            menu.dataset.activeIndex = index;
        }
    });

// On peut accéder au dataset depuis le CSS !
// (voir les commentaires de la feuile "style.css" -> #menu[data-active-index=])