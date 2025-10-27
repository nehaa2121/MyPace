// Display current date
const dateElement = document.getElementById("currentDate");
const today = new Date();
dateElement.textContent = today.toDateString();

// Save checkbox state to localStorage
const checkboxes = document.querySelectorAll("input[type=checkbox]");

checkboxes.forEach(checkbox => {
    // Load saved state
    const saved = localStorage.getItem(checkbox.id);
    if (saved === "true") {
        checkbox.checked = true;
    }

    // Save state on change
    checkbox.addEventListener("change", () => {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
});
