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


  //36:40


});

function toggle_onclick($win, $navbar, $width) {
  if($win.width() <= 768) {
    $navbar.css({left: "-200px"});
  } else {
    $navbar.css({left: "0px"});
  }
}