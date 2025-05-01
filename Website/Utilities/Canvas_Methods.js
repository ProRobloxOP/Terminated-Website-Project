// Custom Canvas Methods
const Canvas_Methods = {};

Canvas_Methods.CreateRectangle = function(RectangleSettings){
    const ElementID = RectangleSettings.ElementID;
    const RectSize = RectangleSettings.Size;
    const RectColor = RectangleSettings.Color;

    const Canvas = document.getElementById(ElementID);
    const ctx = Canvas.getContext("2d");

    if (RectSize[2] === "full"){
        RectSize[2] = Canvas.width;
    }
    if (RectSize[3] === "full"){
        RectSize[3] = Canvas.height;
    }

    ctx.fillStyle = RectColor || Global_Settings.Defaults.fillStyle;
    ctx.fillRect(RectSize[0], RectSize[1], RectSize[2], RectSize[3]);
}
