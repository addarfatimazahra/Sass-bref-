const prixProduits = {
    produit1: 400,
    produit2: 400,
    produit3: 400
};

function calculerPrixTotal() {
    const quantiteInput = document.getElementById('Quantite').value;
    const produitSelectionne = document.querySelector('input[name="produit"]:checked');

    if (!produitSelectionne) {
        alert('Veuillez sélectionner un produit.');
        return;
    }

    const prixUnitaire = prixProduits[produitSelectionne.value];
    const total = prixUnitaire * quantiteInput;

    document.getElementById('total-price').textContent = `Prix Totale : ${total} DH`;
    ajouterDonneesAuTableau(prixUnitaire, quantiteInput, produitSelectionne.value, total);
}

function ajouterDonneesAuTableau(prixUnitaire, quantite, produit, total) {
    const nom = document.getElementById('name').value;
    const prenom = document.getElementById('prénom').value;
    const email = document.getElementById('Email').value; 
    const adresse = document.getElementById('Adress').value;
    const numero = document.getElementById('Numéro tele').value;

    // Vérification du numéro de téléphone
    if (numero.length > 10) {
        alert('Le numéro de téléphone ne doit pas dépasser 10 chiffres.');
        return;
    }

    const newLigne = document.createElement('tr');
    newLigne.innerHTML = `
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${email}</td>
        <td>${adresse}</td>
        <td>${numero}</td>
        <td>${quantite}</td>
        <td>${prixUnitaire} DH</td>
        <td>${total} DH</td> <!-- Utiliser 'total' directement -->
    `;
    
    document.getElementById('liste-ordonner').appendChild(newLigne); // Corrigé l'ID du tableau
    document.getElementById('form-panier').reset(); 
}

// Mise à jour du total lors de la saisie de la quantité
document.getElementById('Quantite').addEventListener('input', function() {
    const quantiteInput = this.value;
    const produitSelectionne = document.querySelector('input[name="produit"]:checked');

    if (produitSelectionne) {
        const prixUnitaire = prixProduits[produitSelectionne.value];
        const total = prixUnitaire * quantiteInput;
        document.getElementById('total-price').textContent = `Prix Totale : ${total} DH`;
    }
});

// Écouteur d'événements pour le formulaire
document.getElementById('form-panier').addEventListener('submit', function (event) {
    event.preventDefault();
    calculerPrixTotal();
});