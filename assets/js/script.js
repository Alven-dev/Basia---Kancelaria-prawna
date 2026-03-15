
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
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const offerData = {
      rodzinne: {
        title: "Prawo Rodzinne",
        list: [
        "Prowadzenie spraw rozwodowych (z orzekaniem o winie lub bez)",
        "Sprawy o separację",
        "Sprawy o alimenty oraz ich podwyższenie lub obniżenie",
        "Ustalenie kontaktów z dzieckiem",
        "Ustalenie miejsca zamieszkania dziecka",
        "Ograniczenie lub pozbawienie władzy rodzicielskiej",
        "Podział majątku wspólnego po rozwodzie",
        "Przygotowywanie pism procesowych, pozwów i wniosków",
        "Reprezentacja przed sądem rodzinnym"
        ]
      },
      cywilne: {
        title: "Prawo Cywilne",
        list: [
        "Sprawy o zapłatę i dochodzenie roszczeń majątkowych",
        "Windykacja należności",
        "Odszkodowania i zadośćuczynienia za szkody majątkowe i niemajątkowe",
        "Sporządzanie i analiza umów cywilnoprawnych",
        "Umowy sprzedaży, najmu i umowy o świadczenie usług",
        "Reprezentacja w sporach dotyczących nieruchomości",
        "Reprezentacja w sporach dotyczących zobowiązań",
        "Doradztwo prawne w zakresie prawa cywilnego"
        ]
      },
      karne: {
        title: "Prawo Karne",
        list: [
        "Obrona osób podejrzanych i oskarżonych w sprawach karnych",
        "Reprezentacja na etapie postępowania przygotowawczego",
        "Reprezentacja przed sądem karnym",
        "Reprezentacja pokrzywdzonych jako oskarżyciela posiłkowego",
        "Udział w przesłuchaniach",
        "Sporządzanie wniosków dowodowych",
        "Przygotowywanie apelacji i środków odwoławczych",
        "Sprawy o przestępstwa gospodarcze",
        "Sprawy o przestępstwa przeciwko mieniu, zdrowiu i życiu",
        "Obrona w sprawach o wykroczenia"
        ]
      },
      przedsiębiorców: {
        title: "Prawo Przedsiębiorców",
        list: [
        "Kompleksowa obsługa prawna przedsiębiorców",
        "Pomoc w zakładaniu działalności gospodarczej",
        "Pomoc w zakładaniu spółek",
        "Przygotowywanie i analiza umów handlowych",
        "Tworzenie dokumentów związanych z prowadzeniem działalności",
        "Reprezentacja przedsiębiorców w sporach z kontrahentami",
        "Sprawy o zapłatę i dochodzenie należności",
        "Doradztwo w zakresie bieżącego funkcjonowania firmy",
        "Identyfikacja ryzyk prawnych w działalności gospodarczej",
        "Przygotowywanie regulaminów i dokumentacji firmowej"
        ]
      },
      medyczne: {
        title: "Prawo Medyczne",
        list: [
        "Sprawy dotyczące błędów medycznych",
        "Sprawy dotyczące naruszenia praw pacjenta",
        "Reprezentacja pacjentów w sporach z placówkami medycznymi",
        "Reprezentacja w sporach z personelem medycznym",
        "Analiza dokumentacji medycznej",
        "Dochodzenie odszkodowań za błędy medyczne",
        "Dochodzenie zadośćuczynień za szkody zdrowotne",
        "Doradztwo prawne na etapie przedsądowym",
        "Reprezentacja przed sądem i właściwymi instytucjami"
        ]
      },
      mediacje: {
        title: "Mediacje",
        list: [
        "Prowadzenie mediacji jako alternatywy dla postępowania sądowego",
        "Mediacje w sprawach rodzinnych",
        "Mediacje w sprawach cywilnych",
        "Mediacje w sprawach gospodarczych",
        "Pomoc w osiągnięciu porozumienia między stronami",
        "Wsparcie w wypracowaniu satysfakcjonującego rozwiązania konfliktu",
        "Przygotowywanie projektów ugód mediacyjnych",
        "Mediacje prowadzone na podstawie skierowania przez sąd",
        "Mediacje prowadzone z inicjatywy stron"
        ]
      }
    }


    function openModal() {
      offerBox.forEach(function(card) {
        card.addEventListener("click", function() {

          const type = this.dataset.offer;
          const data = offerData[type];

          modal.style.display = "block";

          modalTitle.innerText = data.title
          
          modalText.innerHTML = ""

          data.list.forEach(function(item) {
            const li = document.createElement("li")
            li.innerText = item

            modalText.appendChild(li)
          });
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
