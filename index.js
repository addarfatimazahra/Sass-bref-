// Prix des produits
const prixProduits = {
    produit1: 400, // Prix du fond de teint
    produit2: 300, // Prix du mascara
    produit3: 400  // Prix du rouge à lèvres
};

// Fonction pour calculer le prix total
function calculerPrixTotal() {
    const quantiteInput = document.getElementById('Quantite').value;
    const produitSelectionne = document.querySelector('input[name="produit"]:checked');
    
    if (!produitSelectionne) {
        alert('Veuillez sélectionner un produit.');
        return;
    }

    const prixUnitaire = prixProduits[produitSelectionne.value];
    const total = prixUnitaire * quantiteInput;

    // Mettre à jour le prix total affiché
    document.getElementById('total-price').textContent = `Prix Totale : ${total} DH`;
}

// Ajouter un écouteur d'événements pour le formulaire
document.getElementById('form-panier').addEventListener('submit', function(event) {
    event.preventDefault();
    calculerPrixTotal();
});