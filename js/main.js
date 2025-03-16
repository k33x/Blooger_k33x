const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
};

$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse"); /* 分辨jquery带$ */
  /** click event on toggle menu */
  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  }); /* 关于 */
  $(window).resize(function () {
    $nav.removeClass("collapse");
  });

  // 初始状态移除 collapse
  /*  $nav.removeClass("collapse"); */

  // owl-crousel for blog
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
      //取别名navText 是 Owl Carousel 提供的配置项，
      //直接支持将现有 DOM 元素的内容注入默认导航

      /*   var owl = $('.owl-carousel').owlCarousel
      ({ nav: false });自定义按钮
    $('.my-prev').click(function() {
    owl.trigger('prev.owl.carousel');
    }); */
    ],
    responsive: responsive, //轮播几个div块
  });

  // click to scroll top
  $(".move-up  ").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // AOS Instance
  AOS.init();
});
