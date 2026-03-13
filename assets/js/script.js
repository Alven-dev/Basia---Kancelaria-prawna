
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault()

      const target = document.querySelector(this.getAttribute('href'))

      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function (){
    const burger = document.querySelector(".burger");
    const navbar = document.getElementById("mobile-navbar");
    const span = document.querySelectorAll(".burger span");
    const scrollLink = document.querySelectorAll(".scroll-link")

    burger.addEventListener("click", function() {
      burger.classList.toggle("active");
      navbar.classList.toggle("active");
      burgerMenuVerifier()
    });
    
    function burgerMenuVerifier() {
      scrollLink.forEach(function(link) {
        link.addEventListener("click", function() {
            burger.classList.remove("active");
            navbar.classList.remove("active");
        });
      });
    }
  });

 