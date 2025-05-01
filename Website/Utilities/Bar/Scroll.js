// Scroll Sequence
let Whole_Bar = document.getElementById("Bar");
let lastScrollTop = document.documentElement.scrollTop;

let scrollingUp = false;

history.scrollRestoration = "manual";

let ScrollUpBar = function(){
    let Whole_BarStyle = window.getComputedStyle(Whole_Bar);
    
    let Whole_BarTop = CustomAnimations.Movement.Conv.PixToNumb(Whole_BarStyle.top);

    if (Whole_BarTop == 0){ return; }

    CustomAnimations.Movement.FromBottom(Whole_Bar, 3, "0%", "-12%");

    Whole_Bar.style.zIndex = 1;
}

let ScrollDownBar = function(scrollDif){
    let Whole_BarStyle = window.getComputedStyle(Whole_Bar);

    let Whole_BarTop = CustomAnimations.Movement.Conv.PixToNumb(Whole_BarStyle.top);
    let Whole_BarHieght = CustomAnimations.Movement.Conv.PixToNumb(Whole_BarStyle.height);

    if (scrollingUp == false || Whole_BarTop <= Whole_BarHieght){
        let result = Whole_BarTop - scrollDif;
        Whole_Bar.style.top = result.toString()+"px";

        Whole_BarTop = CustomAnimations.Movement.Conv.PixToNumb(Whole_BarStyle.top);
        Whole_BarHieght = CustomAnimations.Movement.Conv.PixToNumb(Whole_BarStyle.height);

        if (Whole_BarTop <= Whole_BarHieght*-1){
            Whole_Bar.style.top = "-12";
            Whole_Bar.style.zIndex = -1;
        }
    }else{
        Whole_Bar.style.top = "-12%";
        Whole_Bar.style.zIndex = -1;
    }
}

window.addEventListener("scroll", function(){
    let currentScrollTop = this.document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop){
        ScrollDownBar(currentScrollTop - lastScrollTop);
        scrollingUp = false;
    } else if (!scrollingUp) {
        ScrollUpBar();
        scrollingUp = true;
    }

    lastScrollTop = currentScrollTop
})