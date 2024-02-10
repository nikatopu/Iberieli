function switch_pages(new_page) {
  window.location.href = new_page;
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function open_dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

/*
 When scrolling down, the menu disappears
*/

var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  document.getElementById("heading").style.animationDuration = "0.25s";
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("heading").style.animationName = "show_heading";
    document.getElementById("heading").style.top = "0px";
  } else {
    document.getElementById("heading").style.animationName = "hide_heading";
    document.getElementById("heading").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
};
