//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentIndex = 0;

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === circles.length - 1;
    }

    updateButtons();

    nextButton.addEventListener("click", function () {
        if (currentIndex < circles.length - 1) {
            circles[currentIndex].classList.add("active");
            currentIndex++;
            circles[currentIndex].classList.add("active");
        }
        updateButtons();
    });

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            circles[currentIndex].classList.remove("active");
            currentIndex--;
            circles[currentIndex].classList.add("active");
        }
        updateButtons();
    });
});
