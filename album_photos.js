function show_images(list) {
  const main = document.getElementById("album-full");
  main.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("album-photos");
  main.appendChild(container);

  list.forEach((item, index) => {
    var the_directory = "Photos/Album Photos/" + item.photo + ".jpg";
    const image = document.createElement("img");
    image.alt = the_directory;
    image.src = the_directory;
    image.id = the_directory;
    image.classList.add("small");
    image.onclick = function () {
      var collection = Array.from(document.getElementsByClassName("big"));
      open(the_directory);
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
