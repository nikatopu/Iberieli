function show_images(list) {
  const main = document.getElementById("album-full");
  main.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("album-photos");
  main.appendChild(container);

  list.forEach((item, index) => {
    var the_directory = "Photos/Album Photos/" + item.photo + ".webp";
    const image = document.createElement("img");
    image.alt = the_directory;
    image.src = the_directory;
    image.id = the_directory;
    image.classList.add("small");
    image.onclick = function () {
      // var collection = Array.from(document.getElementsByClassName("big"));
      // open(the_directory);
      open_image(album_array.indexOf(item));
    };
    image.classList.add(item.type);
    container.appendChild(image);
  });
}

// function enlarge_or_shrink(img) {
//   if (img.classList.contains("small")) {
//     img.style =
//       "position: fixed; top: 0px; left: 0px; width: auto; height: auto; z-index: 2;";

//     img.classList.remove("small");
//     img.classList.add("big");
//   } else {
//     img.style = "";
//     img.classList.remove("big");
//     img.classList.add("small");
//   }
// }

function show_images_and_buttons(list, button_count, current_button) {
  show_images(list[current_button - 1]);
  const parent = document.getElementById("album-full");
  const btn_div = document.createElement("div");
  btn_div.classList.add("album-buttons");
  parent.appendChild(btn_div);
  for (var i = 1; i <= button_count; i++) {
    const btn = document.createElement("button");
    btn.innerHTML = i;
    btn.onclick = function () {
      current_page = btn.innerHTML;
      show_images_and_buttons(new_array, parts, current_page);
      window.scrollTo(0, 0);
    };
    if (current_button == i) {
      btn.classList.add("btn-three");
    } else {
      btn.classList.add("btn-two");
    }

    btn_div.appendChild(btn);
  }
}

var album_array = [
  {
    photo: "sanabiero gverdidan",
    type: "rectangle-photo",
  },
  {
    photo: "qvevri",
    type: "square-photo",
  },
  {
    photo: "ylortebi 2",
    type: "square-photo",
  },
  {
    photo: "setkebi",
    type: "rectangle-photo",
  },
  {
    photo: "venakhi",
    type: "rectangle-photo",
  },
  {
    photo: "mevluda",
    type: "square-photo",
  },
  {
    photo: "saba qvevrshi",
    type: "square-photo",
  },
  {
    photo: "dganan",
    type: "rectangle-photo",
  },
  {
    photo: "guria marani",
    type: "rectangle-photo",
  },
  {
    photo: "marani shigtavsi",
    type: "square-photo",
  },
  {
    photo: "mtevani",
    type: "square-photo",
  },
  {
    photo: "ylortebi",
    type: "rectangle-photo",
  },
  {
    photo: "nergebi",
    type: "rectangle-photo",
  },
  {
    photo: "mevluda 2",
    type: "square-photo",
  },
  {
    photo: "vkreft",
    type: "square-photo",
  },
  {
    photo: "grape 1",
    type: "rectangle-photo",
  },
];

const chunk_size = 12;
const parts = Math.ceil(album_array.length / chunk_size);
var new_array = [[]];
var current_page = 1;

if (parts > 1) {
  for (var i = 0; i < album_array.length; i += chunk_size) {
    new_array[Math.floor(i / chunk_size)] = album_array.slice(
      i,
      i + chunk_size
    );
  }
  show_images_and_buttons(new_array, parts, current_page);
} else {
  show_images(album_array);
}

/*
  Open the image
*/
var current_body_inner = document.getElementById("body").innerHTML;
var opened_index = 0;

function open_image(index) {
  // Save the body's innerhtml and empty it
  var current_body = document.getElementById("body");
  current_body_inner = current_body.innerHTML;
  current_body.innerHTML = "";

  // Display only the image
  var the_img_div = document.createElement("div");
  the_img_div.classList.add("scroller");

  var the_img = document.createElement("img");
  var direct = "Photos/Album Photos/" + album_array[index].photo + ".webp";
  the_img.src = direct;
  the_img.alt = direct;
  the_img.onclick = function () {
    if (index < album_array.length - 1) {
      open_image(index + 1);
    } else {
      open_image(0);
    }
  };
  opened_index = index;

  the_img_div.appendChild(the_img);

  // Add buttons for switching to other images

  var btn_left = document.createElement("button");
  btn_left.innerHTML = "<";
  btn_left.classList.add("switch");
  btn_left.classList.add("left");
  btn_left.onclick = function () {
    if (index > 0) {
      open_image(index - 1);
    } else {
      open_image(album_array.length - 1);
    }
  };

  var btn_right = document.createElement("button");
  btn_right.innerHTML = ">";
  btn_right.classList.add("switch");
  btn_right.classList.add("right");
  btn_right.onclick = function () {
    if (index < album_array.length - 1) {
      open_image(index + 1);
    } else {
      open_image(0);
    }
  };

  the_img_div.appendChild(btn_left);
  the_img_div.appendChild(btn_right);

  // Add a button to close the god damn image

  var btn_close = document.createElement("button");
  btn_close.innerHTML = "X";
  btn_close.classList.add("close");
  btn_close.onclick = function () {
    location.reload();
  };

  the_img_div.appendChild(btn_close);

  current_body.appendChild(the_img_div);
}
