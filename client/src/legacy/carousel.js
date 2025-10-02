// Simple Carousel Navigation Handler
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.product-carousel--ct');
    
    carousels.forEach(carousel => {
        const list = carousel.querySelector('.product-carousel--ct__list');
        const items = carousel.querySelectorAll('.product-carousel--ct__item');
        const prevBtn = carousel.querySelector('.carousel-nav--prev');
        const nextBtn = carousel.querySelector('.carousel-nav--next');
        
        if (!list || !items.length || !prevBtn || !nextBtn) return;
        
        let currentIndex = 0;
        const itemsPerView = 4;
        const maxIndex = Math.max(0, items.length - itemsPerView);
        
        function updateCarousel() {
            const itemWidth = items[0].offsetWidth;
            const gap = 20;
            const translateX = -(currentIndex * (itemWidth + gap));
            list.style.transform = `translateX(${translateX}px)`;
            
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
        }
        
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        });
        
        // Initial setup
        updateCarousel();
        
        // Update on window resize
        window.addEventListener('resize', updateCarousel);
    });
});
