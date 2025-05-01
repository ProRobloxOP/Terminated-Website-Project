// Handles Posted Messages For Whole_Bar.html

let Bar = document.getElementById("Bar");

window.addEventListener("message", (event) => {
    if (event.origin !== window.location.origin){
        return;
    }

    // Types Of Messages
    if (event.data.href){
        window.location.href = event.data.href;
    }
})
