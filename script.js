// ------------------------------
// WEDDING COUNTDOWN
// ------------------------------

const weddingDate = new Date("2027-06-12T14:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML =
            "<h3>Today is the day! ❤️</h3>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(3, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


// ------------------------------
// SCROLL REVEAL ANIMATIONS
// ------------------------------

const revealElements = document.querySelectorAll(
    ".intro, .countdown-section, .details-section, .rsvp-content, .section-content, .detail-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    observer.observe(element);
});


// ------------------------------
// MOBILE VIDEO PERFORMANCE
// ------------------------------

const videos = document.querySelectorAll(".background-video");

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    videos.forEach(video => video.pause());
} else {
    const videoObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {
            const video = entry.target;

            if (entry.isIntersecting) {
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        });

    }, {
        threshold: 0.1
    });

    videos.forEach(video => videoObserver.observe(video));
}
