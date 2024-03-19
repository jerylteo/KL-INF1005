function active() {
  // if current page is location.href, add "active" class
  var page = location.href;
  var links = document.querySelectorAll('.nav-link');
  for (var i = 0; i < links.length; i++) {
    if (links[i].href === page) {
      links[i].classList.add('active');
    }
  }
}

function topBtn() {
  var btn = $('#back-to-top');

  $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
          btn.addClass('show');
      } else {
          btn.removeClass('show');
      }
  });

  btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, '300');
  });
}

function validateForm() {
  var password = document.getElementById('password');
  var password2 = document.getElementById('password2');

  password2.addEventListener("input", ()=> {
    if (password.value != password2.value) {
      password2.setCustomValidity("Passwords Don't Match");
      return false;
    } else {
      password2.setCustomValidity("");
      return true;
    }
  }, false);
}


$(document).ready(function() {
  topBtn();
  active();
  validateForm();
});