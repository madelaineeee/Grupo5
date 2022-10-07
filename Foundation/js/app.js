$(document).foundation();

var prev = 0;
var $window = $(window);
var nav = $(".scrollhide-nav");

$window.on("scroll", function () {
  var scrollTop = $window.scrollTop();
  nav.toggleClass("hidden", scrollTop > prev);
  prev = scrollTop;
});

$(".breadcrumb-counter-nav-item").click(function () {
  $(".breadcrumb-counter-nav-item").removeClass("current");
  $(this).addClass("current");
});
