jQuery(document).ready(function () {
  // Load the header dynamically
  $("#header-component").load("header.html", function (response, status, xhr) {
    if (status === "error") {
      console.error("Error loading header:", xhr.status, xhr.statusText);
    } else {
      console.log("Header loaded successfully.");

      function activeMenu(id) {
        $('.header-links .nav-link')[id].classList.add('active');
      }
      
      switch (window.location.pathname) {
        case "/index.html":
          activeMenu(0);
          break;
        case "/recipes.html":
        case "/recipe.html":
          activeMenu(1);
          break;
        case "/aboutus.html":
          activeMenu(2);
          break;
      }
    }
  });

  // Load the footer dynamically
  $("#footer-component").load("footer.html", function (response, status, xhr) {
    if (status === "error") {
      console.error("Error loading footer:", xhr.status, xhr.statusText);
    } else {
      console.log("Footer loaded successfully")

      // form validation
      $(".needs-validation").on("submit", (e) => {
        e.preventDefault();

        let hasError = false;
        if ($('#name').val() === "") {
          $('.invalid-name').show();
          hasError = true;
        } else {
          $('.invalid-name').hide();
        }
        if ($('#email').val() === "") {
          $('.invalid-email').show()
          hasError = true;
        } else {
          $('.invalid-email').hide();
        }

        if (hasError === false) {
          alert("E-mail subscribed successfully!")
        }
      })

    }
  });
});
