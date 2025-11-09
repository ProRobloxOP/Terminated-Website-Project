// Animates Elements In Latest Products DIV
let ElementsFromBottom = document.getElementsByClassName("Anim_FromBottom");

// A Wait Until Function For Predicates (function) And An Optional Callback
function wait_until(predicate, callback) {
    if (predicate()) {
        if (!callback) { return; }

        callback();
    } else {
        setTimeout(() => wait_until(predicate, callback), 10);
    }
}

for (let i = 0; i < ElementsFromBottom.length; i++) {
    let ElementFromBottom = ElementsFromBottom[i];
    let ElementStyle = window.getComputedStyle(ElementFromBottom);

    let parentElement = ElementFromBottom.parentElement;
    let parentStyle = window.getComputedStyle(parentElement);

    wait_until(() => (CustomAnimations.Movement && CustomAnimations.Movement.FromBottom && CustomAnimations.Movement.Conv && CustomAnimations.Movement.Conv.PixToNumb),  () => {
        let height = CustomAnimations.Movement.Conv.PixToNumb(ElementStyle.height);
        let parentHeight = CustomAnimations.Movement.Conv.PixToNumb(parentStyle.height);
    
        let Speed = parentHeight/height*0.5;
    
        CustomAnimations.Movement.FromBottom(ElementFromBottom, Speed.toString(), null, "65%");
    });
}
