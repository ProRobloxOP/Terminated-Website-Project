// Handles/Provides All Animations, And Loads Them
const CustomAnimations = {}

// Script Loader Function
function loadScript(path, callback){
    var script = document.createElement("script");
    script.src = path;
    script.onload = callback;

    document.head.appendChild(script);
}

// Load Anim Scripts
loadScript("/HTML/Website/Utilities/Default_Animations/Types/Movement.js", function(){
    CustomAnimations.Movement = Anim_Movements;
});

loadScript("/HTML/Website/Utilities/Default_Animations/Types/Opacity.js", function(){
    CustomAnimations.Opacity = Anim_Opacity;
});
