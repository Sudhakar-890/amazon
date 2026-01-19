import {cart} from './cart.js';
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
                            <div class="delivery-times">
                                <input type="radio" data-id="${carts.productId}" name="delivery-times-${carts.productId}" class="delivery-radio-btn" value="Tuesday, May 27" id="radio-1-${carts.productId}">
                                <label for="radio-1-${carts.productId}">
                                <div class="charges-times">
                                    <p style="font-size: medium;font-weight: bold;color:rgb(179, 95, 65)">
                                        Tuesday, May 27
                                    </p>
                                    <p style="font-size:small">
                                        <span style="color:grey">Free shipping</span>
                                    </p>
                                </div>
                                </label>
                            </div>
                            <div class="delivery-times">
                                <input type="radio" data-id="${carts.productId}" name="delivery-times-${carts.productId}" class="delivery-radio-btn" value="sunday, May 20" id="radio-2-${carts.productId}">
                                <label for="radio-2-${carts.productId}">
                                <div class="charges-times">
                                    <p style="font-size: medium;font-weight: bold;color:rgb(179, 95, 65)">
                                        sunday, May 20
                                    </p>
                                    <p style="font-size:small">
                                        <span style="color:grey">&#8377; 20 - shipping</span>
                                    </p>
                                </div>
                                </label>
                            </div>
                            <div class="delivery-times">
                                <input type="radio" data-id="${carts.productId}" name="delivery-times-${carts.productId}" class="delivery-radio-btn" value="Thurday, May 15" id="radio-3-${carts.productId}">
                                <label for="radio-3-${carts.productId}">
                                <div class="charges-times">
                                    <p style="font-size: medium;font-weight: bold;color:rgb(179, 95, 65)">
                                        Thurday, May 15
                                    </p>
                                    <p style="font-size:small">
                                        <span style="color:grey">&#8377; 50 - shipping</span>
                                    </p>
                                </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

    `;
});

const cartBox = document.querySelector('.left-section-center');
cartBox.innerHTML=html;
}

const radioBtn = document.querySelectorAll(`input[name=delivery-]`);
radioBtn.forEach((event)=>
{

})


