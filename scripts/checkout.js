import {cart,store} from './cart.js';
import UpdatedeliveryTime,{deliveryDate} from './delivery.js';

let html = '';

updateCartHTML();

function updateCartHTML()
{
    document.querySelector('#cart-length').innerText=cart.length;
    cart.forEach((carts)=>{
    html+=`  
        <div class="cart-product-box del-${carts.productId}">
            <h4 class="delivery-date delivery-date-${carts.productId}">Delivery Date : ${deliveryDate(carts)}</h4>
            <div class="cart-product">
                <div class="product-details">
                    <img class="product-img" src="images/products/${carts.productImg}" alt="product img">
                    <div>
                        <p class="product-name">${carts.productName}</p>
                        <p class="product-price">&#8377; ${carts.productPrice}</p>
                        <p class="quantity">Quantity : ${carts.quantity} <span style="color:blue">&nbsp;&nbsp;&nbsp;&nbsp;Update &nbsp;&nbsp; Delete </span></p>
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
cartBox.innerHTML=html;
}

document.querySelectorAll('.delivery-times').forEach((radio)=>{
    radio.addEventListener('change',()=>{
        const {deliveryOption,productId} = radio.dataset
        cart.forEach((carts)=>{
            if(productId==carts.productId){
                carts.options = deliveryOption;
                store();
            }
        });     
    });
})

