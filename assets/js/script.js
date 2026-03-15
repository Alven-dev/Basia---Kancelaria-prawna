
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

  document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navbar = document.getElementById("mobile-navbar");
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

  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("offer-modal");
    const offerBox = document.querySelectorAll(".specialization-box");
    const modalClose = document.getElementById("modal-close");
    const modalContent = document.querySelector(".modal-content");

    function openModal() {
      offerBox.forEach(function(card) {
        card.addEventListener("click", function() {
          modal.style.display = "block";
        })
      })
    }
    function closeModal() {
      modalClose.addEventListener("click", function() {
        if (modal.style.display === "block") {
          modal.style.display = "none";
        } else {modal.style.display = "block"}
      })
    }
    closeModal()
    openModal()

    modal.addEventListener("click", function() {
      modal.style.display = "none";
    });

    modalContent.addEventListener("click", function(event) {
      event.stopPropagation();
    });

    document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
  });
  });

 