let i = localStorage.length-1
let id = localStorage.key(i)
let product = JSON.parse(localStorage.getItem(id))
let title = product.title
let size = product.size
let color = product.color
let image = product.image
let price = product.price
let description = product.description
localStorage.removeItem(id)
console.log(title, image, price, size, color)
let mainDiv = document.querySelector("body")
console.log(mainDiv)
let secondChild = mainDiv.children[2]
console.log(secondChild)
let productDiv = document.createElement("div")
productDiv.classList.add(id, "main", "flex",  "bg-white",  "lg:flex-row",  "flex-col",  "w-full",  "px-[6%]",  "gap-8")
productDiv.innerHTML = `<div class="image xl:w-1/3 lg:w-1/2 w-full animate-fadeUp lg:animate-fadeRight">
                <img src="${image}" class="img w-full rounded-3xl" alt="">
            </div>
            <div class="info xl:w-2/3 lg:w-1/2 w-full animate-fadeUp lg:animate-fadeLeft">
                <p class="title font-semibold text-black px-2 titan-one-regular text-4xl">${title}</p>
                <div class="flex items-center p-2 gap-2 text-gray-600">
                    <img class="w-6" src="Images/ratingstar.png" alt="">
                    <img class="w-6" src="Images/ratingstar.png" alt="">
                    <img class="w-6" src="Images/ratingstar.png" alt="">
                    <img class="w-6" src="Images/ratingstar.png" alt="">
                    <p class="text-lg py-1">4/5</p>
                </div>
                <p class="priceTag text-4xl text-black font-semibold px-2 py-1"><b class="price">${price}</b></p>
                <p class="text-gray-600 p-2">${description}</p>
                <div class="color px-2 py-4 border border-y-gray-200 border-x-white">
                    <p class="text-gray-600 text-md">Select Color</p>
                    <div class="selectColor flex gap-2 p-2 text-md text-white ">
                        <div class="${color[0]} bg-${color[0]} rounded-full flex cursor-pointer">
                            <p class="blackSp w-8 h-8 blackSp" ></p>
                            <div class="hidden blackTick">
                                <span class="material-symbols-outlined p-2">check</span>
                            </div>
                        </div>
                        <div class="${color[1]} bg-${color[1]} rounded-full flex cursor-pointer">
                            <p class="w-8 h-8 graySp"></p>
                            <div class="hidden grayTick">
                                <span class="material-symbols-outlined p-2">check</span>
                            </div>
                        </div>
                        <div class="${color[2]} bg-${color[2]} rounded-full flex cursor-pointer border">
                            <p class="w-8 h-8 whiteSp" ></p>
                            <div class="hidden whiteTick">
                                <span class="material-symbols-outlined p-2 text-black">check</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="size px-2 py-4 border border-y-gray-200 border-x-white">
                    <p class="text-gray-600 text-md">Choose Size</p>
                    <div class="sizeBtn flex gap-2 p-2 text-md flex-wrap">
                        <button class="small bg-gray-200 text-gray-400 px-6 py-2 rounded-full cursor-pointer">Small</button>
                        <div class="medium bg-gray-200 text-gray-400 px-6 py-2 rounded-full cursor-pointer">Medium</div>
                        <div class="large bg-gray-200 text-gray-400 px-6 py-2 rounded-full cursor-pointer">Large</div>
                        <div class="x-large bg-gray-200 text-gray-400 px-6 py-2 rounded-full cursor-pointer">X-Large</div>
                    </div>
                </div>
                <div class="quantity px-2 py-4 w-full flex justify-start items-center gap-5 max-sm:flex-wrap">
                    <div class="flex gap-2 p-2 text-xl font-bold justify-evenly items-center rounded-full xl:w-1/4 w-full sm:w-1/3 bg-gray-200">
                        <button class="items-center remove"><span class="material-symbols-outlined">remove</span></button>
                        <p class="items-center count">1</p>
                        <button class="items-center add"><span class="material-symbols-outlined">add_2</span></button>
                    </div>
                    <div class="w-full sm:w-2/3 xl:w-2/4">
                        <button type="button" class="cart bg-black text-gray-100 font-thin my-2 py-3 px-12 rounded-full w-full">Add to Cart</button>
                    </div>
                </div>
            </div>`
mainDiv.insertBefore(productDiv, secondChild)    

console.log(productDiv)

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
    let product = new ProductClass(title, imageSrc, price, size, color)
    localStorage.setItem("P001", JSON.stringify(product))
    window.location.href = "cart.html";
})