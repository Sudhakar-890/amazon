export const cart=JSON.parse(localStorage.getItem('cart'))||[]

export function store(){
  localStorage.setItem('cart',JSON.stringify(cart))
}