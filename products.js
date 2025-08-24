let white = document.querySelector(".white")
let black = document.querySelector(".black")
let gray = document.querySelector(".gray")
let whiteTick = document.querySelector(".whiteTick")
let blackTick = document.querySelector(".blackTick")
let grayTick = document.querySelector(".grayTick")
let whiteSp = document.querySelector(".whiteSp")
let blackSp = document.querySelector(".blackSp")
let graySp = document.querySelector(".graySp")

white.addEventListener("click", ()=>{
    whiteSp.classList.add("hidden")
    whiteTick.classList.remove("hidden")
    blackSp.classList.remove("hidden")
    blackTick.classList.add("hidden")
    graySp.classList.remove("hidden")
    grayTick.classList.add("hidden")
})

black.addEventListener("click", ()=>{
    blackSp.classList.add("hidden")
    blackTick.classList.remove("hidden")
    graySp.classList.remove("hidden")
    grayTick.classList.add("hidden")
    whiteSp.classList.remove("hidden")
    whiteTick.classList.add("hidden")
})

gray.addEventListener("click", ()=>{
    graySp.classList.add("hidden")
    grayTick.classList.remove("hidden")
    blackSp.classList.remove("hidden")
    blackTick.classList.add("hidden")
    whiteSp.classList.remove("hidden")
    whiteTick.classList.add("hidden")
})

let small = document.querySelector(".small")
let medium = document.querySelector(".medium")
let large = document.querySelector(".large")
let xlarge = document.querySelector(".x-large")

small.addEventListener("click", ()=>{
    small.classList.remove("bg-gray-200")
    small.classList.remove("text-gray-400")
    small.classList.add("bg-black")
    small.classList.add("text-white")

    medium.classList.add("bg-gray-200")
    medium.classList.add("text-gray-400")
    medium.classList.remove("bg-black")
    medium.classList.remove("text-white")

    large.classList.add("bg-gray-200")
    large.classList.add("text-gray-400")
    large.classList.remove("bg-black")
    large.classList.remove("text-white")

    xlarge.classList.add("bg-gray-200")
    xlarge.classList.add("text-gray-400")
    xlarge.classList.remove("bg-black")
    xlarge.classList.remove("text-white")
})

medium.addEventListener("click", ()=>{
    small.classList.add("bg-gray-200")
    small.classList.add("text-gray-400")
    small.classList.remove("bg-black")
    small.classList.remove("text-white")

    medium.classList.remove("bg-gray-200")
    medium.classList.remove("text-gray-400")
    medium.classList.add("bg-black")
    medium.classList.add("text-white")

    large.classList.add("bg-gray-200")
    large.classList.add("text-gray-400")
    large.classList.remove("bg-black")
    large.classList.remove("text-white")

    xlarge.classList.add("bg-gray-200")
    xlarge.classList.add("text-gray-400")
    xlarge.classList.remove("bg-black")
    xlarge.classList.remove("text-white")
})

large.addEventListener("click", ()=>{
    small.classList.add("bg-gray-200")
    small.classList.add("text-gray-400")
    small.classList.remove("bg-black")
    small.classList.remove("text-white")

    medium.classList.add("bg-gray-200")
    medium.classList.add("text-gray-400")
    medium.classList.remove("bg-black")
    medium.classList.remove("text-white")

    large.classList.remove("bg-gray-200")
    large.classList.remove("text-gray-400")
    large.classList.add("bg-black")
    large.classList.add("text-white")

    xlarge.classList.add("bg-gray-200")
    xlarge.classList.add("text-gray-400")
    xlarge.classList.remove("bg-black")
    xlarge.classList.remove("text-white")
})

xlarge.addEventListener("click", ()=>{
    small.classList.add("bg-gray-200")
    small.classList.add("text-gray-400")
    small.classList.remove("bg-black")
    small.classList.remove("text-white")

    medium.classList.add("bg-gray-200")
    medium.classList.add("text-gray-400")
    medium.classList.remove("bg-black")
    medium.classList.remove("text-white")

    xlarge.classList.remove("bg-gray-200")
    xlarge.classList.remove("text-gray-400")
    xlarge.classList.add("bg-black")
    xlarge.classList.add("text-white")

    large.classList.add("bg-gray-200")
    large.classList.add("text-gray-400")
    large.classList.remove("bg-black")
    large.classList.remove("text-white")
})