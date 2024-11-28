
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
}


document.getElementById('form-panier').addEventListener('submit', function(event) {
    event.preventDefault();
    calculerPrixTotal();
});