document.addEventListener("DOMContentLoaded", function() {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeBtn");

  burger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  }, { passive: true });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  }, { passive: true });

  document.querySelectorAll(".mobile-menu-links a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    }, { passive: true });
  });

  //отзывы обратная связь

  const feedbackForm = document.getElementById("feedbackForm");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      // отправка данных на сервер

      alert("Сообщение отправлено!");
      this.reset();
    });
  }
});