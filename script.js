// $(".nav-link").hover(
//   function () {
//   $(this).addClass("active");
// },
//   function () {
//   $(this).removeClass("active");
// }
// )
// $("#tabs_01").hover(function () {
//   $(this).addClass("active");

//   $(".tabs_01").addClass("active");

//   $(".tabs_03").removeClass("active");
//   $(".tabs_04").removeClass("active");
//   $(".tabs_02").removeClass("active");
//   $("#tabs_03").removeClass("active");
//   $("#tabs_04").removeClass("active");
//   $("#tabs_02").removeClass("active");
// });
// $("#tabs_02").hover(function () {
//   $(".tabs_02").addClass("active");
//   $(this).addClass("active");

//   $(".tabs_01").removeClass("active");
//   $(".tabs_03").removeClass("active");
//   $(".tabs_04").removeClass("active");
//   $("#tabs_01").removeClass("active");
//   $("#tabs_03").removeClass("active");
//   $("#tabs_04").removeClass("active");
// });
// $("#tabs_03").hover(function () {
//   $(".tabs_03").addClass("active");
//   $(this).addClass("active");

//   $(".tabs_02").removeClass("active");
//   $(".tabs_01").removeClass("active");
//   $(".tabs_04").removeClass("active");
//   $("#tabs_02").removeClass("active");
//   $("#tabs_01").removeClass("active");
//   $("#tabs_04").removeClass("active");
// });
// $("#tabs_04").hover(function () {
//   $(".tabs_04").addClass("active");
//   $(this).addClass("active");

//   $(".tabs_03").removeClass("active");
//   $(".tabs_01").removeClass("active");
//   $(".tabs_02").removeClass("active");
//   $("#tabs_03").removeClass("active");
//   $("#tabs_01").removeClass("active");
//   $("#tabs_02").removeClass("active");
// });
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
