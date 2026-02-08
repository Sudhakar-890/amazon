import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'

const today  = dayjs();

const deliveryTimeOptions = [{
    id:1,
    deliveryTime : today.add(10,'days').format('dddd, MMMM DD'),
    charges:0
},
{
    id:2,
    deliveryTime: today.add(6,'days').format('dddd, MMMM DD'),
    charges:40
},
{
    id:3,
    deliveryTime: today.add(2,'days').format('dddd, MMMM DD'),
    charges:80
}]

function UpdatedeliveryTime(carts)
{
    let html = '';

    deliveryTimeOptions.forEach((delivery,index)=>{
            const isChecked = delivery.id==carts.options
            const isFree = delivery.id===1

            html += 
                    `
                    <div class="delivery-times" data-delivery-option = ${delivery.id} data-product-id = ${carts.productId}>
                        <input type="radio" ${isChecked?'checked':''} name="delivery-times-${carts.productId}" class="delivery-radio-btn" id="radio-${index}-${carts.productId}">
                        <label for="radio-${index}-${carts.productId}">
                        <div class="charges-times">
                            <p style="font-size: medium;font-weight: bold;color:rgb(179, 95, 65)">
                                ${delivery.deliveryTime}
                            </p>
                            <p style="font-size:small">
                                <span style="color:grey"> ${isFree?'FREE':'&#8377; '+delivery.charges + ' - '} shipping</span>
                            </p>
                        </div>
                        </label>
                    </div>

                    `

    });

    
    return html
}

export function deliveryDate(carts){
    let html
    deliveryTimeOptions.forEach((delivery=>{
        const toChange = delivery.id==carts.options
        toChange
         ? html =  delivery.deliveryTime 
        : ''
    }))
     return html
}

export default UpdatedeliveryTime;


export function updatePrice(cart){
    let Pricehtml = '';
    let totalQuantity = 0;
    let itemPrice = 0;
    let itemCharges = 0;
    let totalPrice = 0;
    let GstPrice = 0;
    let totalGstPrice = 0;
    cart.forEach((carts)=>{
        totalQuantity += carts.quantity;
        itemPrice += (carts.productPrice * carts.quantity);
        const deliveryId = carts.options;
        deliveryTimeOptions.forEach((delivery)=>{
            if(deliveryId==delivery.id)
            itemCharges += delivery.charges;
        });
    });

    totalPrice = itemPrice + itemCharges;
    GstPrice = (totalPrice * 0.05).toFixed(2);
    totalGstPrice = totalPrice + GstPrice;

    Pricehtml = 
    `
         <div id="cash-box">
                <p id="p1">Order Summary</p><br>

                <p class="p2">Items (<span style='color:orange;'>${totalQuantity}</span>) :</p>  
                <p class="items">&#8377; ${itemPrice}</p><br>

                <p class="p2">Shipping & Handling :</p>
                <p class="shipping">&#8377; ${itemCharges}</p><br>

                <br>

                <p class="p2">Total before Tax :</p>  
                <p class="subtotal">&#8377; ${totalPrice}</p><br>

                <p class="p2">Estimated Tax (5%) :</p>
                <p class="tax">&#8377; ${GstPrice}</p><br>

                <br><br>
                <p id="p3">Order Total :</p>
                <p id="total">&#8377; ${totalGstPrice}</p> 
                <br>
                <br>
                <input type="radio" name="payment" class="payment"><p class="p4">Online Pay </p> <br>
                <input type="radio" name="payment" class="payment"><p class="p4">Cash on delivery </p> 

                <br>
                <br>
                <center>
                <a href="orderplaced.html"><button class="place-order">Place your order</button></a>
                </center>

            </div>    
    `;

    document.querySelector('#right-section').innerHTML = Pricehtml;
}










