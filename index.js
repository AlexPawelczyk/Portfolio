$(document).ready(function(e){
  $win = $(window);
  $navbar = $('#header');
  $toggle = $('.toggle-button');
  var width = $navbar.width();
  toggle_onclick($win, $navbar, width);

  // resize event
  $win.resize(function(){
      toggle_onclick($win, $navbar, width);
  });

  $toggle.click(function(e){
      $navbar.toggleClass("toggle-left");
  })

});

function toggle_onclick($win, $navbar, width){
  if($win.width() <= 768){
      $navbar.css({left: `-${width}px`});
  }else{
      $navbar.css({left: '0px'});
  }
}

var typed = new Typed('#typed' , {
  strings: [
      'Welcome to my portfolio!'
  ],
  typeSpeed: 25,
  backSpeed: 45,
  loop: false
});

var typed_2 = new Typed('#typed_2' , {
  strings: [
      'am a current graduate student.',
      'have a passion for computer science.',
      'enjoy learning new skills and technologies.',
      'am ready to make a difference at your company!'
  ],
  typeSpeed: 25,
  backSpeed: 35,
  loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
  anchor.addEventListener('click', function(e){
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
