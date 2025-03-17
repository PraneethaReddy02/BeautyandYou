// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        if (this.getAttribute('href').startsWith("#")) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Falling Flowers Animation
function createFlower() {
    const flower = document.createElement('img');
    flower.src = 'https://imgur.com/MidHRdo.png'; // Transparent Flower Image
    flower.classList.add('flower');
    
    // Random starting position and size
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.width = (Math.random() * 20 + 20) + 'px'; // Random width between 20px-40px
    flower.style.position = 'fixed';
    flower.style.top = '-50px'; // Start above the screen
    flower.style.opacity = 0.8;
    flower.style.pointerEvents = 'none';

    // Random animation duration
    const duration = Math.random() * 5 + 3 + 's';
    flower.style.animation = `fall ${duration} linear`;

    document.body.appendChild(flower);

    // Remove the flower after animation ends
    setTimeout(() => flower.remove(), 7000);
}

// Generate falling flowers every 700ms
setInterval(createFlower, 700);

// CSS Animation for Falling Flowers
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        from {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
        }
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
