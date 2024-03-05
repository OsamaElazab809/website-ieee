const header=document.querySelector(".header");
window.onscroll=function (){
    if(scrollY>50){
    header.style.cssText="background-color: var(--second-color);"
    }
    else{
        header.style.cssText="background-color: transparent;"
    }
}
const logregBox=document.querySelector(".logReg-box");
const registerLink=document.querySelector(".register-link");
const loginLink=document.querySelector(".login-link");

registerLink.addEventListener("click",()=>{
    logregBox.classList.add("active");
})

const dropDown=document.querySelector(".header .dropdown");
const linkDrop=document.querySelector(".header .dropdown .inner-links");
dropDown.addEventListener("click",()=>{
    if( linkDrop.style.display==="block"){
    linkDrop.style.display="none";
    }else{
        linkDrop.style.display="block";
    }
})
const landText=document.querySelector(".landing .content");
console.log(landText)
landText.style.cssText="width:100%;text-align:center;"

const join=document.querySelector('.header .btn');
join.addEventListener("click",()=>{
    logregBox.style.transform="translateX(0%)";
    landText.style.cssText="width:60%;text-align:left;"
})