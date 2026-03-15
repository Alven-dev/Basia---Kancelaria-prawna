
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
    const modalText = document.getElementById("modalText");
    const offerData = {
      rodzinne: {
        title: "Prawo Rodzinne",
        text: "Pomoc prawna w sprawach z zakresu prawa rodzinnego, w szczególności prowadzenie spraw rozwodowych (zarówno z orzekaniem o winie, jak i bez), spraw o separację, alimenty oraz ich podwyższenie lub obniżenie. Reprezentacja w postępowaniach dotyczących władzy rodzicielskiej, ustalenia kontaktów z dzieckiem, ustalenia miejsca zamieszkania dziecka oraz ograniczenia lub pozbawienia władzy rodzicielskiej. Prowadzenie spraw o podział majątku wspólnego po rozwodzie, przygotowywanie pism procesowych, wniosków i pozwów oraz kompleksowa reprezentacja przed sądem rodzinnym."
      },
      cywilne: {
        title: "Prawo Cywilne",
        text: "Prowadzenie spraw z zakresu prawa cywilnego, w tym dochodzenie roszczeń majątkowych, spraw o zapłatę oraz windykację należności. Pomoc w uzyskaniu odszkodowań i zadośćuczynień za poniesione szkody majątkowe i niemajątkowe. Sporządzanie, analiza i opiniowanie umów cywilnoprawnych, w tym umów sprzedaży, najmu czy umów o świadczenie usług. Reprezentacja klientów w sporach sądowych dotyczących nieruchomości, zobowiązań oraz innych spraw cywilnych, a także doradztwo prawne w zakresie praw i obowiązków wynikających z przepisów prawa cywilnego."
      },
      karne: {
        title: "Prawo Karne",
        text: "Obrona osób podejrzanych i oskarżonych w sprawach karnych na każdym etapie postępowania – od postępowania przygotowawczego prowadzonego przez policję lub prokuraturę, aż po postępowanie sądowe. Reprezentacja osób pokrzywdzonych przestępstwem w charakterze oskarżyciela posiłkowego. Udział w przesłuchaniach, sporządzanie wniosków dowodowych, apelacji oraz innych środków odwoławczych. Pomoc w sprawach o przestępstwa gospodarcze, przestępstwa przeciwko mieniu, zdrowiu i życiu, a także obrona w sprawach o wykroczenia."
      },
      przedsiębiorców: {
        title: "Prawo Przedsiębiorców",
        text: "Kompleksowa obsługa prawna przedsiębiorców oraz osób prowadzących działalność gospodarczą. Pomoc w zakładaniu działalności gospodarczej oraz spółek, przygotowywanie i opiniowanie umów handlowych oraz innych dokumentów związanych z prowadzeniem biznesu. Reprezentacja przedsiębiorców w sporach z kontrahentami, w tym w sprawach o zapłatę oraz dochodzenie należności. Doradztwo prawne w zakresie bieżącego funkcjonowania firmy, identyfikacji ryzyk prawnych oraz przygotowywanie regulaminów i dokumentacji wymaganej w działalności gospodarczej."
      },
      medyczne: {
        title: "Prawo Medyczne",
        text: "Pomoc prawna w sprawach dotyczących błędów medycznych oraz naruszenia praw pacjenta. Reprezentacja pacjentów w postępowaniach dotyczących odpowiedzialności cywilnej placówek medycznych oraz personelu medycznego. Analiza dokumentacji medycznej oraz wsparcie w dochodzeniu odszkodowań i zadośćuczynień za szkody powstałe w wyniku niewłaściwego leczenia. Doradztwo prawne na etapie przedsądowym oraz reprezentacja klientów w postępowaniach sądowych i przed właściwymi instytucjami."
      },
      mediacje: {
        title: "Mediacje",
        text: "Prowadzenie mediacji jako alternatywnej metody rozwiązywania sporów, umożliwiającej osiągnięcie porozumienia bez konieczności długotrwałego postępowania sądowego. Pomoc w prowadzeniu mediacji w sprawach rodzinnych, cywilnych oraz gospodarczych. Wsparcie stron w wypracowaniu satysfakcjonującego rozwiązania konfliktu, przygotowanie projektów ugód mediacyjnych oraz udział w mediacjach prowadzonych na podstawie skierowania przez sąd lub z inicjatywy stron."
      }
    }


    function openModal() {
      offerBox.forEach(function(card) {
        card.addEventListener("click", function() {
          modal.style.display = "block";
          modalTitle.innerText = this.dataset[offerData];
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
