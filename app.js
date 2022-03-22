function hamburgerHover() {
    console.log("clicked")
    var menu = document.getElementById("pop-out-menu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
    }