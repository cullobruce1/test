document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');
    const purchaseForm = document.getElementById('purchase-form');
    const form = document.getElementById('form');
    const cancelButton = document.getElementById('cancel');
    const productInput = document.getElementById('product');
    const priceInput = document.getElementById('price');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            const productPrice = button.getAttribute('data-price');
            productInput.value = productName;
            priceInput.value = `$${productPrice}`;
            purchaseForm.classList.remove('hidden');
        });
    });

    cancelButton.addEventListener('click', () => {
        purchaseForm.classList.add('hidden');
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert(`Purchase confirmed for ${productInput.value} at ${priceInput.value}. We will contact you soon.`);
        purchaseForm.classList.add('hidden');
    });
});
