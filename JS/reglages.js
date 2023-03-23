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
let t_gradients = [
    'var(--gradient-point)',
    'var(--gradient-vague)',
    'var(--gradient-trefle)',
    'var(--gradient-trefle-inverse)',
    'var(--gradient-half-circle)',
    'var(--gradient-wall-paper)',
    'var(--gradient-repeat-circle)',
    'var(--gradient-heart)',
];

let t_position_gradients = [
    [ // pour le gradient points
        'var(--bg-position-base)',
        'var(--bg-position-point-hover-1)',
        'var(--bg-position-point-hover-2)',
        'var(--bg-position-point-hover-3)'
    ],
    [ // pour le gradient vague
        'var(--bg-position-vague)',
        'var(--bg-position-vague-hover-1)',
        'var(--bg-position-vague-hover-2)',
        'var(--bg-position-vague-hover-3)'
    ],
    [ // pour les autres gradients
    'var(--bg-position-base)',
    'var(--bg-position-base-hover-1)',
    'var(--bg-position-base-hover-2)',
    'var(--bg-position-base-hover-3)'
]
];

let num_gradient = 0;
let num_position_gradient = 0;
function afficheFondEcran(k){

    num_gradient += k;
    if (num_gradient > 7){
        num_gradient = 0;
    }
    if (num_gradient < 0){
        num_gradient = 7;
    }
    switch (num_gradient){
        case 0 :
            num_position_gradient = 0;
            break;
        case 1 :
            num_position_gradient = 1;
            break;
        default:
            num_position_gradient = 2;
    }

    

    r.style.setProperty('--gradient-motif', t_gradients[num_gradient]);
    r.style.setProperty('--bg-position', t_position_gradients[num_position_gradient][0]);
    r.style.setProperty('--bg-position-hover-1', t_position_gradients[num_position_gradient][1]);
    r.style.setProperty('--bg-position-hover-2', t_position_gradients[num_position_gradient][2]);
    r.style.setProperty('--bg-position-hover-3', t_position_gradients[num_position_gradient][3]);
}