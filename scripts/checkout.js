import { cart, store, toNewCart } from './cart.js';
import UpdatedeliveryTime, { deliveryDate,updatePrice } from './delivery.js';

refreshPage()

function refreshPage() {
	updateCartHTML();

	function updateCartHTML() {

		document.querySelector('#cart-length').innerText = cart.length;

		if (cart.length > 0) {
			let html = '';
			cart.forEach((carts) => {
				html += `  
        <div class="cart-product-box del-${carts.productId}">
            <h4 class="delivery-date delivery-date-${carts.productId}">Delivery Date : ${deliveryDate(carts)}</h4>
            <div class="cart-product">
                <div class="product-details">
                    <img class="product-img" src="images/products/${carts.productImg}" alt="product img">
                    <div>
                        <p class="product-name">${carts.productName}</p>
                        <p class="product-price">&#8377; ${carts.productPrice}</p>
                        <p class="quantity">Quantity :<span class='count-${carts.productId} count'> ${carts.quantity}</span><input type='number' class='input-count' data-product-id='${carts.productId}'>
                        </p>
                        <p class='buttons'>
                            <p class='update' data-product-id='${carts.productId}'>Update</p>
                            &nbsp;&nbsp; 
							<p class='del' data-product-id='${carts.productId}'>Delete</p>   
                        </p>
                    </div>
                </div>
                <div class="delivery-option-box">
                    <p class="delivery-headings">Choose a delivery option</p>
                    ${UpdatedeliveryTime(carts)}
                </div>
            </div>
        </div>
    `;
			});

			const cartBox = document.querySelector('.left-section-center');
			cartBox.innerHTML = html;
		}

		else {
			const emptyContainer = document.querySelector('.left-section-center');
			emptyContainer.innerHTML = '';
			emptyContainer.setAttribute('class', 'emptyContainerCSS');
			const emptyText = document.createElement('p');
			emptyText.className = 'emptyTextCSS';
			emptyText.innerText = 'Your cart is Empty ! ';
			emptyContainer.appendChild(emptyText)
		}

	}

	updatePrice(cart);

	document.querySelectorAll('.delivery-times').forEach((radio) => {
		radio.addEventListener('change', () => {
			const { deliveryOption, productId } = radio.dataset
			cart.forEach((carts) => {
				if (productId == carts.productId) {
					carts.options = deliveryOption;
					store();
					refreshPage();
				}
			});
		});
	})

	document.querySelectorAll('.del').forEach((del) => {
		del.addEventListener('click', () => {
			const productId = del.dataset.productId;
			let newCart = cart.filter((carts) =>
				productId != carts.productId
			);
			toNewCart(newCart);
			refreshPage();
		});
	});

	const inputCount = document.querySelectorAll('.input-count');
	const update = document.querySelectorAll('.update');

	update.forEach((updateBtn) => {
		updateBtn.addEventListener('click', () => {
			if (updateBtn.innerText == 'Update') {
				const productId1 = updateBtn.dataset.productId;
				updateBtn.innerText = 'Save';
				inputCount.forEach((inputCountBox) => {
					const productId = inputCountBox.dataset.productId
					if (productId1 == productId) {
						const displayQuantity = document.querySelector(`.count-${productId}`);
						inputCountBox.style.display = 'inline';
						displayQuantity.style.display = 'none';
						cart.forEach((carts) => {
							if (carts.productId == productId) {
								const quantity = carts.quantity;
								inputCountBox.value = quantity;
							}
						});
					}
				});
			}
			else if (updateBtn.innerText == 'Save') {
				const productId1 = updateBtn.dataset.productId;
				updateBtn.innerText = 'Update';
				inputCount.forEach((inputCountBox) => {
					const productId = inputCountBox.dataset.productId
					if (productId1 == productId) {
						const displayQuantity = document.querySelector(`.count-${productId}`);
						displayQuantity.style.display = 'inline-block';
						const newQuantity = inputCountBox.value;
						inputCountBox.style.display = 'none';
						cart.forEach((carts) => {
							if (carts.productId == productId) {
								carts.quantity = Number(newQuantity);
								displayQuantity.innerText = newQuantity;
								store();
								refreshPage();
							}
						});
					}
				});
			}
		});
	});


}

