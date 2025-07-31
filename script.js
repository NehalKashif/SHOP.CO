let closeBtn = document.querySelector(".close")
let tag = document.querySelector(".tag")

closeBtn.addEventListener("click", () => {
    tag.classList.add("hidden");
});


let menu = document.querySelector(".menu")
let dropdown = document.querySelector(".dropdown")
let close = document.querySelector(".closeNav")

menu.addEventListener("click", () => {
    dropdown.classList.remove("top-[-575%]")
    dropdown.classList.add("top-[20%]")
})
close.addEventListener("click", () => {
    dropdown.classList.remove("top-[20%]")
    dropdown.classList.add("top-[-575%]")
})
