let nav = document.querySelector(".navMenu");
let menu = document.querySelector("#menu");




menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
})




let  header = document.querySelector('header');

document.addEventListener("scroll", function(){
    let y = scrollY

    if (y>=80) {
        header.style.backgroundColor = "white",
        header.style.boxShadow = "";
    } else {
        header.style.backgroundColor = "transparent"
    }
})