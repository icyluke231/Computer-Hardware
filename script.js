// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Modal functionality
    const modal = document.getElementById("modal");
    const modalClose = document.querySelector(".modal-close");
    const modalTitle = document.querySelector(".modal-title");
    const modalBody = document.querySelector(".modal-body");

    function showModal(title, body) {
        modalTitle.textContent = title;
        modalBody.textContent = body;
        modal.style.display = "block";
    }

    modalClose.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Attach showModal function to global scope
    window.showModal = showModal;

    // Filter functionality
    window.filterComponent = function(component) {
        const rows = document.querySelectorAll("table tr");
        rows.forEach(row => {
            if (component === 'all') {
                row.style.display = "";
            } else if (row.id === component) {
                row.style.display = "";
            } else if (row.querySelector("th")) {
                row.style.display = ""; // Keep the header row visible
            } else {
                row.style.display = "none";
            }
        });
    }
});                                                                                                                                                              