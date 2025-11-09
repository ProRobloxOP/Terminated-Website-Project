// Displays Menu When Menu Button Is Clicked In Whole_Bar.html

// Constants/Variables
let MenuUI = document.getElementById("MenuUI");
let MenuButton = document.getElementById("MenuButton");

let showingMenu = "false";

let docBodyStyle = this.document.body.style;

// Displays The Menu And Animates It
// If In Iframe, Sets The z-index Accordingly
function DisplayMenu() {
    if (showingMenu === true) {
        showingMenu = false;

        this.document.body.style.overflowY = "auto";

        CustomAnimations.Opacity.Tween(MenuUI, 1, 0, 0.3);

        wait_until(() => (window.getComputedStyle(MenuUI).opacity == 0), () => {
            MenuUI.style.opacity = 1;
            MenuUI.style.left = "-100%";

            MenuUI.style.zIndex = 0;
        })
    } else {
        showingMenu = true;
        
        this.document.body.style.overflowY = "hidden";

        MenuUI.style.opacity = 0;
        MenuUI.style.left = "0%";
        MenuUI.style.zIndex = 1;

        CustomAnimations.Opacity.Tween(MenuUI, 0, 1, 0.3);
    }
}

// Default Position For Menu
MenuUI.style.left = "-100%";

window.addEventListener("message", (event) => {
    console.log(event.origin);
    console.log(event.data.message);
    if (event.origin !== window.location.origin){
        return;
    }

    // Types Of Messages
    if (event.data.message == "ToggleMenu"){
        DisplayMenu();
    }
})
