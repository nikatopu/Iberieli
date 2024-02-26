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
    document.getElementById("heading").style.top = "-11svh";
  }
  prevScrollpos = currentScrollPos;
};

/*
  Change to the dark mode / light mode
*/
let color_names = {
  background: "--background-color",
  dark_background: "--background-color-darker",
  primary: "--primary-color",
  secondary: "--seconadry-color",
  accent: "--accent-color",
  text: "--text-color",
  button: "--active-button",
};

let color_scheme_light = {
  background: "#fffaf1",
  dark_background: "#f7f2ea",
  primary: "#d9993f",
  secondary: "#c4e990",
  accent: "#b2d9c4",
  text: "#1e1306",
  button: "#d9993f",
};

let color_scheme_dark = {
  background: "#0F0A00",
  dark_background: "#F9EEE1",
  primary: "#C08026",
  secondary: "#4A6F16",
  accent: "#274F39",
  text: "#F9EEE1",
  button: "#C08026",
};

var current_mode = "Light";
function change_property(name, input) {
  document.documentElement.style.setProperty(name, input);
}
function change_mode() {
  document.getElementById("lights").innerHTML = current_mode + " mode";
  if (current_mode === "Light") {
    change_property(color_names.background, color_scheme_dark.background);
    change_property(
      color_names.dark_background,
      color_scheme_dark.dark_background
    );
    change_property(color_names.primary, color_scheme_dark.primary);
    change_property(color_names.secondary, color_scheme_dark.secondary);
    change_property(color_names.accent, color_scheme_dark.accent);
    change_property(color_names.text, color_scheme_dark.text);
    change_property(color_names.button, color_scheme_dark.button);
    current_mode = "Dark";
  } else {
    change_property(color_names.background, color_scheme_light.background);
    change_property(
      color_names.dark_background,
      color_scheme_light.dark_background
    );
    change_property(color_names.primary, color_scheme_light.primary);
    change_property(color_names.secondary, color_scheme_light.secondary);
    change_property(color_names.accent, color_scheme_light.accent);
    change_property(color_names.text, color_scheme_light.text);
    change_property(color_names.button, color_scheme_light.button);

    current_mode = "Light";
  }
}
