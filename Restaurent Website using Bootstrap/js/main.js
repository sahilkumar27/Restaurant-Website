// Active navbar
let nav = document.querySelector(".navigation-wrap")
window.onscroll = function () {
    // by default js mein scroll top hi rha ta hai
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on")
    }
    else{
        nav.classList.remove("scroll-on")
    }
}


// Nav hide
let navBar = document.querySelectorAll('.nav-link');

let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach(function(a){
    a.addEventListener("click", function(){
        // show bootstarp ka display property hai
        navCollapse.classList.remove("show");
    })
})



// Counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end-start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1247, 3000);   
    counter("count2", 100, 57895, 2500);    
    counter("count3", 0, 1440, 3000);    
    counter("count4", 0, 7820, 3000);
});

