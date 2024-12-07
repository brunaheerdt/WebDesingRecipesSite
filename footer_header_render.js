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
      console.log("Header loaded successfully")
    }
  });
});