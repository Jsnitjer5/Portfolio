document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  });

  document.querySelectorAll(".observe").forEach((section) => {
    observer.observe(section);
  });
});

document.querySelectorAll('[type="radio"].peer').forEach((radio) => {
  radio.addEventListener('change', (event) => {
    if (event.target.checked) {
      console.log(`${event.target.id} is selected.`);
    }
  });
});

function toggleMenu() {
  var menu = document.getElementById("mobileMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

(function() {
  emailjs.init('E6c-Qk6pEdEsrbR2F');
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_ejhhrll', 'template_sefbap9', this)
      .then(() => {
        const alertBox = document.createElement('div');
        alertBox.textContent = 'Bericht succesvol verzonden!';
        alertBox.className = 'fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg z-50';
        document.body.appendChild(alertBox);

        setTimeout(() => {
          alertBox.remove();
        }, 3000);

        this.reset();
      }, (error) => {
        const alertBox = document.createElement('div');
        alertBox.textContent = 'Er is iets misgegaan. Probeer het opnieuw.';
        alertBox.className = 'fixed bottom-4 right-4 bg-red-500 text-white py-2 px-4 rounded shadow-lg z-50';
        document.body.appendChild(alertBox);

        setTimeout(() => {
          alertBox.remove();
        }, 3000);

        console.log('FAILED...', error);
      });
  });
}
