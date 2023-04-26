const canli = document.querySelector(".canli img");
const photoes = document.querySelectorAll("#photoes img");

photoes.forEach((e)=>{
    e.addEventListener("click",function (event) {
    canli.src=event.target.src
    })
})
