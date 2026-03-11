
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

    burger.addEventListener("click", function() {
      burger.classList.toggle("active");
      navbar.classList.toggle("active");
      colorSwap()
    });
    
    function colorSwap() {
      span.forEach(function(el) {
      if (burger.classList.contains("active")) {
          el.style.backgroundColor = "#eaeaea";
      } else {
        el.style.backgroundColor = "#333"
      }
    });
  }
});

 