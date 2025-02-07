document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("instagram-toggle").addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("instagram-options").classList.toggle("show");
    });
  });
  
