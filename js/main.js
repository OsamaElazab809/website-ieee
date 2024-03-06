// start header 
const header=document.querySelector(".header");
window.onscroll=function (){
    if(scrollY>50){
    header.style.cssText="background-color: var(--second-color);"
    }
    else{
        header.style.cssText="background-color: transparent;"
    }
}

const dropDown=document.querySelector(".header .dropdown");
const linkDrop=document.querySelector(".header .dropdown .inner-links");
dropDown.addEventListener("click",()=>{
    if( linkDrop.style.display==="block"){
    linkDrop.style.display="none";
    }else{
        linkDrop.style.display="block";
    }
})

// End header 

// start Landing 

const landText=document.querySelector(".landing .content");
landText.style.cssText="width:100%;text-align:center;"

const join=document.querySelector('.header .btn');
join.addEventListener("click",()=>{
    logregBox.style.transform="translateX(0%)";
    landText.style.cssText="width:60%;text-align:left;"
})


const logregBox=document.querySelector(".logReg-box");
const registerLink=document.querySelector(".login-link");
const loginLink=document.querySelector(".register-link");
const login=document.querySelector(".landing .form-box.login");
const register=document.querySelector(".landing .form-box.register");

registerLink.addEventListener("click",()=>{
    // logregBox.classList.add("active");
    register.style.cssText="transform: translateX(450px);transition:3s;";
    login.style.cssText="transform: translateX(0px);transition-delay:4s);";
})

loginLink.addEventListener("click",()=>{
    // logregBox.classList.add("active");
    login.style.cssText="transform: translateX(450px);transition:3s;";
    register.style.cssText="transform: translateX(0px);transition-delay:4s);";
})
// End Landing 

// start board 
// const contBoard=document.querySelector(".board .container");
// console.log(contBoard);
// const more=document.querySelector(".board .board-button");
// console.log(more);
// const activeItem=document.querySelectorAll(".item");


// activeItem.classList.add("active");
// console.log(document.querySelector(".item.active"));
// more.addEventListener("click",()=>{
//     if( !activeItem.classList.contains("active")){
//     activeItem.classList.add("active");
//     more.style.display=none;
//     contBoard.style.height="330vh";}
// })
// console.log(document.querySelector(".item.active"));

// End board 
// const moreDetail=document.querySelectorAll(".Committees .btn a");
// const showP=document.querySelectorAll(".Committees .commit-details p");
// console.log(moreDetail)
// console.log(showP[0]);
// moreDetail.onclick=function(){
//     moreDetail.classList
//     moreDetail.style.cssText="display:none;";
// }
// moreDetail.addEventListener("click",()=>{
//     for(let i=0 ;i<showP.length;i++){
//         showP[i].style.display="block";
//     }
//     moreDetail.style.cssText="color:#fff";
//     moreDetail.style.cssText="display:none;";
// })