// All Basic Ocapacity/Transparency Animations

var Anim_Opacity = {};

Anim_Opacity.Tween = function(Element, StartVal, EndVal, Duration){
    if (!Element.style){ return; }

    const ElementStyle = window.getComputedStyle(Element);
    var id = null;

    var currentOpacity = StartVal*10;
    var EndOpacity = EndVal*10

    clearInterval(id);
    id = setInterval(frame, Duration*150)

    function frame(){
        if (currentOpacity == EndOpacity){
            clearInterval(id);
        } else {
            if (currentOpacity < EndOpacity){
                currentOpacity++;
            } else{
                currentOpacity--;
            }

            Element.style.opacity = currentOpacity/10;
        }
    }
}
