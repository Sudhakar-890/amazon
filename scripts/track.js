import {cart} from './cart.js';

document.addEventListener('DOMContentLoaded',()=>{
 setTimeout(()=>{
 console.log("entered",document.querySelector('.overlay'))
  document.querySelector('.overlay').classList.add('hide')},3000);
  
});

/*buildTrackPage();
function buildTrackPage(){
 let html = '';
			cart.forEach((carts) => {
				let imgSource = `images/products/${carts.productImg}`;
				if (carts.productImg.startsWith('data:')) {
					imgSource = carts.productImg;
				}
}
}*/