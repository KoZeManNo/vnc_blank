document.addEventListener("transitionstart", () => {
    let consoleButton = document.getElementById("consoleButton");

    if(consoleButton !== null) {
        consoleButton.removeAttribute("onClick");
        consoleButton.setAttribute("target", "_blank");
    }
});
