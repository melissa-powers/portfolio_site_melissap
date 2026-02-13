console.log("Welcome to Melissa Powers' Portfolio! 🌿 Crafting calm, user-centered experiences.");

// ===================================
// MOBILE MENU TOGGLE
// ===================================
$(document).ready(function() {

  // Toggle mobile menu
  $('.hamburger-menu').on('click', function() {
    $(this).toggleClass('active');
    $('nav').toggleClass('active');
  });

  // Close menu when a nav link is clicked
  $('.nav-menu a').on('click', function() {
    $('.hamburger-menu').removeClass('active');
    $('nav').removeClass('active');
  });

  // ===================================
  // SMOOTH SCROLLING
  // ===================================
  // Smooth scroll for anchor links
  $('a[href*="#"]').on('click', function(e) {
    // Only apply to links with # in the same page
    if (this.hash !== '') {
      const hash = this.hash;

      // Check if target exists
      if ($(hash).length) {
        e.preventDefault();

        $('html, body').animate({
          scrollTop: $(hash).offset().top - 80 // 80px offset for fixed header
        }, 800, function() {
          // Optional: Update URL without jumping
          // window.location.hash = hash;
        });
      }
    }
  });

});
