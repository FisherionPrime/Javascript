const EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊'];
let cartes = [];
let cartesRetournees = [];
let cartesTrouvees = [];
let nombreCoups = 0;
let peutRetourner = true;

// je melange
function melanger(tableau) {
    return tableau.sort(() => Math.random() - 0.5);
}

// Initialiser le jeu
function initialiserJeu() {
    // Créer les paires et mélanger
    cartes = melanger([...EMOJIS, ...EMOJIS]);
    cartesRetournees = [];
    cartesTrouvees = [];
    nombreCoups = 0;
    peutRetourner = true;

    // Réinitialiser l'affichage
    document.getElementById('moves').textContent = '0';
    document.getElementById('pairs').textContent = '0';
    
    // Créer les cartes
    creerCartes();
}

// Créer les cartes dans le plateau
function creerCartes() {
    const plateau = document.getElementById('gameBoard');
    plateau.innerHTML = '';

    cartes.forEach((emoji, index) => {
        const carte = document.createElement('button');
        carte.className = 'card';
        carte.textContent = '?';
        carte.dataset.index = index;
        carte.onclick = function() {
            retournerCarte(index);
        };
        plateau.appendChild(carte);
    });
}

// Retourner une carte
function retournerCarte(index) {
    // Vérifier si on peut retourner la carte
    if (!peutRetourner || 
        cartesRetournees.length >= 2 || 
        cartesRetournees.includes(index) || 
        cartesTrouvees.includes(index)) {
        return;
    }

    // Afficher l'emoji
    const carte = document.querySelector(`[data-index="${index}"]`);
    carte.textContent = cartes[index];
    cartesRetournees.push(index);

    // Si on a retourné 2 cartes, vérifier
    if (cartesRetournees.length === 2) {
        nombreCoups++;
        document.getElementById('moves').textContent = nombreCoups;
        verifierCorrespondance();
    }
}

// Vérifier si les 2 cartes correspondent
function verifierCorrespondance() {
    peutRetourner = false;
    const [index1, index2] = cartesRetournees;

    if (cartes[index1] === cartes[index2]) {
        // C'est une paire 
        setTimeout(() => {
            cartesTrouvees.push(index1, index2);
            const carte1 = document.querySelector(`[data-index="${index1}"]`);
            const carte2 = document.querySelector(`[data-index="${index2}"]`);
            carte1.style.background = '#4ade80';
            carte2.style.background = '#4ade80';
            
            cartesRetournees = [];
            peutRetourner = true;
            
            // Mettre à jour le compteur
            document.getElementById('pairs').textContent = cartesTrouvees.length / 2;

            // Vérifier si on a gagné
            if (cartesTrouvees.length === cartes.length) {
                setTimeout(() => {
                    alert('Bravo ! Vous avez gagné en ' + nombreCoups + ' coups !');
                }, 500);
            }
        }, 500);
    } else {
        setTimeout(() => {
            const carte1 = document.querySelector(`[data-index="${index1}"]`);
            const carte2 = document.querySelector(`[data-index="${index2}"]`);
            carte1.textContent = '?';
            carte2.textContent = '?';
            
            cartesRetournees = [];
            peutRetourner = true;
        }, 1000);
    }
}

// Ajouter l'événement au bouton Nouvelle Partie
document.querySelector('.restart-btn').onclick = initialiserJeu;

// Démarrer le jeu au chargement
initialiserJeu();