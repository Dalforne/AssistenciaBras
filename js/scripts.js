    var autoSlideActive = true;
    var resetAutoSlideTimeout;

    document.addEventListener("DOMContentLoaded", function() {
        var carousels = document.querySelectorAll('.carrossel');

        carousels.forEach(function(carousel) {
            let initialScrollLeft = carousel.scrollLeft;
            carousel.addEventListener('scroll', function() {
                if (carousel.scrollLeft !== initialScrollLeft) {
                    autoSlideActive = false;
                    initialScrollLeft = carousel.scrollLeft;

                    // Clear any existing timeout
                    clearTimeout(resetAutoSlideTimeout);

                    // Set a new timeout to re-enable autoSlide
                    resetAutoSlideTimeout = setTimeout(function() {
                        autoSlideActive = true;
                    }, 5000); // Re-enable after 5 seconds of inactivity
                }
            });

            if (window.innerWidth < 900) {
                var slides = carousel.getElementsByTagName('div');
                var currentIndex = 0;
                var timeInterval = 3000;

                function updateSlide() {
                    if (autoSlideActive) {
                        carousel.scrollLeft = slides[currentIndex].offsetLeft;
                        currentIndex++;
                        if (currentIndex >= slides.length) {
                            currentIndex = 0;
                        }
                    }
                }

                setInterval(function() {
                    updateSlide();
                }, timeInterval);
            }
        });

        function moveLeft(carousel) {
            carousel.scrollLeft -= carousel.offsetWidth;
            autoSlideActive = false;
        }

        function moveRight(carousel) {
            carousel.scrollLeft += carousel.offsetWidth;
            autoSlideActive = false;
        }
    });

    document.querySelector('.menu-mobile-topo').addEventListener('click', function() {
        var menu = document.getElementById('menuPortal');
        if (menu.style.maxHeight){
            menu.style.maxHeight = null;
        } else {
            menu.style.maxHeight = menu.scrollHeight + "px";
        } 
    });