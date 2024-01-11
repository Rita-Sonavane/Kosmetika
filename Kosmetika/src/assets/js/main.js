(function ($) {
    "use strict";




    /**Sub Menu */
    $(document).ready(function () {
        $('.navbar-toggler').click(function () {
            $('.navbar-collapse').slideToggle(300);
        });

        smallScreenMenu();
        let temp;
        function resizeEnd() {
            smallScreenMenu();
        }

        $(window).resize(function () {
            clearTimeout(temp);

            temp = setTimeout(resizeEnd, 100);
            // resetMenu();
        });
    });



    function smallScreenMenu() {
        if ($(window).innerWidth() <= 992) {
            $('.menu-link').off('click');
            $('.menu-link').click(function () {
                $(this).next().slideToggle();
            });
        } else {
            $('.menu-link').off('click');
        }
    }
    /**End */










    //Top Prducts

    $(document).ready(function () {
        let sortBtn = $('.filter-menu').children();
        let sortItem = $('.filter-item').children();

        for (let i = 0; i < sortBtn.length; i++) {

            sortBtn[i].addEventListener('click', function (e) {
                // console.log("check length", sortBtn[i])

                for (let j = 0; j < sortBtn.length; j++) {

                    sortBtn[j].classList.remove('current');
                }
                this.classList.add('current');
                let targetData = this.getAttribute('data-target');
                for (let k = 0; k < sortItem.length; k++) {
                    $(sortItem[k]).css("display", "none")
                    // sortItem[k].classList.remove('active');
                    // sortItem[k].classList.add('delete');
                    if (sortItem[k].getAttribute('data-item') == targetData || targetData == "all") {
                        // sortItem[k].classList.remove('delete');
                        $(sortItem[k]).css("display", "block")
                        console.log($(sortItem[k]))
                        // sortItem[k].classList.add('active');
                        // $(sortItem[k]).css("display","")
                    }
                }
            });
        }
    });
    //








    //Product slider Home page
    $(document).ready(function () {
        $('#prev').on('click', function () {
            $('#cards').animate({
                scrollLeft: '-=500'
            }, 500, 'swing');
        });

        $('#next').on('click', function () {
            $('#cards').animate({
                scrollLeft: '+=500'
            }, 500, 'swing');
        });
    });

    //







    //Product Detail section Zoom

    $(document).ready(function () {
        const imgs = document.querySelectorAll('.img-select a');
        console.log("imgs",imgs)
        const imgBtns = [...imgs];
        let imgId = 1;
        
        imgBtns.forEach((imgItem) => {
            imgItem.addEventListener('click', (event) => {
                event.preventDefault();
                imgId = imgItem.dataset.id;
                slideImage();
            });
        });
        
        function slideImage(){
            const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
        
            document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
        }
        
        window.addEventListener('resize', slideImage);
    });

    //Product Detail section Zoom End











    //banner slider
    $(document).ready(function () {
        const slides = document.querySelectorAll('.slider-container .slide');
        const eraser = document.querySelector('.eraser'); // the eraser
        const prev = document.getElementById('previous'); // previous button
        const next = document.getElementById('next'); // next button
        const intervalTime = 6000; // time until nextSlide triggers in miliseconds
        const eraserActiveTime = 500; // time to wait until the .eraser goes all the way
        let sliderInterval; // variable used to save the setInterval and clear it when needed


        const nextSlide = () => {
            // Step 1. Add the .active class to the eraser - this will trigger the eraser to move to the left.
            eraser.classList.add('active');
            // Step 2. Set a timeout that will allow the eraser to move all the way to the left. This is where we'll use the eraserActiveTime - it has to be the same as the CSS value we mentioned above.
            setTimeout(() => {
                // Step 3. Get the active .slide and toggle the .active class on it (in this case, remove it).
                const active = document.querySelector('.slide.active');
                active.classList.toggle('active');
                // Step 4. Check to see if the .slide has a next element sibling available. If it has, add the .active class to it.
                if (active.nextElementSibling) {
                    active.nextElementSibling.classList.toggle('active');
                } else {
                    // Step 5. If it's the last element in the list, add the .active class to the first slide (the one with index 0).
                    slides[0].classList.toggle('active');
                }
                // Step 6.Remove the .active class from the eraser - this will trigger the eraser to move back to the right. It also waits 200 ms before doing this (just to give enough time for the next .slide to move in place).
                setTimeout(() => {
                    eraser.classList.remove('active');
                }, 180);
            }, eraserActiveTime);
        }














        //Button functionality
        const prevSlide = () => {
            eraser.classList.add('active');
            setTimeout(() => {
                const active = document.querySelector('.slide.active');
                active.classList.toggle('active');
                // The *changed* part from the nextSlide code
                if (active.previousElementSibling) {
                    active.previousElementSibling.classList.toggle('active');
                } else {
                    slides[slides.length - 1].classList.toggle('active');
                }
                // End of the changed part
                setTimeout(() => {
                    eraser.classList.remove('active');
                }, 180);
            }, eraserActiveTime);
        }

        next.addEventListener('click', () => {
            console.log("slides", slides);
            nextSlide();
            clearInterval(sliderInterval);
            sliderInterval = setInterval(nextSlide, intervalTime);
        });

        prev.addEventListener('click', () => {
            prevSlide();
            clearInterval(sliderInterval);
            sliderInterval = setInterval(nextSlide, intervalTime);
        });

        sliderInterval = setInterval(nextSlide, intervalTime);

        // Initial slide
        setTimeout(nextSlide, 500);
    });














    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });












    // Product Quantity
    $(document).ready(function () {
        $('.quantity button').on('click', function () {
            console.log("Inside lajs")
            var button = $(this);
            var oldValue = button.parent().parent().find('input').val();
            if (button.hasClass('btn-plus')) {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 0;
                }
            }
            button.parent().parent().find('input').val(newVal);
        });
    });














    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });



















    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });





















    // $(document).ready(function () {
    $($('.banner-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        mouseDrag: false,
        autoplay: true,
        animateOut: 'slideOutUp',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    }))
    // });





})(jQuery);

