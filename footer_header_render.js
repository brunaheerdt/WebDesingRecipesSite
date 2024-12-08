$(document).ready(function () {
  // Load the header 
  $("#header-component").load("header.html", function (response, status, xhr) {
    if (status === "error") {
      console.error("Error loading header:", xhr.status, xhr.statusText);
    } else {
      console.log("Header loaded successfully.");
    }
  });

  // Load the footer 
  $("#footer-component").load("footer.html", function (response, status, xhr) {
    if (status === "error") {
      console.error("Error loading footer:", xhr.status, xhr.statusText);
    } else {
      console.log("Footer loaded successfully.");
    }
  });
});