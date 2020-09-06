(function(){

    const images = [
        "contBcg-0.jpeg",
        "contBcg-1.jpeg",
        "contBcg-3.jpeg",
        "contBcg-4.jpeg",
    ]

const buttons = document.querySelectorAll(".btn");
const img = document.querySelector(".img-container");
let count = 0;


buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        if(button.classList.contains('btn-left')){
            count--;
            if(count < 0){
                count = images.length-1;
            }
            img.style.backgroundImage = `url('img/${images[count]}')`;
        }
        if(button.classList.contains('btn-right')){
            count++;
            if(count >images.length-1){
                count = 0;
            }
            img.style.backgroundImage = `url('/img/${images[count]}')`;
        }
    })
})


})();