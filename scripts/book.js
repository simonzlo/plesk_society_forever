$(window).scroll(function(){
  setTimeout(book(), 10000)
});

function book() {
  $(".bookmark").css({"margin-top": ($(window).scrollTop()) + "px", "margin-left":($(window).scrollLeft() - 0) + "px"});
}
