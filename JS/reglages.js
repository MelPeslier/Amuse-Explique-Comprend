function affichageReglages(){
    let reglages_items = document.getElementById("reglages-items")
    if (reglages_items.style.display == "block"){
        reglages_items.style.display="none";
    }else{
        reglages_items.style.display="block";
    }
}

// ********** partie taille de fond **********

// addEventListener attache un élément qui gère les évènements à l'élément visé
// addEventListener(event, function, Capture)

// "event"choisir parmis les éléments (sans le on devant (ex: "onclick"->'click'))
//  https://www.w3schools.com/jsref/dom_obj_event.asp

// function : la fonction qui sera appelée lors de l'évènement.
// () => est un raccourcis pour écrire une fonction sans paramètres

// Capture : C'est géré dans la phase de (capture, true), (bubbling, false)


// On sélectionne la racine, pour avoir accès aux variables
let r = document.querySelector(":root");

// La méthode queryselector(element) retourne le premier élément dans le document correspondant au selecteur
const fond_gradient_input = document.querySelector("#fond_gradient_range");

// getcomputedStyle nous donne accès à l'élément en lecture uniquement
// ici on initialise la valeur soit la position de notre selecteur à celle initialisée dans le css :root "--bg-size"
fond_gradient_input.value = parseInt(getComputedStyle(document.body).getPropertyValue('--bg-size'));

fond_gradient_input.addEventListener("input", () =>{
    r.style.setProperty('--bg-size', fond_gradient_input.value + "vmin");
});


// ********** partie choix motif **********

function afficheFondEcranPrecedent(){
    console.log("Fond précédent");
}

function afficheFondEcranSuivant(){
    console.log("Fond suivant");
}