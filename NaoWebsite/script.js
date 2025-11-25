document.addEventListener("DOMContentLoaded", () => {
    // Fungsi Sidebar Utama
    function openNav() {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

    const openButton = document.querySelector(".openbtn");
    const closeButton = document.querySelector(".closebtn");
    if (openButton) openButton.addEventListener("click", openNav);
    if (closeButton) closeButton.addEventListener("click", closeNav);

    // Hover
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "#686A6C"; 
            event.target.style.color = "white";
        });
        link.addEventListener("mouseleave", (event) => {
            event.target.style.backgroundColor = ""; 
            event.target.style.color = "";
        });
    });
});