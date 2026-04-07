export let productDetails= JSON.parse(localStorage.getItem('product')) || 
 [{
    productId:1001,
    productImg:'6-piece-white-dinner-plate-set.jpg',
    productName:'6-piece white dinner plate set',
    productRatings:3.5,
    productRateCount:196,
    productPrice:599,
},
{
    productId:1002,
    productImg:'6-piece-non-stick-baking-set.webp',
    productName:'6-piece non stick baking set',
    productRatings:4,
    productRateCount:187,
    productPrice:799,
    
},
{
    productId:1003,
    productImg:'adults-plain-cotton-tshirt-2-pack-teal.jpg',
    productName:'Adults plain cotton Tshirt 2-pack-teal',
    productRatings:4.5,
    productRateCount:827,
    productPrice:1899,
},
{
    productId:1004,
    productImg:'athletic-cotton-socks-6-pairs.jpg',
    productName:'Athletic cotton socks 6-pairs',
    productRatings:5,
    productRateCount:8974,
    productPrice:99,
},
{
    productId:1005,
    productImg:'backpack.jpg',
    productName:'Backpack',
    productRatings:4,
    productRateCount:1204,
    productPrice:439,
},
{
    productId:1006,
    productImg:'bathroom-rug.jpg',
    productName:'Bathroom Rug',
    productRatings:3.5,
    productRateCount:977,
    productPrice:49,
},
{
    productId:1007,
    productImg:'black-2-slot-toaster.jpg',
    productName:'Black 2-slot toaster',
    productRatings:2.5,
    productRateCount:5747,
    productPrice:459,
},
{
    productId:1008,
    productImg:'blackout-curtain-set-beige.webp',
    productName:'Blackout curtain set beige',
    productRatings:5,
    productRateCount:6271,
    productPrice:1099,
},
{
    productId:1009,
    productImg:'coffeemaker-with-glass-carafe-black.jpg',
    productName:'Coffee maker',
    productRatings:5,
    productRateCount:2583,
    productPrice:3299,
},
{
    productId:1010,
    productImg:'cotton-bath-towels-teal.webp',
    productName:'cotton bath towels',
    productRatings:4.5,
    productRateCount:7783,
    productPrice:94399
}
]

export function saveToStorage(productDetails){
    localStorage.setItem('product', JSON.stringify(productDetails));
    productDetails = JSON.parse(localStorage.getItem('product'));
}

export const adminUserData = localStorage.getItem('adminUserData') || [
    {
        adminEmail : 'vaishnavi@gmail.com',
        adminPass : '1234'
    },
    {
        adminEmail : 'rubika@gmail.com',
        adminPass : '1234'
    }
]

export let curAdminUser = JSON.parse(localStorage.getItem('curAdmin')) || [];

export function saveCurUser(user){
    localStorage.setItem('curAdmin',JSON.stringify(user));
    curAdminUser = JSON.parse(localStorage.getItem('curAdmin')) || [];
}