const navbarEl = document.querySelector(".navbar");
const bottomCointainerEl = document.querySelector(".bottom-cointainer")

window.addEventListener("scroll", ()=>{
    if(window.scrollY > bottomCointainerEl.offsetTop - navbarEl.offsetHeight - 50){
            navbarEl.classList.add("active")}
        else {
            navbarEl.classList.remove("active")
             }
})
//console.log(bottomCointainer.offsetTop);
console.log(navbarEl.offsetHeight);