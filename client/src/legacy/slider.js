$(document).ready(function () {
    $('.hero-slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4500,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false,
        adaptiveHeight: false
    });

    $('.cate-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: true,
        speed: 500,
        prevArrow:
            '<button type="button" class="cate-arrow cate-prev" aria-label="Previous"><i class="fa-solid fa-arrow-left"></i></i></button>',
        nextArrow:
            '<button type="button" class="cate-arrow cate-next" aria-label="Next"><i class="fa-solid fa-arrow-right"></i></i></button>',
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } }

        ]
    });
    $('.brew-grid,.product-carousel__list').slick({
        slidesToShow: 3.7,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: true,
        speed: 500,
        prevArrow:
            '<button type="button" class="cate-arrow cate-prev" aria-label="Previous"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow:
            '<button type="button" class="cate-arrow cate-next" aria-label="Next"><i class="fa-solid fa-arrow-right"></i></button>',
        appendArrows: '.product-carousel__viewport',
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3.7 } },
            { breakpoint: 992, settings: { slidesToShow: 2.7 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } }
        ]
    });

    // Recently viewed section (without tabs)
    $('.p-c--ct .product-carousel--ct__list').slick({
        slidesToShow: 3.7,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: true,
        speed: 500,
        prevArrow:
            '<button type="button" class="cate-arrow cate-prev" aria-label="Previous"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow:
            '<button type="button" class="cate-arrow cate-next" aria-label="Next"><i class="fa-solid fa-arrow-right"></i></button>',
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3.7, dots: true } },
            { breakpoint: 992, settings: { slidesToShow: 2.7, dots: true } },
            { breakpoint: 768, settings: { slidesToShow: 2, dots: true } }
        ]
    });

    // Elevate your brew experience section (with tabs)
    $('.product-carousel--ct-upsell:not(.p-c--ct) .product-carousel--ct__list').slick({
        slidesToShow: 3.7,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: true,
        speed: 500,
        prevArrow:
            '<button type="button" class="cate-arrow cate-prev" aria-label="Previous"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow:
            '<button type="button" class="cate-arrow cate-next" aria-label="Next"><i class="fa-solid fa-arrow-right"></i></button>',
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3.7, dots: true } },
            { breakpoint: 992, settings: { slidesToShow: 2.7, dots: true } },
            { breakpoint: 768, settings: { slidesToShow: 2, dots: true } }
        ]
    });

    $('.brands-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768, // Mobile view
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: true,
                    prevArrow:
                        '<button type="button" class="brands-arrow slick-prev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>',
                    nextArrow:
                        '<button type="button" class="brands-arrow slick-next" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>',
                },
            },
        ],
    });

    $('.hero-in-section').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: true,
        speed: 600,
        prevArrow:
            '<button type="button" class="hin-arrow slick-prev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow:
            '<button type="button" class="hin-arrow slick-next" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.t-track').not('.slick-initialized').slick({
        slidesToShow: 3,
        slidesToScroll: 1,

        infinite: false,
        arrows: true,
        dots: true,
        speed: 500,
        prevArrow:
            '<button type="button" class="t-arrow t-prev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow:
            '<button type="button" class="t-arrow t-next" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } }
        ]
    });
    $('.kv__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: false,
        dots: true,
        arrows: true,
        prevArrow:
            '<button type="button" class="kv__arrow kv__arrow--prev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow:
            '<button type="button" class="kv__arrow kv__arrow--next" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false

                }
            }
        ]
    });
    if ($('.resources__slider').hasClass('slick-initialized')) {
        $('.resources__slider').slick('unslick');
    }

    $('.resources__slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1, rows: 2, arrows: false } },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 0.6,
                    slidesToScroll: 1,
                    rows: 1,
                    arrows: true,
                    dots: true,
                    prevArrow:
                        '<button type="button" class="resources__arrow resources__arrow--prev" aria-label="Previous"><i class="fa-solid fa-arrow-left"></i></button>',
                    nextArrow:
                        '<button type="button" class="resources__arrow resources__arrow--next" aria-label="Next"><i class="fa-solid fa-arrow-right"></i></button>'
                }
            }
        ]
    });

    // Recently viewed
$('.rv-carousel__list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 3 } },
    { breakpoint: 992,  settings: { slidesToShow: 2 } },
    { breakpoint: 640,  settings: { slidesToShow: 2 } } // <= Giữ 2 card trên mobile
  ]
});

// Upsell
const $upsell = $('.upsell-carousel__list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
  responsive: [
    { breakpoint: 1400, settings: { slidesToShow: 3 } },
    { breakpoint: 992,  settings: { slidesToShow: 2 } },
    { breakpoint: 640,  settings: { slidesToShow: 2 } } // <= Giữ 2 card trên mobile
  ]
});

});
