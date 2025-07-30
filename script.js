let closeBtn = document.querySelector(".close")
let tag = document.querySelector(".tag")

closeBtn.addEventListener("click", () => {
    tag.classList.add("hidden");
});