//Smooth scrolling function
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(document).ready(function(){
    // Slick carousel initialization
    $('.cardlist').slick({
        slide: 'li',
        slidesToShow: 5,      
        slidesToScroll: 1,   
        infinite: true,       
        arrows: true,         
        dots: true,           
        autoplay: true,       
        autoplaySpeed: 2000,  
        responsive: [         
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Hamburger menu toggle functionality
    $('.hamburger').on('click', function() {
        $('.nav-links').toggleClass('active'); 
    });
});
