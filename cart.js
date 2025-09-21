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

let cartList = document.querySelector(".cartList")
let emptyCart = document.querySelector(".main")
let cartDetails = document.querySelector(".cartDetails")
let cartItems = document.querySelector(".cartItems")
if(localStorage.length != 0){
    cartList.classList.remove("hidden")
    emptyCart.classList.add("hidden")
    cartDetails.classList.remove("hidden")
    cartDetails.classList.add("flex")
    let i = localStorage.length-1
    let id = localStorage.key(i)
    let product = JSON.parse(localStorage.getItem(id))
    let title = product.title
    let size = product.size
    let color = product.color
    let image = product.image
    let actualprice = product.price
    let price = actualprice
    console.log(title)
    let item = document.createElement("div")
    item.classList.add(id, "item","w-full", "flex", "py-3")
    item.innerHTML = `<img class="w-1/5 rounded-2xl" src="${image}" alt="">
                <div class="info  w-4/5 pl-4 py-2 ">
                    <div class="title flex justify-between items-center">
                        <p class=" font-semibold text-xl">${title}</p>
                        <span class="material-symbols-outlined text-red-600 cursor-pointer delete">delete</span>
                    </div>
                    <div class="details my-3 text-gray-600">
                        <p><b>Size:</b> ${size}</p>
                        <p><b>Color:</b> ${color}</p>
                    </div>
                    <div class="price flex justify-between items-center w-full">
                        <p class="font-semibold text-2xl">$${actualprice}</p>
                        <div class="flex gap-2 p-2 text-xl font-bold justify-evenly items-center rounded-full xl:w-1/4 w-1/3 sm:w-1/3 bg-gray-200">
                            <button class="items-center remove"><span class="material-symbols-outlined">remove</span></button>
                            <p class="items-center count">1</p>
                            <button class="items-center add"><span class="material-symbols-outlined">add_2</span></button>
                        </div>    
                    </div>
                </div>`
    cartItems.append(item)
    let add = document.querySelector(".add")
    let remove = document.querySelector(".remove")
    let count = document.querySelector(".count")
    let num = count.textContent

    let total = document.querySelector(".total").textContent
    let grandtotal = document.querySelector(".Gtotal").textContent
    total = parseInt(total) + parseInt(price)
    document.querySelector(".total").textContent = total
    grandtotal = parseInt(grandtotal) + parseInt(price)
    document.querySelector(".Gtotal").textContent = grandtotal
    add.addEventListener("click", ()=>{
       num++
       count.textContent = num
       total = parseInt(total)+parseInt(actualprice)
       grandtotal = parseInt(grandtotal)+parseInt(actualprice)
       document.querySelector(".total").textContent = total
       document.querySelector(".Gtotal").textContent = grandtotal
    })
    remove.addEventListener("click", ()=>{
        if(num != 1){
            num--
            count.textContent = num
            total = parseInt(total)-parseInt(actualprice)
            grandtotal = parseInt(grandtotal)-parseInt(actualprice)
            document.querySelector(".total").textContent = total
            document.querySelector(".Gtotal").textContent = grandtotal
        }
    })

    

    let deleteBtn = document.querySelector(".delete")
    deleteBtn.addEventListener("click", () => {
        let parent = deleteBtn.closest(".item")
        localStorage.removeItem(parent.classList[0])
        parent.remove()
        if(localStorage.length == 0){
            cartList.classList.add("hidden")
            emptyCart.classList.remove("hidden")
            cartDetails.classList.add("hidden")
        }
    })
}


