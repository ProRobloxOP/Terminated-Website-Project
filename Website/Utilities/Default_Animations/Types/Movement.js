// All Basic Movement Animations

// Constants
var Anim_Movements = {};
Anim_Movements.Conv = {};

function FindWindowPercent(Element, Pixels, Axis, CheckIfPercent){
    if (typeof(Pixels) == "number"){
        Pixels = Pixels.toString();
    }

    if(CheckIfPercent && !Pixels.includes("px")){ return; }
    if (Pixels.includes("px")){
        Pixels = Pixels.replace("px", "");
    }

    if (Axis == "left"){
        return Pixels/Element.parentElement.clientWidth*100;
    }else if (Axis == "top"){
        return Pixels/Element.parentElement.clientHeight*100;
    }

    return;
}

function FindWindowPixels(Element, Percent, Axis, CheckIfPercent){
    if (typeof(Percent) == "number"){
        Percent = Percent.toString();
    }

    if (CheckIfPercent && !Percent.includes("%")){ return; }
    if (Percent.includes("%")){
       Percent = Percent.replace("%", "");
    }

    if (Axis == "left"){
        return (Element.parentElement.clientWidth/Percent)/100;
    }else if (Axis == "top"){
        return (Element.parentElement.clientHeight/Percent)*100;
    }

    return;
}

// Movement Conversion Functions
Anim_Movements.Conv.PixToNumb = function(Pix){
    return Number(Pix.replace("px", ""));
}

// Square/Line Movement Animation Function
Anim_Movements.Move = function(Element, StartPos, EndPos, Speed, MoveTypes) {
    if (!Element.style) { return; }
    if (!(MoveTypes.includes("left") || MoveTypes.includes("top"))) { return; }
    
    const ElementStyle = window.getComputedStyle(Element);

    var id = null;
    var pos = FindWindowPercent(Element, StartPos, MoveTypes[0], true) || StartPos;

    if (typeof(pos) == "string"){
        pos = pos.replace("%", "");
        pos = Number(pos);
    }

    EndPos = FindWindowPercent(Element, EndPos, MoveTypes[0], true) || EndPos;

    if (typeof(EndPos) == "string"){
        EndPos = EndPos.replace("%", "");
        EndPos = Number(EndPos);
    }

    EndPos = Math.round(EndPos);

    clearInterval(id);
    id = setInterval(frame, Speed * 5);

    function frame() {
        if (pos == EndPos) {
            clearInterval(id);
        } else {
            if (pos < EndPos) {
                pos++;
            } else {
                pos--;
            }

            if (MoveTypes.includes("left")) {
                Element.style.left =  pos + "%";
            }
            if (MoveTypes.includes("top")) {
                Element.style.top =  pos + "%";
            }
        }
    }
}

// Animates Elements From The Left Of The Screen
Anim_Movements.FromLeft = function(Element, Speed, EndLeftVal) {
    if (!Element.style) { return; }

    const ElementStyle = window.getComputedStyle(Element);
    var leftVal = EndLeftVal || ElementStyle.getPropertyValue("left");
    leftVal = FindWindowPercent(Element, leftVal, "left", true) || leftVal;

    Element.style.left = "-100%";

    Anim_Movements.Move(Element, "-100%", leftVal, Speed, ["left"]);
}

// Animates Elements To The Left Of The Screen
Anim_Movements.ToLeft = function(Element, Speed, EndLeftVal) {
    if (!Element.style) { return; }

    const ElementStyle = window.getComputedStyle(Element);
    var startPos = ElementStyle.getPropertyValue("left");
    startPos = FindWindowPercent(Element, startPos, "left");

    EndLeftVal = EndLeftVal || "-100%";
    EndLeftVal = FindWindowPercent(Element, EndLeftVal, "left", true) || EndLeftVal;

    Anim_Movements.Move(Element, startPos, EndLeftVal, Speed, ["left"]);
}

// Animates Elements From The Bottom Of The Screen
Anim_Movements.FromBottom = function(Element, Speed, EndTopVal, StartTopVal) {
    if (!Element.style){ return; }

    const ElementStyle = window.getComputedStyle(Element);
    var topVal = EndTopVal || ElementStyle.getPropertyValue("top");
    if (typeof(topVal) == "number"){
        topVal = topVal.toString()+"px";
    }

    topVal = FindWindowPercent(Element, topVal, "top", true) || topVal;

    StartTopVal = StartTopVal || "100%"
    Element.style.top = StartTopVal;

    Anim_Movements.Move(Element, StartTopVal, topVal, Speed, ["top"]);
}