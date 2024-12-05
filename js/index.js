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

/////////////////
// slider part homebs2 
/////////////////

// Function to show specific group of cards based on the button clicked
function showCards(groupNumber) {
    const cards = document.querySelectorAll(".card");
    const cardsPerPage = 3; // Number of cards per group
    const totalCards = cards.length;

    // Calculate the start and end indices for the group
    const startIndex = (groupNumber - 1) * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

    // Hide all cards
    cards.forEach((card, index) => {
        card.classList.add("hidden");
        if (index >= startIndex && index < endIndex) {
            card.classList.remove("hidden");
        }
    });

    // Update button styles
    document.querySelectorAll(".btn").forEach((btn, index) => {
        if (index + 1 === groupNumber) {
            btn.classList.add("btn-active", "bg-[#101010]", "text-white");
            btn.classList.remove("bg-gray-300", "text-black");
        } else {
            btn.classList.add("bg-gray-300", "text-black");
            btn.classList.remove("btn-active", "bg-[#101010]", "text-white");
        }
    });
}

// Initialize by showing the first group
showCards(1);

// Function for next slide
function nextSlide() {
    const totalGroups = Math.ceil(document.querySelectorAll(".card").length / 3);
    const activeButton = document.querySelector(".btn-active");
    const currentGroup = Number(activeButton?.textContent.trim()) || 1;
    const nextGroup = currentGroup % totalGroups + 1;
    showCards(nextGroup);
}
