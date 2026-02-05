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
        const toChange = delivery.id===carts.options
        toChange
         ? html =  delivery.deliveryTime 
        : ''
    }))
     return html
}

export default UpdatedeliveryTime;










