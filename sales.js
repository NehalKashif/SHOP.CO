let menu = document.querySelector(".menu")
let dropdown = document.querySelector(".dropdown")
let close = document.querySelector(".closeNav")

menu.addEventListener("click", () => {
    dropdown.classList.remove("top-[-575%]")
    dropdown.classList.add("top-[30%]")
})
close.addEventListener("click", () => {

    dropdown.classList.remove("top-[30%]")
    dropdown.classList.add("top-[-575%]")
})





let dd = document.querySelector(".dd")
let list = document.querySelector(".list")

dd.addEventListener("mouseenter", ()=>{
    list.style.backgroundColor = 'black';
    list.style.color = 'white';
})

dd.addEventListener("mouseleave", ()=>{
    list.style.backgroundColor = 'white';
    list.style.color = 'black';
})