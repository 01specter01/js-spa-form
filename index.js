document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const input = document.querySelectorAll("input");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const vorNameCheck = form.elements.vorName.value;
        if (vorNameCheck.includes("xxa")) {
            console.log(true);
        } else {
            console.log(false);
        }
    });
});
