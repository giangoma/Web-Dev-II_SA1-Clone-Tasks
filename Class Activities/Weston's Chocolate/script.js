document.addEventListener("DOMContentLoaded", () => {
    let basketCount = 0;
    const basketButton = document.getElementById("basket");
    const cartModal = document.getElementById("cartModal");
    const signInModal = document.getElementById("signInModal");
    const occasionModal = document.getElementById("occasionModal");
    const cartClose = cartModal.querySelector(".close");
    const signInClose = signInModal.querySelector(".close");
    const occasionClose = occasionModal.querySelector(".close");

    // This adds items to the basket
    document.querySelectorAll(".chocolate-button").forEach(button => {
        button.addEventListener("click", (event) => {
            basketCount++;
            basketButton.textContent = `Basket (${basketCount})`;

            const chocolateCard = event.target.closest('.chocolate-card');
            const title = chocolateCard.querySelector('.chocolate-title').textContent;
            const price = chocolateCard.querySelector('.chocolate-price').textContent;

            // This adds the item to cart modal
            const item = document.createElement('div');
            item.className = 'cart-item';
            item.innerHTML = `<span>${title}</span><span>${price}</span>`;
            document.querySelector('.cart-items').appendChild(item);

            updateCartTotal();
        });
    });

    // Open Cart
    basketButton.addEventListener("click", () => {
        cartModal.style.display = "block";
    });

    // Closing the cart
    cartClose.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    // Opening sign-in 
    document.getElementById("sign-in").addEventListener("click", () => {
        signInModal.style.display = "block";
    });

    // Closing sign-in
    signInClose.addEventListener("click", () => {
        signInModal.style.display = "none";
    });

    // Closing the modals if clicking outside of them
    window.addEventListener("click", (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = "none";
        } else if (event.target === signInModal) {
            signInModal.style.display = "none";
        } else if (event.target === occasionModal) {
            occasionModal.style.display = "none";
        }
    });

    // Occasion selector 
    document.querySelectorAll(".occasion-button").forEach(button => {
        button.addEventListener("click", () => {
            const occasion = button.dataset.occasion;
            document.getElementById("occasionTitle").textContent = occasion;
            updateOccasionModalContent(occasion);
            occasionModal.style.display = "block";
        });
    });

    // Closing occasion modal
    occasionClose.addEventListener("click", () => {
        occasionModal.style.display = "none";
    });

    // This adds the selected chocolates to cart
    document.querySelector(".add-to-cart-button").addEventListener("click", () => {
        const occasion = document.getElementById("occasionTitle").textContent;
        const row1 = document.getElementById("row1").value;
        const row2 = document.getElementById("row2").value;
        const row3 = document.getElementById("row3").value;

        basketCount++; // Increments basket count
        basketButton.textContent = `Basket (${basketCount})`; // Updates basket button text

        const item = document.createElement('div');
        item.className = 'cart-item';
        item.innerHTML = `<span>Occasion - ${occasion}</span><span>$50.00</span>`;
        document.querySelector('.cart-items').appendChild(item);

        occasionModal.style.display = "none";
        updateCartTotal();
    });

    // This updates occasion modal content based on the selected occasion
    function updateOccasionModalContent(occasion) {
        const occasionImages = {
            'birthday': 'Assets/birthday.jpg',
            'anniversary': 'Assets/anniversary.png',
            'thank-you': 'Assets/thank-you.jpg',
            'just-because': 'Assets/just-because.jpg'
        };
        
        const imageSrc = occasionImages[occasion];

        const chocolateOptions = `
            <div class="chocolate-dropdown">
                <label for="row1">Choose flavor for Row 1:</label>
                <select id="row1">
                    <option value="Cherry Mania - $29.99">Cherry Mania</option>
                    <option value="It's Knafeh - $15.99">It's Knafeh</option>
                    <option value="Ore-ore-oh, yes - $12.99">Ore-ore-oh, yes</option>
                    <option value="Milk Chocolate - Standard">Milk Chocolate - Standard</option>
                    <option value="White Chocolate - Standard">White Chocolate - Standard</option>
                    <option value="White Chocolate - Standard">Chocolate Glazed Strawberries</option>
                </select>
            </div>
            <div class="chocolate-dropdown">
                <label for="row2">Choose flavor for Row 2:</label>
                <select id="row2">
                    <option value="Cherry Mania - $29.99">Cherry Mania</option>
                    <option value="It's Knafeh - $15.99">It's Knafeh</option>
                    <option value="Ore-ore-oh, yes - $12.99">Ore-ore-oh, yes</option>
                    <option value="Milk Chocolate - Standard">Milk Chocolate - Standard</option>
                    <option value="White Chocolate - Standard">White Chocolate - Standard</option>
                    <option value="White Chocolate - Standard">Chocolate Glazed Strawberries</option>
                </select>
            </div>
            <div class="chocolate-dropdown">
                <label for="row3">Choose flavor for Row 3:</label>
                <select id="row3">
                    <option value="Cherry Mania - $29.99">Cherry Mania</option>
                    <option value="It's Knafeh - $15.99">It's Knafeh</option>
                    <option value="Ore-ore-oh, yes - $12.99">Ore-ore-oh, yes</option>
                    <option value="Milk Chocolate - Standard">Milk Chocolate - Standard</option>
                    <option value="White Chocolate - Standard">White Chocolate - Standard</option>
                    <option value="White Chocolate - Standard">Chocolate Glazed Strawberries</option>
                </select>
            </div>
        `;

        const modalContent = `
            <div class="chocolate-options-content">
                <div class="chocolate-options-left">
                    ${chocolateOptions}
                </div>
                <div class="chocolate-options-right">
                    <img src="${imageSrc}" alt="${occasion}">
                </div>
            </div>
        `;

        document.querySelector('.chocolate-options').innerHTML = modalContent;
    }

    // Updates the cart total
    function updateCartTotal() {
        const items = document.querySelectorAll('.cart-item');
        let total = 10; // To incur the 10 dollars shipping fee
        items.forEach(item => {
            const price = parseFloat(item.querySelector('span:last-child').textContent.replace('$', ''));
            total += price;
        });
        document.querySelector('.cart-total').textContent = `Total: $${total.toFixed(2)}`;
    }
});
