  // Menu hamburger
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  function toggleMenu() {
      // your code here
      navLinks.classList.toggle('active');
      console.log("Menu button clicked!");
  }

  menuBtn.addEventListener('click', toggleMenu);



  window.addEventListener('scroll', function() {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
          navbar.style.padding = '15px 40px';
          navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
          navbar.style.padding = '20px 40px';
          navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
      }
  });

  // Animation au chargement de la page
  document.addEventListener('DOMContentLoaded', function() {
      // Animation des cartes de services
      setTimeout(function() {
          const cards = document.querySelectorAll('.service-card');
          for (let i = 0; i < cards.length; i++) {
              setTimeout(function() {
                  const card = cards[i];
                  card.style.opacity = 0;
                  card.style.transform = 'translateY(50px)';
                  card.style.transition = 'all 0.5s ease';

                  setTimeout(function() {
                      card.style.opacity = 1;
                      card.style.transform = 'translateY(0)';
                  }, 100);
              }, i * 200);
          }
      }, 500);
  });