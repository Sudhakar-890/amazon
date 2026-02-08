import { productDetails } from './data.js';
import { cart,store} from './cart.js';

let cartQuantity = 0;

htmlBuilder();

function htmlBuilder() {
  productDetails.forEach((products) => {
    const html = `
        <div class="product-box">
      <img class="product-image" src="images/products/${products.productImg}" alt="product image">
      <div class="product-details">
        <div style='width:100%;height:60px;'><p class="product-name line-limit">${products.productName}</p></div>
        <p class="product-ratings"><img src="images/ratings/rating-${(products.productRatings * 10)}.png" alt="ratings"> ${products.productRateCount}</p>
        <p class="product-price">Rs. ${products.productPrice}</p>
        <select class="add-quantity-${products.productId} add-quantity">
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
        </select>
        <button class="add-cart-button" data-product-id="${products.productId}">Add to cart</button>

      </div>
    </div>
    `;
    document.querySelector('#center').innerHTML += html;
  })
}

showCartQuantity();

// after complete the HTML 
// get the id saved as the a dataset in the button "add to cart".
// the product id in a constant "productIdBtn"
document.querySelectorAll('.add-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    const productIdBtn = button.dataset.productId;
    checkCart(productIdBtn);
  })
});

//it checks the cart already have the product or not.
// if its have, quantity will increase else call updateCart()
function checkCart(productIdBtn)
{
  let existsProduct=false;
  const quantity = Number(document.querySelector(`.add-quantity-${productIdBtn}`).value);
  document.querySelector(`.add-quantity-${productIdBtn}`).value = 1;
  cart.forEach(carts=>{
    if(productIdBtn==carts.productId)
    {
      carts.quantity+=quantity;
      existsProduct=true;
      showCartQuantity();
    }
  });
  if(!existsProduct){
    updateCart(productIdBtn,quantity)
  }
}

//the cart dont have the product. so we add it here
function updateCart(productIdBtn,quantity){
    productDetails.forEach((products)=>{
    if(productIdBtn==products.productId)
    {
      cart.push({
        productId:products.productId,
        productImg:products.productImg,
        productName:products.productName,
        productPrice:products.productPrice,
        quantity:quantity,
        options:1
      });
      showCartQuantity();    
    }
  });
}


// this helps to adjust the cart number in amazon page in different respective to digits
function showCartQuantity()
{
    const btag = document.querySelector('.header4 b');
    let totalQuantity=0;
    cart.forEach((carts)=>{
      totalQuantity +=carts.quantity;
    });
    if (totalQuantity >= 10 && totalQuantity<100) {
      btag.innerText = totalQuantity;
      btag.style.left ='40%';
    }

    else if(totalQuantity<10) {
      btag.innerText = totalQuantity;
    }
    
    else{
      btag.innerText ="99+";
      btag.style.left="33%";
    }
    store();
}



