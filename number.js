var btn2 =document.getElementById("btn2");
var num = document.getElementById("number");

const num1=()=>{
    const numrandom = Math.floor(Math.random() * 100);
    num.innerText=numrandom;
}
btn2.addEventListener("click",num1);