
const prixProduits = {
    produit1: 400,
    produit2: 300,
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
    ajouterdonneesAUTableau(prixUnitaire, quantiteInput, produitSelectionne.value, total);
}




function ajouterdonneesAUTableau(prixUnitaire, Quantite, produit, total) {
    const nom = document.getElementById('name').value;
    const prenom = document.getElementById('prénom').value;
    const email = document.getElementById('email').value;
    const adress = document.getElementById('adrrese').value;
    const numero = document.getElementById('num de tél').value;
    const quantiteDeCommande = document.getElementById('Quantité commandée').value;
    const totalDeCommande = document.getElementById('Total de la commande').value;
    const newLigne = document.createElement('tr');
    newLigne.innerHTML = 
            `
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${email}</td>
        <td>${adresse}</td>
        <td>${numero}</td>
        <td>${produit}</td>
        <td>${quantite}</td>
        <td>${prixUnitaire} DH</td>
        <td>${total} DH</td>
    `
   document.getElementById('liste ordonner').appendChild(newLigne);
   document.getElementById('form-panier').reset();
}
   document.getElementById('form-panier').addEventListener('submit', function (event) {
    event.preventDefault();
    calculerPrixTotal();
});