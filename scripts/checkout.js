import {cart} from './cart.js';
import deliveryTimeOptions from './delivery.js';

console.log(cart)
let html = '';

updateCartHTML();

function updateCartHTML()
{
    document.querySelector('#cart-length').innerText=cart.length;
    cart.forEach((carts)=>{
    html+=`
    
    <div class="cart-product-box del-${carts.productId}">
                    <h4 class="delivery-date">Delivery Date :&nbsp;&nbsp;&nbsp; - &nbsp;- &nbsp;- </h4>
                    <div class="cart-product">
                        <div class="product-details">
                            <img class="product-img" src="images/products/${carts.productImg}" alt="product img">
                            <div>
                                <p class="product-name">${carts.productName}</p>
                                <p class="product-price">&#8377; ${carts.productPrice}</p>
                                <p class="quantity">Quantity : ${carts.quantity} <span style="color:blue">&nbsp;&nbsp;&nbsp;&nbsp;Update &nbsp;&nbsp; Delete</span></p>
                            </div>
                        </div>
                        <div class="delivery-option-box">
                            <p class="delivery-headings">Choose a delivery option</p>
                            ${UpdatedeliveryTime(carts,deliveryTimeOptions)}
                        </div>
                    </div>
    </div>

    `;
});

function UpdatedeliveryTime(carts,deliveryTimeOptions)
{
    html = 
    `
     <div class="delivery-times">
        <input type="radio" name="delivery-times-${carts.productId}" class="delivery-radio-btn" id="radio-1-${carts.productId}">
        <label for="radio-1-${carts.productId}">
        <div class="charges-times">
            <p style="font-size: medium;font-weight: bold;color:rgb(179, 95, 65)">
                ${deliveryTimeOptions[0].deliveryTime}
            </p>
            <p style="font-size:small">
                <span style="color:grey">&#8377; FREE shipping</span>
            </p>
        </div>
        </label>
    </div>

     <div class="delivery-times">
        <input type="radio" name="delivery-times-${carts.productId}" class="delivery-radio-btn" id="radio-2-${carts.productId}">
        <label for="radio-2-${carts.productId}">
        <div class="charges-times">
            <p style="font-size: medium;font-weight: bold;color:rgb(179, 95, 65)">
                ${deliveryTimeOptions[1].deliveryTime}
            </p>
            <p style="font-size:small">
                <span style="color:grey">&#8377; ${deliveryTimeOptions[1].charges} - shipping</span>
            </p>
        </div>
        </label>
    </div>

     <div class="delivery-times">
        <input type="radio" name="delivery-times-${carts.productId}" class="delivery-radio-btn" id="radio-3-${carts.productId}">
        <label for="radio-3-${carts.productId}">
        <div class="charges-times">
            <p style="font-size: medium;font-weight: bold;color:rgb(179, 95, 65)">
                ${deliveryTimeOptions[2].deliveryTime}
            </p>
            <p style="font-size:small">
                <span style="color:grey">&#8377; ${deliveryTimeOptions[2].charges} - shipping</span>
            </p>
        </div>
        </label>
    </div>
    `
    return html
}


const cartBox = document.querySelector('.left-section-center');
cartBox.innerHTML=html;
}


