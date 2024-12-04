document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.getElementById("scrollContainer");
    const scrollUpButton = document.getElementById("scrollUp");
    const scrollDownButton = document.getElementById("scrollDown");

    // Scroll Up Button
    scrollUpButton.addEventListener("click", function () {
        scrollContainer.scrollBy({ top: -150, behavior: "smooth" });
    });

    // Scroll Down Button
    scrollDownButton.addEventListener("click", function () {
        scrollContainer.scrollBy({ top: 150, behavior: "smooth" });
    });
});
