function toggleMenu() {
    const menu = document.getElementById("sidebar");
    
    // Toggle the 'display' style between 'none' and 'block'
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}



// Expand/collapse learning modules
function toggleExpand(element) {
    const content = element.parentElement.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
        element.textContent = "+";
    } else {
        content.style.display = "block";
        element.textContent = "-";
    }
}
