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
    white.classList.add("colorSelected")
    black.classList.remove("colorSelected")
    gray.classList.remove("colorSelected")
    whiteSp.classList.add("hidden")
    whiteTick.classList.remove("hidden")
    blackSp.classList.remove("hidden")
    blackTick.classList.add("hidden")
    graySp.classList.remove("hidden")
    grayTick.classList.add("hidden")
})

black.addEventListener("click", ()=>{
    white.classList.remove("colorSelected")
    black.classList.add("colorSelected")
    gray.classList.remove("colorSelected")
    blackSp.classList.add("hidden")
    blackTick.classList.remove("hidden")
    graySp.classList.remove("hidden")
    grayTick.classList.add("hidden")
    whiteSp.classList.remove("hidden")
    whiteTick.classList.add("hidden")
})

gray.addEventListener("click", ()=>{
    gray.classList.add("colorSelected")
    white.classList.remove("colorSelected")
    black.classList.remove("colorSelected")
    
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
    small.classList.add("sizeSelected")

    medium.classList.add("bg-gray-200")
    medium.classList.add("text-gray-400")
    medium.classList.remove("bg-black")
    medium.classList.remove("text-white")
    medium.classList.remove("sizeSelected")

    large.classList.add("bg-gray-200")
    large.classList.add("text-gray-400")
    large.classList.remove("bg-black")
    large.classList.remove("text-white")
    large.classList.remove("sizeSelected")

    xlarge.classList.add("bg-gray-200")
    xlarge.classList.add("text-gray-400")
    xlarge.classList.remove("bg-black")
    xlarge.classList.remove("text-white")
    xlarge.classList.remove("sizeSelected")
})

medium.addEventListener("click", ()=>{
    small.classList.add("bg-gray-200")
    small.classList.add("text-gray-400")
    small.classList.remove("bg-black")
    small.classList.remove("text-white")
    small.classList.remove("sizeSelected")

    medium.classList.remove("bg-gray-200")
    medium.classList.remove("text-gray-400")
    medium.classList.add("bg-black")
    medium.classList.add("text-white")
    medium.classList.add("sizeSelected")

    large.classList.add("bg-gray-200")
    large.classList.add("text-gray-400")
    large.classList.remove("bg-black")
    large.classList.remove("text-white")
    large.classList.remove("sizeSelected")

    xlarge.classList.add("bg-gray-200")
    xlarge.classList.add("text-gray-400")
    xlarge.classList.remove("bg-black")
    xlarge.classList.remove("text-white")
    xlarge.classList.remove("sizeSelected")
})

large.addEventListener("click", ()=>{
    small.classList.add("bg-gray-200")
    small.classList.add("text-gray-400")
    small.classList.remove("bg-black")
    small.classList.remove("text-white")
    small.classList.remove("sizeSelected")

    medium.classList.add("bg-gray-200")
    medium.classList.add("text-gray-400")
    medium.classList.remove("bg-black")
    medium.classList.remove("text-white")
    medium.classList.remove("sizeSelected")

    large.classList.remove("bg-gray-200")
    large.classList.remove("text-gray-400")
    large.classList.add("bg-black")
    large.classList.add("text-white")
    large.classList.add("sizeSelected")

    xlarge.classList.add("bg-gray-200")
    xlarge.classList.add("text-gray-400")
    xlarge.classList.remove("bg-black")
    xlarge.classList.remove("text-white")
    xlarge.classList.remove("sizeSelected")
})

xlarge.addEventListener("click", ()=>{
    small.classList.add("bg-gray-200")
    small.classList.add("text-gray-400")
    small.classList.remove("bg-black")
    small.classList.remove("text-white")
    small.classList.remove("sizeSelected")

    medium.classList.add("bg-gray-200")
    medium.classList.add("text-gray-400")
    medium.classList.remove("bg-black")
    medium.classList.remove("text-white")
    medium.classList.remove("sizeSelected")

    xlarge.classList.remove("bg-gray-200")
    xlarge.classList.remove("text-gray-400")
    xlarge.classList.add("bg-black")
    xlarge.classList.add("text-white")
    xlarge.classList.add("sizeSelected")

    large.classList.add("bg-gray-200")
    large.classList.add("text-gray-400")
    large.classList.remove("bg-black")
    large.classList.remove("text-white")
    large.classList.remove("sizeSelected")
})

let add = document.querySelector(".add")
let remove = document.querySelector(".remove")
let count = document.querySelector(".count")
let num = count.textContent
add.addEventListener("click", ()=>{
    num++
    count.textContent = num
})
remove.addEventListener("click", ()=>{
    if(num != 1){
        num--
        count.textContent = num
    }
})

let cartBtn = document.querySelector(".cart")


cartBtn.addEventListener("click", ()=>{
    let parent = cartBtn.closest(".main")
    let info = parent.querySelector(".info")
    let image = ((parent.querySelector(".image")).querySelector("img"))
    let imageSrc = image.src
    let title = (info).querySelector(".title").textContent
    let price = (info).querySelector(".price").textContent
    let size = ((((parent.querySelector(".info")).querySelector(".size")).querySelector(".sizeBtn")).querySelector(".sizeSelected")).textContent
    let color = info.querySelector(".color").querySelector(".selectColor").querySelector(".colorSelected").classList[0]

    
})