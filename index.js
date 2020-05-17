$(document).ready(function(e) {
  $win = $(window);
  $navbar = $("#header");
  $toggle = $(".toggle-button");
  var width = $navbar.width();
  toggle_onclick($win, $navbar, width);

  // resize event
  $win.resize(function() {
    toggle_onclick($win, $navbar, width);
  });

  // click on toggle (hamburger) button
  $toggle.click(function(e) {
    $navbar.toggleClass("toggle-left");
  });
});

function toggle_onclick($win, $navbar, $width) {
  if($win.width() <= 768) {
    $navbar.css({left: "-200px"});
  } else {
    $navbar.css({left: "0px"});
  }
}

var options = {
  strings: ['Welcome to my portfolio!'],
  typeSpeed: 40,
  backSpeed: 50 /*,
  loop: true */
}
var typed = new Typed("#typed", options);

var options_2 = {
  strings: ['I am a computer science enthusiast!'],
  typeSpeed: 40,
  backSpeed: 50 /*,
  loop: true */
}
var typed_2 = new Typed("#typed_2", options_2);