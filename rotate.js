
let clockBtn = document.querySelector("#clock");

let anticlock = document.querySelector("#Anti-clock")

let reset = document.querySelector("#reset");


clockBtn.addEventListener('click', ()=>{   
    img.style.transform = "rotate(90deg)";
})

anticlock.addEventListener('click', ()=>{   
    img.style.transform = "rotate(-90deg)"
})

reset.addEventListener('click', ()=>{   
    img.style.transform = ""
})
