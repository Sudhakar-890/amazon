import {productDetails,saveToStorage,curAdminUser} from './data.js';

const name = document.querySelector("input[type='text']");
const price = document.querySelector("input[type='number']");

const imgFile = document.querySelector('#fileInput');

const addBtn = document.querySelector('.addProduct');

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.sellerText').innerText=curAdminUser[0].adminEmail;
});

let imgUrl = '';
let base64String = '';

imgFile.addEventListener('change',()=>{
    const img = imgFile.files[0];
    const reader = new FileReader();

    reader.onloadend = () =>{
        base64String = reader.result;
        document.querySelector('.image img').setAttribute('src', base64String);
    }

    if(img){     
        reader.readAsDataURL(img);
    }
});

addBtn.addEventListener('click',()=>{
    if(name.value && price.value){
        productDetails.push({
            productName : name.value,
            productId : (productDetails.length+1001),
            productImg: base64String,
            productRatings: 0,
            productRateCount: 0,
            productPrice: price.value
        });
        console.log(productDetails)
        saveToStorage(productDetails);
        setTimeout(()=>{
            window.location.href = 'amazon.html';
        },1000);
    }
});


