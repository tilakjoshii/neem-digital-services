
$(document).ready(function () {
  $(".emp_tab_ul li").hover(function () {
    // Hover-in event
    var index = $(this).index();
    $(".emp_tab_ul li").removeClass("active");
    $(this).addClass("active");

    $(".dgtl_strtgy_lst").removeClass("active");
    $(".dgtl_strtgy_lst").eq(index).addClass("active");
  });

  $(".dgtl_prtner_lst").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4e3,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 600, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  });
  $(".dgtl_prks_sldr").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2e3,
    arrows: true,
    dots: false,
    pauseOnHover: false,
  });
  $(".dgtl_smm_sldr").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2e3,
    arrows: true,
    dots: false,
    pauseOnHover: false,
  });
  
});
