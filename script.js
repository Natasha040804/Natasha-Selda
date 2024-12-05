function openPopup(productName, productPrice) {
    const popup = document.getElementById('popup');
    const orderDetails = document.getElementById('order-details');
    orderDetails.textContent = `You have ordered: ${productName} for $${productPrice}`;
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}