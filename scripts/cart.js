export let cart=JSON.parse(localStorage.getItem('cart'))||[]

export function store(){
  localStorage.setItem('cart',JSON.stringify(cart))
  console.log(JSON.stringify(cart))
}

export function toNewCart(newCart){
  cart = newCart;
  store();
}