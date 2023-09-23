//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');

        let currentIndex = 0;

        nextButton.addEventListener('click', () => {
            if (currentIndex < circles.length - 1) {
                currentIndex++;
                updateProgressBar();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateProgressBar();
            }
        });

        function updateProgressBar() {
            circles.forEach((circle, index) => {
                if (index === currentIndex) {
                    circle.classList.add('active');
                } else {
                    circle.classList.remove('active');
                }
            });

            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === circles.length - 1;
        }