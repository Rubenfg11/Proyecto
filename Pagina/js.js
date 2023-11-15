// script.js

document.addEventListener("DOMContentLoaded", function() {
    var dropdownButton = document.querySelector('.dropbtn');
    var dropdownContent = document.getElementById('myDropdown');

    dropdownButton.addEventListener('click', function() {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

    document.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            dropdownContent.style.display = 'none';
        }
    });
});
// cart.js

document.addEventListener("DOMContentLoaded", function() {
    var cartButton = document.querySelector('.btn-cart');
    var cartContainer = document.querySelector('.cart-container');
    var confirmButton = document.querySelector('.btn-confirm');
    
    cartButton.addEventListener('click', function() {
        cartContainer.classList.toggle('show-cart');
    });

    confirmButton.addEventListener('click', function() {
        // Aquí puedes agregar lógica para confirmar la compra, como enviar la información al servidor, etc.
        alert('Compra confirmada. Gracias por tu pedido.');
        cartContainer.classList.remove('show-cart');
    });
});
