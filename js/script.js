// $('header').hide();
// setTimeout(function() {
//   $('header').slideDown(1000);
// }, 1000);

const navbar = document.getElementsByClassName('bg-dark');
    let scrolled = false;

    window.onscroll = function() {
      if(window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if (!scrolled) {
          navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(function() {
          navbar.style.transform = 'translateY(0)';
          scrolled = true;
        }, 200);
      } else {
        navbar.classList.add('top');
        scrolled = false;
      }
    }
