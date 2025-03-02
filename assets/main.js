// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close Menu When a Link is Clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});




// Enable auto-scroll for the carousel
const myCarousel = document.getElementById('galleryCarousel');
const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000, // Change slide every 3 seconds
    wrap: true // Enable looping
});







$(document).ready(function() {

    $("[unique-script-id='w-w-dm-id'] .btn-box").click(function() {
      $(this).parent().children(".overlay").show();
  
    });
  
  
    $("[unique-script-id='w-w-dm-id'] .close").click(function() {
      $(".overlay").hide();
    });
  
    $("[unique-script-id='w-w-dm-id'] .list").click(function() {
      const value = $(this).attr('data-filter');
      if (value == 'all') {
        $("[unique-script-id='w-w-dm-id'] .squareImg").show('1000');
      } else {
        $("[unique-script-id='w-w-dm-id'] .squareImg").not('.' + value).hide('1000');
        $("[unique-script-id='w-w-dm-id'] .squareImg").filter('.' + value).show('1000');
      }
    })
    $("[unique-script-id='w-w-dm-id'] .list").click(function() {
      $(this).addClass('active').siblings().removeClass('active');
    })
  })





