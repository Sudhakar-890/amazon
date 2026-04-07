import {adminUserData, saveCurUser} from './data.js';

const inputTags = document.querySelectorAll('.inputBox input');

const verify = document.querySelector('.verify');

verify.addEventListener('click',()=>{
    verifyAdminPass();
});

function verifyAdminPass(){
    let curUser = [];
    adminUserData.forEach((admin)=>{
        if(admin.adminEmail===inputTags[0].value && admin.adminPass===inputTags[1].value){
            curUser.push(admin) ;
            console.log(admin);
        }

    });
    console.log(curUser,curUser.length)

    if(curUser.length===1){
        saveCurUser(curUser);
        console.log('verify')
        setTimeout(()=>window.location.href = 'seller.html',1000);
    }

    else{
        window.alert('Invalid admin ID, password ')
    }
}