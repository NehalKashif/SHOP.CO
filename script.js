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

let product = document.querySelectorAll(".products")

product.forEach(p => {
    p.addEventListener("click", () => {
        let productClasses = Array.from(p.classList)
        let productCode = productClasses[2]
        let colors = productClasses.slice(3, 6)
        let title = p.children[1].innerText
        let imgSrc = p.querySelector("img").src
        let price = p.querySelector(".price").innerText
        let size = ["Small", "Medium", "Large", "X-Large"]
        let descrip = p.querySelector(".hidden").innerText
        let productObj = new ProductClass(title, imgSrc, descrip, price, size, colors)
        window.location.href = "product.html"
        localStorage.setItem(productCode, JSON.stringify(productObj))
    })
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

let view = document.querySelector(".view")
    
view.addEventListener("click", () => {
    let hide = document.querySelectorAll(".hide")
    if(view.innerText === "View All"){
        hide.forEach(element => {
            element.classList.remove("hidden")
            view.innerText ="Close"
        });
    }else{
        hide.forEach(element => {
            element.classList.add("hidden")
            view.innerText ="View All"
        })
    }
})


let topview = document.querySelector(".topview")
    
topview.addEventListener("click", () => {
    let hide = document.querySelectorAll(".tophide")
    if(topview.innerText === "View All"){
        hide.forEach(element => {
            element.classList.remove("hidden")
            topview.innerText ="Close"
        });
    }else{
        hide.forEach(element => {
            element.classList.add("hidden")
            topview.innerText ="View All"
        })
    }
})