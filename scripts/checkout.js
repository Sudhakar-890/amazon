import {cart,store,toNewCart} from './cart.js';
import UpdatedeliveryTime,{deliveryDate} from './delivery.js';

refreshPage()

function refreshPage(){
updateCartHTML();

function updateCartHTML()
{
    let html = '';
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
                        <p class="quantity">Quantity :<p class='count-${carts.productId}'> ${carts.quantity}</p> <span style="color:blue">&nbsp;&nbsp;&nbsp;&nbsp;<a class='update'>Update</a> &nbsp;&nbsp; <a class='del' data-product-id='${carts.productId}'>Delete</a> </span></p>
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
                refreshPage();
            }
        });     
    });
})

document.querySelectorAll('.del').forEach((del)=>{
    del.addEventListener('click',()=>{
        const productId = del.dataset.productId;
        let newCart = cart.filter((carts)=>
            productId!=carts.productId
        );
        toNewCart(newCart);
        refreshPage();
    });
});


}

