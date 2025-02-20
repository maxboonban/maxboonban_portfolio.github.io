document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio site loaded");

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = this.getAttribute("href");
        });
    });
});